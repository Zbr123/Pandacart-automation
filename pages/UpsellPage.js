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
    await browser.pause(5000);
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
   async clickcreateUpsellButton() {
    await this.switchToOCUIframe();
    const createUpsellButton = await $("//button[contains(., 'Create upsell')]");
    await createUpsellButton.waitForClickable({ timeout: 10000 });
    await createUpsellButton.click();
    await this.switchToMainFrame();
  }
  
  
  async verifyAffiliateField() {
    await this.switchToOCUIframe();
    const affiliateField = await $("//p[@class='label-text' and normalize-space(text())='Affiliate']");
    await affiliateField.waitForDisplayed({ timeout: 10000 });
    console.log(" 'Affiliate' field is visible");
    await this.switchToMainFrame();
  }
  async fillUpsellNameField(offername) {
    await this.switchToOCUIframe();
    const nameField = await $("input[name='name']");
    await nameField.waitForDisplayed({ timeout: 10000 });
    await nameField.setValue(offername);
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
    const testOfferHeading = await $("//label[contains(@class,'text-xs-primary mb-0') and normalize-space(.)='Activate']");
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
 async enterProductCollection(productName) {
    await this.switchToOCUIframe();
    const productInput = await $("//input[@placeholder='Type 3 characters to search for a collection']");
    await productInput.waitForDisplayed({ timeout: 10000 });
    await productInput.setValue(productName);
    console.log(`Entered product name: "${productName}"`);
    await browser.pause(1000);
    await this.switchToMainFrame();
}
  // async selectProductFromDropdown1() {
  //   await this.switchToOCUIframe();
  //   const option = await $("//p[contains(@class,'check-product-title') and contains(normalize-space(.), 'DROP SHIRT')]");
  //   await option.waitForClickable({ timeout: 10000 });
  //   await option.click();
  //   console.log(" Selected product 'DROP SHIRT'");
  //   await this.switchToMainFrame();
  // }
  // async selectProductFromDropdown2() {
  //   await this.switchToOCUIframe();
  //   const option = await $("//p[contains(@class,'check-product-title') and contains(normalize-space(.), 'SOCK')]");
  //   await option.waitForClickable({ timeout: 10000 });
  //   await option.click();
  //   console.log(" Selected product 'DROP SHIRT'");
  //   await this.switchToMainFrame();
  // }
  async selectProductFromDropdown(productName) {
    await this.switchToOCUIframe();
    const productOption = await $(
        `//p[contains(@class,'check-product-title') and contains(normalize-space(.), '${productName}')]`
    );
    await productOption.waitForClickable({ timeout: 10000 });
    await productOption.click();
    await browser.pause(5000);
    console.log(` Selected product "${productName}" from dropdown`);
    await this.switchToMainFrame();
}

  async selectProductCollectionFromDropdown(productName) {
    await this.switchToOCUIframe();
    const productOption = await $(
        `//span[normalize-space()="(id: 968)"]`
    );
    await productOption.waitForClickable({ timeout: 10000 });
    await productOption.click();
    await browser.pause(5000);
    console.log(` Selected product "${productName}" from dropdown`);
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
 async verifyUpsellIsVisible(offerName) {
await this.switchToOCUIframe();

let isFound = false;
do {
const offerLocator = await $(`//span[normalize-space()='${offerName}']`);
if (await offerLocator.isExisting()) {
await offerLocator.scrollIntoView();
await offerLocator.waitForDisplayed({ timeout: 10000 });
console.log(`:heavy_tick: '${offerName}' is displayed successfully`);
isFound = true;
break;
}


// Check if next pagination button exists and is enabled
const nextButton = await $("//button[@role='menuitem' and @aria-label='Go to next page']");
if (await nextButton.isExisting() && await nextButton.isEnabled()) {
await nextButton.click();
await browser.pause(1000); // wait for table to refresh
} else {
break; // no more pages
}
} while (!isFound);


await this.switchToMainFrame();


if (!isFound) {
throw new Error(`Upsell '${offerName}' not found in any page`);
}
}
async enablefunnel(offerName) {
    await this.switchToOCUIframe();
    // Row containing the upsell name
    const row = await $(`//tr[td[.//span[normalize-space(text())='${offerName}']]]`);
    await row.waitForDisplayed({ timeout: 10000 });
    // Checkbox inside that row
    const checkbox = await row.$(".//input[@type='checkbox']");
    await checkbox.scrollIntoView();
    await browser.pause(300);
    try {
        await checkbox.waitForClickable({ timeout: 5000 });
        await checkbox.click();
        console.log(`:heavy_tick: '${offerName}' enabled using normal click`);
    } catch (err) {
        await browser.execute(el => el.click(), checkbox);
        console.log(`:heavy_tick: '${offerName}' enabled using JS fallback click`);
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
  async selectseconddownsell() {
  await this.switchToOCUIframe();
  const addDownsellOption = await $('//button[@class="rounded-md action-dropdown-btn" and normalize-space(text())="Add Downsell"]');
  const plusIcon = await $("//div[contains(@class, 'action-add-btn')]");
  await plusIcon.scrollIntoView();
  await plusIcon.waitForClickable({ timeout: 10000 });
  await plusIcon.click();
  console.log("Clicked on plus icon");
  await addDownsellOption.waitForClickable({ timeout: 10000 });
  await addDownsellOption.click();
  console.log("Selected 'Add upsell' option");
  await this.switchToMainFrame();
}
 async selectdownsellforsecondupsell() {
  await this.switchToOCUIframe();
  const addDownsellOption = await $('//button[@class="rounded-md action-dropdown-btn" and normalize-space(text())="Add Downsell"]');
  const plusIcon = await $("(//div[contains(@class, 'action-add-btn')])[2]//*[name()='svg']");
  await plusIcon.scrollIntoView();
  await plusIcon.waitForClickable({ timeout: 10000 });
  await plusIcon.click();
  console.log("Clicked on plus icon");
  await addDownsellOption.waitForClickable({ timeout: 10000 });
  await addDownsellOption.click();
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
async selectUpsellDiscountType() {
    await this.switchToOCUIframe();
    const dropdown = await $("//select[@name='discount-type']");
    await expect(dropdown).toBeDisplayed();
    // Click the dropdown to open it
    await dropdown.click();
    // Small pause to ensure options render (optional)
    await browser.pause(500);
    // Select the "Fixed amount" option
    await dropdown.selectByAttribute('value', 'percentage');
    await this.switchToMainFrame();
}
async enableUpsells() {
   await this.switchToOCUIframe();
    // Locate the row containing the offer name
    const toggleBtn = await $("//div[@role='dialog']//div[contains(@class,'custom-control custom-switch')]//label[contains(@class,'custom-control-label')]");
    // Wait for the toggle to become clickable
    await toggleBtn.waitForClickable({ timeout: 10000 });
    // Click the toggle to enable the funnel
    await toggleBtn.click();
    // Optional: wait for enabled status (adjust if UI shows success status)
    await browser.pause(1000);
}
async selectAffiliate(affiliateName) {
    // 1. Click on the Affiliate search field
    await this.switchToOCUIframe();
    const affiliateField = await $("//input[@placeholder='Search for affiliates']");
    await affiliateField.waitForDisplayed({ timeout: 10000 });
    await affiliateField.click();
     await affiliateField.setValue(affiliateName);
    // 3. Select the matched dropdown item dynamically
    const option = await $(`//ul[starts-with(@id,'vs') and contains(@id,'__listbox')]`);
    await option.waitForDisplayed({ timeout: 10000 });
    await option.click();
    await this.switchToMainFrame();
}
async selectRuleAlwaysAvailable() {
    // 1. Click on the rule dropdown
    await this.switchToOCUIframe();
    const ruleDropdown = await $("//div[contains(@class,'custome-select-field')]");
    await ruleDropdown.waitForDisplayed({ timeout: 10000 });
    await ruleDropdown.click();
    // 2. Select 'Always available' option from dropdown
    const alwaysAvailableOption = await $("//div[contains(@class,'custom-dropdown-item')]//span[normalize-space()='Total cart value']");
    await alwaysAvailableOption.waitForDisplayed({ timeout: 10000 });
    await alwaysAvailableOption.click();
    // 3. Switch back to main frame
    await this.switchToMainFrame();
}

async selectProductInCart() {
    // 1. Click on the rule dropdown
    await this.switchToOCUIframe();
    const ruleDropdown = await $("//div[contains(@class,'custome-select-field')]");
    await ruleDropdown.waitForDisplayed({ timeout: 10000 });
    await ruleDropdown.click();
    // 2. Select 'Always available' option from dropdown
    const alwaysAvailableOption = await $("//div[contains(@class,'custom-dropdown-item')]//span[normalize-space()='Products in cart']");
    await alwaysAvailableOption.waitForDisplayed({ timeout: 10000 });
    await alwaysAvailableOption.click();
    // 3. Switch back to main frame
    await this.switchToMainFrame();
}
async selectProductCollectionInCart() {
    // 1. Click on the rule dropdown
    await this.switchToOCUIframe();
    const ruleDropdown = await $("//div[contains(@class,'custome-select-field')]");
    await ruleDropdown.waitForDisplayed({ timeout: 10000 });
    await ruleDropdown.click();
    // 2. Select 'Always available' option from dropdown
    const alwaysAvailableOption = await $("//div[contains(@class,'custom-dropdown-item')]//span[normalize-space()='Product collection in cart']");
    await alwaysAvailableOption.waitForDisplayed({ timeout: 10000 });
    await alwaysAvailableOption.click();
    // 3. Switch back to main frame
    await this.switchToMainFrame();
}
async selectOperator(operatorValue) {
    await this.switchToOCUIframe();

    const operatorDropdown = await $("//select[@name='condition' and contains(@class,'select-field')]");
    await operatorDropdown.waitForDisplayed({ timeout: 10000 });

    // operatorValue examples:
    // equal-to, not-equal-to, greater, greater-or-equal, less
    await operatorDropdown.selectByAttribute('value', operatorValue);

    await this.switchToMainFrame();
}

async enterRuleValue(value) {
// 1. Focus value input field
await this.switchToOCUIframe();
const valueInput = await $("//input[@type='number' or @placeholder='Insert value']");
await valueInput.waitForDisplayed({ timeout: 10000 });
await valueInput.click();
// 2. Enter value
await valueInput.setValue(value);
// 3. Switch back to main frame
await this.switchToMainFrame();
}
async enableAllUpsellToggles() {
    // Switch to the iframe once
    await this.switchToOCUIframe();

    // Select all checkbox inputs
    const toggleInputs = await $$("//input[@type='checkbox' and contains(@class,'custom-control-input')]");

    if (toggleInputs.length === 0) {
        throw new Error('No upsell toggles found');
    }

    for (const toggle of toggleInputs) {
        // Scroll into view
        await toggle.scrollIntoView();

        // Check if toggle is already enabled
        const isChecked = await toggle.getProperty('checked');
        if (!isChecked) {
            // Click the toggle directly using JS to ensure the event fires
            await browser.execute((el) => el.click(), toggle);
        }
    }

    // Switch back to main frame after all toggles
    await this.switchToMainFrame();
}

async clickExternalUpsell() {
    await this.switchToOCUIframe();
    const externalUpsell = await $('//div[normalize-space(text())="Upsell external"]');
    await externalUpsell.waitForClickable({ timeout: 10000 });
    await externalUpsell.click();
    await this.switchToMainFrame();
  }


  async enterExternalPageUrl(url) {
    // Switch to OC UI iframe if required
    await this.switchToOCUIframe();

    const externalPageInput = await $('//input[@name="landing_url"]');

    await externalPageInput.waitForDisplayed({ timeout: 5000 });
    await externalPageInput.scrollIntoView();

    await externalPageInput.clearValue();
    await externalPageInput.setValue(url);

    // Switch back to main frame
    await this.switchToMainFrame();
}
  async enterExternalPageUrlinfunnel(url) {
    // Switch to OC UI iframe if required
    await this.switchToOCUIframe();

    const insideexternalPageInput = await $('//input[@name="external_url"]');

    await insideexternalPageInput.waitForDisplayed({ timeout: 5000 });
    await insideexternalPageInput.scrollIntoView();

    await insideexternalPageInput.clearValue();
    await insideexternalPageInput.setValue(url);

    // Switch back to main frame
    await this.switchToMainFrame();
}
   async clickOnUpsellOfferByName(offerName) {
    // Switch to OC UI iframe
    await this.switchToOCUIframe();
    await browser.pause(5000);
    const maxPages = 10; // safety guard to avoid infinite loop
    let currentPage = 1;

    while (currentPage <= maxPages) {
        // Dynamic locator for upsell name
        const offerElement = await $(
            `//span[normalize-space()="${offerName}"]`
        );

        // If offer exists on current page → click and exit
        if (await offerElement.isExisting()) {
            await offerElement.waitForDisplayed({ timeout: 5000 });
            await offerElement.scrollIntoView();
            await offerElement.click();

            await this.switchToMainFrame();
            return;
        }

        // Try to find "Next" pagination button
        const nextButton = await $(
            `//button[@role="menuitem" and @aria-label="Go to next page"]`
        );

        // If no next page → stop searching
        if (!(await nextButton.isExisting())) {
            break;
        }

        // Go to next page
        await nextButton.scrollIntoView();
        await nextButton.click();

        // Wait for page content to refresh
        await browser.pause(1500);

        currentPage++;
    }

    // Switch back before throwing error
    await this.switchToMainFrame();

    throw new Error(
        `Upsell offer "${offerName}" was not found on any page`
    );
}



}
module.exports = new UpsellPage();