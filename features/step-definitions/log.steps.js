const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../../pages/LoginPage');

console.log("✅ Step definitions file is loaded!"); // Debugging step

Given("I am on the login page", async () => {
    const baseUrl = browser.options.baseUrl;
    
    try {
        console.log(`Navigating to: ${baseUrl}`);
        await browser.url(`${baseUrl}`);
        await browser.pause(3000);
        
        // Check if we get a 403 error
        const currentUrl = await browser.getUrl();
        console.log(`Current URL: ${currentUrl}`);
        
        if (currentUrl.includes('403') || currentUrl.includes('forbidden')) {
            throw new Error('403 Forbidden - Access denied to staging environment');
        }
        
        await LoginPage.assertLoginHeadingDisplayed();
    } catch (error) {
        console.error('Error accessing login page:', error.message);
        
        if (error.message.includes('403')) {
            console.log('⚠️  403 Error detected. Possible solutions:');
            console.log('1. Check if your IP is whitelisted for staging environment');
            console.log('2. Verify if you need VPN access');
            console.log('3. Contact admin for staging environment access');
            console.log('4. Try using a different environment URL');
        }
        
        throw error;
    }
});



When("I enter {string} in email field", async (email) => {
    await LoginPage.enterEmail(email);
    await browser.pause(1000);

});








