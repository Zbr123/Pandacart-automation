const path = require('path');
const fs = require('fs');
require('dotenv').config(); // Load environment variables
const allure = require('@wdio/allure-reporter').default;

exports.config = {
    //
    // ====================
    // Runner Configuration
    // ====================
    runner: 'local',
    path: '/',  // DevTools protocol uses '/'
    specs: ['./features/**/*.feature'],
    maxInstances: 1,

    //
    // ==================
    // Capabilities
    // ==================
    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome',
        acceptInsecureCerts: true,
        'goog:chromeOptions': {
            args: [
                '--no-sandbox',
                '--disable-dev-shm-usage',
                '--disable-web-security',
                '--disable-features=VizDisplayCompositor',
                '--start-maximized'
            ]
        }
    }],

    //
    // ===================
    // Test Configurations
    // ===================
    logLevel: 'info',
    baseUrl: 'https://accounts.staging.cartpanda.com/login',

    // Use DevTools instead of chromedriver
    services: ['devtools'],

    //
    // Framework
    framework: 'cucumber',

    cucumberOpts: {
        require: fs.readdirSync(path.join(__dirname, './features/step-definitions'))
            .filter(file => file.endsWith('.js'))
            .map(file => path.join(__dirname, './features/step-definitions', file)),
        timeout: 60000,
        ignoreUndefinedDefinitions: false,
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        format: ['pretty'],
        snippets: true,
        source: true,
        strict: true,
        tagExpression: '',
    },

    //
    // ===================
    // Reporters
    // ===================
    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
            useCucumberStepReporter: true
        }]
    ],

    //
    // ===================
    // Hooks
    // ===================
    beforeScenario: async function (world) {
        console.log(`Running scenario: ${world.pickle.name}`);
        await browser.setWindowSize(1920, 1080);
    },

    afterStep: async function (step, context, { error }) {
        if (error) {
            const screenshot = await browser.takeScreenshot();
            allure.addAttachment('Screenshot', Buffer.from(screenshot, 'base64'), 'image/png');
        }
    },

    afterScenario: async function (world, result) {
        console.log(`Scenario completed with status: ${result.status}`);
        const screenshot = await browser.takeScreenshot();
        allure.addAttachment('End of Scenario Screenshot', Buffer.from(screenshot, 'base64'), 'image/png');
    },

    onComplete: function () {
        const allureEnvPath = path.resolve('./allure-results/environment.properties');
        const envData =
            `BROWSER=Chrome\n` +
            `ENVIRONMENT=Staging\n` +
            `BASE_URL=${this.baseUrl}\n`;
        fs.writeFileSync(allureEnvPath, envData);
    }
};