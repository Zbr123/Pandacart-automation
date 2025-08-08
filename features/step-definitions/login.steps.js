const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../../pages/LoginPage');

console.log("✅ Step definitions file is loaded!"); // Debugging step

When("I enter {string} in email field", async (email) => {
    await LoginPage.enterEmail(email);
    await browser.pause(1000);

});

Then("I should see Dashboard Page", async () => {
    await LoginPage.dashBoardPage();
    await browser.pause(5000);
});







