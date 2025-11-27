const BasePage = require('./BasePage');
class S2SIntegrationPage extends BasePage {
    // :white_tick: Click Admin Tab
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
    // :white_tick: Click any settings option (Tracking and Scripting)
    async clickTrackingOption(optionName) {
        const option = await $(`//span[normalize-space()='${optionName}']`);
        await option.waitForDisplayed({ timeout: 10000 });
        await option.click();
    }
    // :white_tick: Verify Tracking and Scripting page visible
    async verifyTrackingAndScriptingPage() {
        const trackingTitle = await $("//h4[contains(translate(., 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'),'tracking and scripting')]");
        await trackingTitle.waitForDisplayed({ timeout: 10000 });
        await expect(trackingTitle).toBeDisplayed();
    }
    // :white_tick: Open "My Integration" section
    async verifyIntegrationListVisible() {
        const integrationTab = await $("//a[@href='#menu1_s2s']");
        await integrationTab.waitForDisplayed({ timeout: 15000 });
        await integrationTab.click();
    }
    // :white_tick: Select first integration checkbox
    async selectIntegrationCheckbox() {
        const checkbox = await $("//input[contains(@class,'checkSingleS2s')]");
        await checkbox.waitForDisplayed({ timeout: 10000 });
        await checkbox.click();
    }
    // :white_tick: Verify Action button appears
    async verifyActionButtonVisible() {
        const actionBtn = await $("//a[contains(@class,'actionButtonS2s')]");
        await actionBtn.waitForDisplayed({ timeout: 15000 });
        await expect(actionBtn).toBeDisplayed();
    }
    // :white_tick: Click on Action button
    async clickActionButton() {
        const actionBtn = await $("//a[contains(@class,'actionButtonS2s')]");
        await actionBtn.waitForClickable({ timeout: 15000 });
        await actionBtn.click();
    }
    // :white_tick: Select Deactivate option from dropdown
    async selectDropdownOption(optionName) {
        const dropdown = await $("//a[@id='s2s_service_deactivate']");
        await dropdown.waitForClickable({ timeout: 10000 });
        await dropdown.click();
        const dropdownItem = await $(`//li[normalize-space(text())='${optionName}']`);
        await dropdownItem.waitForDisplayed({ timeout: 10000 });
        await dropdownItem.click();
    }
    // :white_tick: Verify success message
    async verifySuccessMessage(expectedMessage) {
        const successMsg = await $("//div[contains(text(),'Integration deactivated successfully')]");
        await successMsg.waitForDisplayed({ timeout: 10000 });
        const text = await successMsg.getText();
        await expect(text).toContain(expectedMessage);
    }
    // :white_tick: Verify integration status is "Inactive"
    async verifyStatusInactive() {
        const inactiveStatus = await $("//td[contains(text(),'Inactive')]");
        await inactiveStatus.waitForDisplayed({ timeout: 10000 });
        await expect(inactiveStatus).toBeDisplayed();
    }
}
