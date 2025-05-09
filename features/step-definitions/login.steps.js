const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../../pages/LoginPage');

console.log("✅ Step definitions file is loaded!"); // Debugging step

Given("I am on the login page", async () => {
    const baseUrl = browser.options.baseUrl;
    await browser.url(`${baseUrl}`);
    await browser.pause(3000);
    await LoginPage.assertLoginHeadingDisplayed();
});



When("I enter {string} in email field", async (email) => {
    await LoginPage.enterEmail(email);
    await browser.pause(1000);

});

When("I enter {string} in password field", async (password) => {
    await LoginPage.enterPassword(password);
    await browser.pause(1000);

});

When("I click on Signin button", async () => {
    await LoginPage.SignInBtn();
    await browser.pause(10000);
});

Then("I should see Select store Page", async () => {
    await LoginPage.storePage();
    await browser.pause(5000);
});

When("I click on {string} button", async (store) => {
    await browser.pause(1000);
    await LoginPage.selectstore(store);
});

When("I click On Profile button", async () => {
    await LoginPage.profileSettingBtn();
    await browser.pause(2000);
});

When("I click on Logout button", async() => {
    await LoginPage.LogoutBtn();
    await browser.pause(5000);
});

Then("I should see log into your account text", async () => {
    await LoginPage.LogInToYourAccountText();
    await browser.pause(2000);

});

Then("I should see Dashboard Page", async () => {
    await LoginPage.dashBoardPage();
    await browser.pause(5000);
});







