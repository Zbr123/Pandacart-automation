const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../../pages/LoginPage');
const DashboardPage = require('../../pages/DashboardPage');
const S2SIntegrationPage = require('../../pages/S2SIntegrationPage');
// :white_tick: Admin Navigation
When('I click on "Admin" tab', async () => {
    await S2SIntegrationPage.clickAdminTab();
});
Then('I should see Settings Page', async () => {
    await S2SIntegrationPage.verifySettingsPage();
});
// :white_tick: Tracking and Scripting Navigation
When('I click on {string} option', async (optionName) => {
    await S2SIntegrationPage.clickTrackingOption(optionName);
});
Then('I should see Tracking and Scripting Page', async () => {
    await S2SIntegrationPage.verifyTrackingAndScriptingPage();
});
// :white_tick: Integration List and Actions
Then('I click on "My Integration" button', async () => {
    await S2SIntegrationPage.verifyIntegrationListVisible();
});
When('I select the checkbox next to the existing integration', async () => {
    await S2SIntegrationPage.selectIntegrationCheckbox();
});
Then('I should see appearance of "Action" button', async () => {
    await S2SIntegrationPage.verifyActionButtonVisible();
});
When('I click on "Action" button', async () => {
    await S2SIntegrationPage.clickActionButton();
});
When('I select {string} from the dropdown', async (optionName) => {
    await S2SIntegrationPage.selectDropdownOption(optionName);
});
Then('I should see a confirmation message {string}', async (message) => {
    await S2SIntegrationPage.verifySuccessMessage(message);
});
Then('the integration status should be updated to "Inactive"', async () => {
    await S2SIntegrationPage.verifyStatusInactive();
});