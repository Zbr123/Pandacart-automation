const BasePage = require('./BasePage');
class UpsellPage extends BasePage {
  // ==========================
  // IFRAME HANDLERS (Centralized)
  // ==========================
  async switchToOCUIframe() {
    const iframe = await $("iframe[src*='ocu.staging.cartpanda.com']");
    await iframe.waitForDisplayed({ timeout: 15000 });
    await browser.switchFrame(iframe);
    console.log(" Switched to OCU iframe");
  }
  async switchToMainFrame() {
    await browser.switchFrame(null);
    console.log(" Switched back to Main frame");
  }
  // ==========================
  // NAVIGATION & VISIBILITY
  // ==========================
  async clickOnOneClickUpsell() {
    const upsellLink = await $("//a[.//span[normalize-space(text())='One Click Upsell']]");
    await upsellLink.waitForClickable({ timeout: 15000 });
    await upsellLink.scrollIntoView();
    await upsellLink.click();
  }
  async verifyOneClickUpsellHeading() {
    const heading = await $("//img[contains(@alt, 'Card image cap')]");
    await heading.waitForDisplayed({ timeout: 10000 });
    console.log(" One Click Upsell heading is visible");
  }
  async clickAddUpsellButton() {
    await this.switchToOCUIframe();
    const addUpsellBtn = await $("//button[contains(., 'Add upsell')]");
    await addUpsellBtn.waitForClickable({ timeout: 10000 });
    await addUpsellBtn.click();
    await this.switchToMainFrame();
  }
  async verifyAffiliateField() {
    await this.switchToOCUIframe();
    const affiliateField = await $("//p[@class='label-text' and normalize-space(text())='Affiliate']");
    await affiliateField.waitForDisplayed({ timeout: 10000 });
    console.log(" 'Affiliate' field is visible");
    await this.switchToMainFrame();
  }
  async fillUpsellNameField() {
    await this.switchToOCUIframe();
    const nameField = await $("input[name='name']");
    await nameField.waitForDisplayed({ timeout: 10000 });
    await nameField.setValue("Test Offer");
    console.log(' Entered "Test Offer" in Name field');
    await this.switchToMainFrame();
  }
  async clickSaveAndClose() {
    await this.switchToOCUIframe();
    const saveBtn = await $("//span[normalize-space(text())='Save and close']");
    await saveBtn.waitForClickable({ timeout: 10000 });
    await saveBtn.click();
    await this.switchToMainFrame();
  }
  async verifyTestOfferHeading() {
    await this.switchToOCUIframe();
    await browser.pause(2000);
    const testOfferHeading = await $("//p[contains(@class,'upsell-title') and normalize-space(.)='Test Offer']");
    await testOfferHeading.scrollIntoView();
    await testOfferHeading.waitForDisplayed({ timeout: 20000 });
    console.log(" 'Test Offer' heading is visible inside iframe");
    await this.switchToMainFrame();
  }
  async clickAddNewStepAndSelectUpsell() {
    await this.switchToOCUIframe();
    const addNewStepBtn = await $("//button[normalize-space(.)='Add new step']");
    await addNewStepBtn.waitForClickable({ timeout: 10000 });
    await addNewStepBtn.click();
    const addUpsellOption = await $("//button[contains(@class,'custom-dropdown-btn') and normalize-space(text())='Add Upsell']");
    await addUpsellOption.waitForClickable({ timeout: 10000 });
    await addUpsellOption.click();
    await this.switchToMainFrame();
  }
  async fillUpsellName(upsellName) {
    await this.switchToOCUIframe();

    const nameField = await $("input[name='name']");
    await nameField.waitForDisplayed({ timeout: 10000 });
    await nameField.setValue(upsellName);
    console.log(`Entered "${upsellName}" in Name field`);

    await this.switchToMainFrame();
}
  async clickOnNoProduct() {
    await this.switchToOCUIframe();
    const noProductBtn = await $("//p[normalize-space(.)='No product']");
    await noProductBtn.scrollIntoView();
    await noProductBtn.waitForClickable({ timeout: 10000 });
    await noProductBtn.click();
    console.log(" Clicked on 'No product' button");
    await this.switchToMainFrame();
  }
  async enterProduct(productName) {
    await this.switchToOCUIframe();

    const productInput = await $("//input[@name='search-product' and @placeholder='Search for a product']");
    await productInput.waitForDisplayed({ timeout: 10000 });
    await productInput.setValue(productName);
    console.log(`Entered product name: "${productName}"`);

    await browser.pause(1000);

    await this.switchToMainFrame();
}
  async selectProductFromDropdown1() {
    await this.switchToOCUIframe();
    const option = await $("//p[contains(@class,'check-product-title') and contains(normalize-space(.), 'DROP SHIRT')]");
    await option.waitForClickable({ timeout: 10000 });
    await option.click();
    console.log(" Selected product 'DROP SHIRT'");
    await this.switchToMainFrame();
  }
  async selectProductFromDropdown2() {
    await this.switchToOCUIframe();
    const option = await $("//p[contains(@class,'check-product-title') and contains(normalize-space(.), 'SOCK')]");
    await option.waitForClickable({ timeout: 10000 });
    await option.click();
    console.log(" Selected product 'DROP SHIRT'");
    await this.switchToMainFrame();
  }
  async clickSavebtn() {
    await this.switchToOCUIframe();
    const saveBtn = await $("//button[normalize-space(text())='Save' and contains(@class,'main-btn')]");
    await saveBtn.scrollIntoView();
    await saveBtn.waitForClickable({ timeout: 10000 });
    await saveBtn.click();
    console.log(" Clicked on 'Save' button");
    await this.switchToMainFrame();
  }
  async clickSaveAndCloseBtn() {
    await this.switchToOCUIframe();
    const saveAndCloseBtn = await $("//button[normalize-space(text())='Save and close']");
    await saveAndCloseBtn.scrollIntoView();
    await saveAndCloseBtn.waitForClickable({ timeout: 10000 });
    await saveAndCloseBtn.click();
    console.log(" Clicked on 'Save and close' button");
    await this.switchToMainFrame();
    await browser.pause(5000);
    
  }
  async clickBackButton() {
    await this.switchToOCUIframe();
    const backBtn = await $("//button[contains(@class,'back-button')]");
    await backBtn.scrollIntoView();
    await backBtn.waitForClickable({ timeout: 10000 });
    await backBtn.click();
    console.log(" Clicked on 'Back' button");
    await this.switchToMainFrame();
  }
  async verifyTestOffer() {
    await this.switchToOCUIframe();
    const testOffer = await $("//span[normalize-space(text())='Test Offer']");
    await testOffer.waitForDisplayed({ timeout: 10000 });
    console.log(" 'Test Offer' is displayed successfully");
    await browser.pause(1000);
    await this.switchToMainFrame();
  }
  async enableTestOffer() {
    await this.switchToOCUIframe();
    const row = await $("//tr[td[normalize-space(span/text())='Test Offer']]");
    await row.waitForDisplayed({ timeout: 5000 });
    const checkbox = await row.$(".//input[@type='checkbox']");
    await checkbox.scrollIntoView();
    await browser.pause(500);
    try {
      await checkbox.waitForClickable({ timeout: 10000 });
      await checkbox.click();
      console.log(" 'Test Offer' enabled (normal click)");
    } catch {
      await browser.execute((el) => el.click(), checkbox);
      console.log(" 'Test Offer' enabled (JS click)");
    }
    await this.switchToMainFrame();
  }

  async selectsecondupsell() {
  await this.switchToOCUIframe();
  const addUpsellOption = await $('//button[@class="rounded-md action-dropdown-btn" and normalize-space(text())="Add Upsell"]');
  const plusIcon = await $("//div[contains(@class, 'action-add-btn')]");

  await plusIcon.scrollIntoView();
  await plusIcon.waitForClickable({ timeout: 10000 });
  await plusIcon.click();
  console.log("Clicked on plus icon");

  await addUpsellOption.waitForClickable({ timeout: 10000 });
  await addUpsellOption.click();
  console.log("Selected 'Add upsell' option");

  await this.switchToMainFrame();
}
async enterUpsellDiscount(discountValue) {
    await this.switchToOCUIframe();

    const discountField = await $("input[name='discount-amount']"); // update selector if needed
    await discountField.waitForDisplayed({ timeout: 10000 });
    await discountField.click();
    await discountField.setValue(discountValue);
    console.log(`Entered Upsell discount value: "${discountValue}"`);

    await this.switchToMainFrame();
}

}
module.exports = new UpsellPage();