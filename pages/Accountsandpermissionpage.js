const BasePage = require('./BasePage');

class Accountsandpermissionpage extends BasePage {

async clickAdminTab() {
        const adminTab = await $("//span[normalize-space()='Admin']");
        await adminTab.waitForDisplayed({ timeout: 15000 });
        await adminTab.click();
    }
    // :white_tick: Verify Settings Page
    async verifySettingsPage() {
        const settingsTitle = await $("//h4[contains(text(),'Settings')]");
        await settingsTitle.waitForDisplayed({ timeout: 15000 });
        await expect(settingsTitle).toBeDisplayed();
    }




    async clickAccountsPermissionsBtn() {
        const accountsPermissionsBtn = await $("//span[normalize-space()='Accounts and permissions']");
        await accountsPermissionsBtn.waitForClickable({ timeout: 15000 });
        await accountsPermissionsBtn.click();
    }


    async verifyAccountsPermissionsPage() {
        const verifyAccountsPermissionsPage = await $("//h4[normalize-space()='Accounts and permissions']");
        await verifyAccountsPermissionsPage.waitForClickable({ timeout: 15000 });
        await verifyAccountsPermissionsPage.click();
    }

async clickAddStaffAccountBtn() {
    const addStaffBtn = await $("//a[normalize-space()='Add staff account']");
    await addStaffBtn.waitForClickable({ timeout: 15000 });
    await addStaffBtn.click();
}

async enterStaffEmail(email) {
    const emailField = await $("//input[@name='email']");
    await emailField.waitForDisplayed({ timeout: 15000 });
    await emailField.setValue(email);
}

async Verifystaffaccountpage() {
        const Verifystaffaccountpage = await $("//h4[normalize-space()='Add staff account']");
        await Verifystaffaccountpage.waitForClickable({ timeout: 15000 });
        await Verifystaffaccountpage.click();
    }

async clickFullPermissionCheckbox() {
    const fullPermissionCheckbox = await $("#fullPermissionCheckbox");
    await fullPermissionCheckbox.waitForClickable({ timeout: 15000 });
    await fullPermissionCheckbox.click();
}

async clickSaveBtn() {
    const saveBtn = await $("//button[@class='btn btn-primary form-submit ms-2']");
    await saveBtn.waitForClickable({ timeout: 15000 });
    await saveBtn.click();
}

async verifyInvitationSentMessage() {
    const invitationMessage = await $("//div[normalize-space()='Invitation sent.']");
    await invitationMessage.waitForDisplayed({ timeout: 15000 });
}

async editaccountbtn() {
    const invitationMessage = await $("(//button[@class='btn btn-primary'])[2]");
    await invitationMessage.waitForDisplayed({ timeout: 15000 });
}

async verifyeditaccountpage() {
   const invitationMessage = await $(`//button[@onclick="location.href='https://accounts.staging.cartpanda.com/settings/account/staff/3483'"]`);
    await invitationMessage.waitForDisplayed({ timeout: 15000 });
}

async clickdeleteBtn() {
    const invitationMessage = await $("//button[text()='Delete']");
    await invitationMessage.waitForDisplayed({ timeout: 15000 });
}
async verifystaffaccount() {
    const invitationMessage = await $("//h5[contains(text(),'Staff accounts')]");
    await invitationMessage.waitForDisplayed({ timeout: 15000 });
}

}

module.exports = new Accountsandpermissionpage();