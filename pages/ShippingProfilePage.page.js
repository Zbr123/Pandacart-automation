const BasePage = require('./BasePage');

class ShippingProfilePage extends BasePage {

    async clickAdminBtn() {
        const adminBtn = await $("//span[normalize-space()='Admin']");
        await adminBtn.waitForClickable({ timeout: 15000 });
        await adminBtn.click();
    }

    async clickShippingCard() {
        const shippingCard = await $("//span[normalize-space()='Shipping']");
        await shippingCard.waitForClickable({ timeout: 15000 });
        await shippingCard.click();
    }

    async verifyShippingHeading() {
        const heading = await $("//h4[contains(normalize-space(),'Shipping')]");
        await heading.waitForDisplayed({ timeout: 10000 });
    }

    async clickCreateShippingProfile() {
        const btn = await $("//a[contains(normalize-space(),'Create new profile')]");
        await btn.waitForClickable({ timeout: 10000 });
        await btn.click();
    }

    async enterShippingProfileName(name) {
        const input = await $("//input[@placeholder='Profile Name']");
        await input.waitForDisplayed({ timeout: 10000 });
        await input.setValue(name);
    }

    async clickAddProducts() {
        const btn = await $("//button[contains(.,'Add products')]");
        await btn.waitForClickable({ timeout: 10000 });
        await btn.click();
        await browser.pause(3000);
    }
async selectOneProduct() {
    const products = await $$("//input[contains(@class,'js_active_product')]");

    if (products.length < 3) {
        throw new Error('Less than 3 products available in dropdown');
    }

    for (let i = 0; i < 3; i++) {
        await products[i].waitForClickable({ timeout: 10000 });
        await products[i].click();
    }

    await browser.pause(4000);
}

    async clickSelectButton() {
        const selectBtn = await $("//button[@id='save-button' and normalize-space()='Select']");
        await selectBtn.waitForClickable({ timeout: 10000 });
        await selectBtn.click();
    }

    async clickSaveButton() {
        const saveBtn = await $("//button[@id='save-shipping']");
        await saveBtn.waitForClickable({ timeout: 10000 });
        await saveBtn.click();
    }

    async clickAddShippingZone() {
        const btn = await $("//a[contains(.,'Add shipping zone')]");
        await btn.waitForClickable({ timeout: 10000 });
        await btn.click();
    }

    async enterShippingZoneName(zoneName) {
        const input = await $("//input[@placeholder='Eg. North America']");
        await input.waitForDisplayed({ timeout: 10000 });
        await input.setValue(zoneName);
    }

    async clickEditButton() {
        const btn = await $('//a[@id="addStateGlobal"]');
        await btn.waitForClickable({ timeout: 10000 });
        await btn.click();
    }

    async enterCountry(country) {
        const countryInput = await $('//input[@id="search_state_field_json"]');
        await countryInput.waitForDisplayed({ timeout: 10000 });
        await countryInput.setValue(country);

        const option = await $(`//div[normalize-space()='${country}']`);
        await option.waitForDisplayed({ timeout: 10000 });
        await option.click();
    }

    async clickSaveChanges() {
        const saveChanges = await $('//button[@class="btn btn-primary js_save_states_global"]');
        await saveChanges.waitForClickable({ timeout: 10000 });
        await saveChanges.click();
    }

    async clickAddRate() {
        const btn = await $("//button[contains(.,'Add rate')]");
        await btn.waitForClickable({ timeout: 10000 });
        await btn.click();
    }

    async clickAddConditions() {
        const btn = await $('//a[@id="showConditions"]');
        await btn.waitForClickable({ timeout: 10000 });
        await btn.click();
    }
    async checkBaseOnOrderValue() {
        const btn = await $('//label[@for="price-rate"]');
        await btn.waitForClickable({ timeout: 10000 });
        await btn.click();
    }
    async enterShippingRateName(name) {
        const input = await $('//input[@name="custom-rate-name"]');
        await input.waitForDisplayed({ timeout: 10000 });
        await input.setValue(name);
    }

    async enterShippingRateAmount(amount) {
        const input = await $('//input[@type="text" and @name="price" ]');
        await input.waitForDisplayed({ timeout: 10000 });
        await input.setValue(amount);
    }

    
    async enterMinimumOrderRate(minValue) {
        const input = await $('//input[@name="min-price"]');
        await input.waitForDisplayed({ timeout: 10000 });
        await input.setValue(minValue);
    }

    async enterMaximumOrderRate(maxValue) {
        const input = await $('//input[@name="max-price"]');
        await input.waitForDisplayed({ timeout: 10000 });
        await input.setValue(maxValue);
    }

    async enterMinimumOrderWeight(minWeight) {
        const input = await $('//input[@name="min-weight"]');
        await input.waitForDisplayed({ timeout: 10000 });
        await input.setValue(minWeight);
    }

    async enterMaximumOrderWeight(maxWeight) {
        const input = await $('//input[@name="max-weight"]');
        await input.waitForDisplayed({ timeout: 10000 });
        await input.setValue(maxWeight);
    }
    async clickSaveRate() {
        const btn = await $('//button[@class="btn btn-primary btn-save-rate"]');
        await btn.waitForClickable({ timeout: 10000 });
        await btn.click();
    }

    async finalSaveShippingProfile() {
        const saveBtn = await $("//button[@type='submit']");
        await saveBtn.waitForClickable({ timeout: 10000 });
        await saveBtn.click();
    }

}

module.exports = new ShippingProfilePage();
