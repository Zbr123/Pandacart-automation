const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../../pages/LoginPage');
const DashboardPage = require('../../pages/DashboardPage');
const Accountsandpermissionpage = require('../../pages/AccountsandpermissionPage');

When('I click on "Admin" tab,', async () => {
    await Accountsandpermissionpage.clickAdminTab();
});
Then('I should see Settings Page.', async () => {
    await Accountsandpermissionpage.verifySettingsPage();
});

When('I click on the accounts and permissions', async () => {
    await Accountsandpermissionpage.clickAccountsPermissionsBtn();
});

Then('I should see the account nd permission page', async () => {
    await Accountsandpermissionpage.verifyAccountsPermissionsPage();
});

When('Click on the add staff account', async () => {
    await Accountsandpermissionpage.clickAddStaffAccountBtn();
});

When('I click and enter the email {string}', async (email) => {
    await Accountsandpermissionpage.enterStaffEmail(email);
});

When('I Should see the staff account page', async () => {
    await Accountsandpermissionpage.Verifystaffaccountpage();
});

When('I click On the staff member will have full permission check box', async () => {
    await Accountsandpermissionpage.clickFullPermissionCheckbox();
});

When('Then I click on the save button', async () => {
    await Accountsandpermissionpage.clickSaveBtn();
});

Then('I should see the staff invitaion sent message', async () => {
    await Accountsandpermissionpage.verifyInvitationSentMessage();
});

When('I click on the edit account button', async () => {
    await Accountsandpermissionpage.editaccountbtn();
});

Then('I Should see the edit staff account page', async () => {
    await Accountsandpermissionpage.verifyeditaccountpage();
});

When('Then I click on the delete button', async () => {
    await Accountsandpermissionpage.clickdeleteBtn();
});

Then('I should see the staff accounts.', async () => {
    await Accountsandpermissionpage.verifystaffaccount();
});
