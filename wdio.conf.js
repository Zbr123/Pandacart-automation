const path = require('path');
const fs = require('fs');
require('dotenv').config(); // Load environment variables
const allure = require('@wdio/allure-reporter').default;
exports.config = {
    runner: 'local',
    path: '/',
    port: 9515,
    specs: ['./features/**/*.feature'],
    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome',
        acceptInsecureCerts: true,
        'goog:chromeOptions': {
            args: [
                '--no-sandbox',
                '--disable-dev-shm-usage',
                '--disable-web-security',
                '--disable-features=VizDisplayCompositor'
            ]
        }
    }],
    logLevel: 'info',
    services: ['chromedriver'],
    framework: 'cucumber',
    // --------------------------
    // Allure Reporter
    // --------------------------
    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
            useCucumberStepReporter: true
        }]
    ],
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
    baseUrl: 'https://accounts.staging.cartpanda.com/login',
    // --------------------------
    // Hooks
    // --------------------------
    beforeScenario: async function (world) {
        console.log(`Running scenario: ${world.pickle.name}`);
        await browser.setWindowSize(1920, 1080);
    },
    afterStep: async function (step, context, { error }) {
        // Screenshot on failure
        if (error) {
            const screenshot = await browser.takeScreenshot();
            allure.addAttachment('Screenshot', Buffer.from(screenshot, 'base64'), 'image/png');
        }
    },
    afterScenario: async function (world, result) {
        console.log(`Scenario completed with status: ${result.status}`);
        // Optional: Screenshot at the end of every scenario (even if passed)
        const screenshot = await browser.takeScreenshot();
        allure.addAttachment('End of Scenario Screenshot', Buffer.from(screenshot, 'base64'), 'image/png');
    },
    // Add environment info to Allure report
    onComplete: function () {
        const allureEnvPath = path.resolve('./allure-results/environment.properties');
        const envData =
            `BROWSER=Chrome\n` +
            `ENVIRONMENT=Staging\n` +
            `BASE_URL=${this.baseUrl}\n`;
        fs.writeFileSync(allureEnvPath, envData);
    }
};