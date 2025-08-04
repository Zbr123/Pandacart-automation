const path = require('path');
const fs = require('fs');
require('dotenv').config(); // ✅ Load environment variables

exports.config = {
    runner: 'local',

    
    path: '/',
    port: 9515, // Default WebDriver port for ChromeDriver

    // Define the test specs (Feature files location)
    specs: ['./features/**/*.feature'], // Ensure feature files are inside `features/`

    // Browser capabilities
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

    // Log level
    logLevel: 'info',

    // Services (Ensure chromedriver is installed via `npm i --save-dev chromedriver`)
    services: ['chromedriver'], 

    // Framework configuration
    framework: 'cucumber',

    // Reporters
    reporters: ['spec'],

    // Ensure WDIO explicitly loads the correct step definition files
    cucumberOpts: {
        require: fs.readdirSync(path.join(__dirname, './features/step-definitions'))
            .filter(file => file.endsWith('.js')) // Load only .js step definition files
            .map(file => path.join(__dirname, './features/step-definitions', file)), // Convert to absolute path
        timeout: 60000,
        ignoreUndefinedDefinitions: false,

        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        format: ['pretty'],
        snippets: true,
        source: true,
        strict: true, // Ensures undefined steps are flagged
        tagExpression: '', // Run all tests
        timeout: 60000,
        ignoreUndefinedDefinitions: false, // Ensures undefined steps cause failure
    },

    // Base URL for the tests
    baseUrl: 'https://accounts.staging.cartpanda.com/login',

    // Hooks for better debugging
    beforeSession: async function (capabilities, specs) {
        // Set custom headers if needed for staging environment
        console.log('Setting up session with custom headers...');
    },

    beforeScenario: async function (world) {
        console.log(`Running scenario: ${world.pickle.name}`);
        
        // Set custom headers for each scenario if needed
        await browser.setWindowSize(1920, 1080);
        
        // Add custom headers if required by the staging environment
        // await browser.execute(() => {
        //     // Add any required headers here
        // });
    },

    afterScenario: async function (world, result) {
        console.log(`Scenario completed with status: ${result.status}`);
    }
};

