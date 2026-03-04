require('dotenv').config();
const { sendSlack } = require('./utils/slackNotifier');

exports.config = {
    runner: 'local',

    specs: ['./features/**/*.feature'],

    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome',
        acceptInsecureCerts: true,
        'goog:chromeOptions': {
            args: [
                '--start-maximized',
                '--no-sandbox',
                '--disable-dev-shm-usage',
                '--disable-web-security',
                '--disable-features=VizDisplayCompositor'
            ]
        }
    }],

    logLevel: 'info',

    framework: 'cucumber',

    cucumberOpts: {
        require: ['./features/step-definitions/**/*.js'],
        timeout: 60000
    },

    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
            useCucumberStepReporter: true
        }]
    ],

    baseUrl: 'https://accounts.staging.cartpanda.com/login',

    before: async function () {
        await browser.maximizeWindow();
    },

    /**
     * 🔴 Slack Alert on Failed Scenario (Cucumber Correct Hook)
     */
    afterScenario: async function (world, result, context) {
        if (!result.passed) {
            await sendSlack(`
🔴 SCENARIO FAILED
Feature: ${world.gherkinDocument.feature.name}
Scenario: ${world.pickle.name}
Error: ${result.error?.message || "Step failure occurred"}
            `);
        }
    },

    /**
     * 🚀 Slack Final Execution Summary
     */
    onComplete: async function (exitCode, config, capabilities, results) {

        const status = exitCode === 0 ? "✅ PASSED" : "❌ FAILED";

        await sendSlack(`
🚀 Pandacart Automation Finished
Status: ${status}
Specs Run: ${results.finished}
Failures: ${results.failed}
        `);
    }
};
