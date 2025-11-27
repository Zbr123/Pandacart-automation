const BasePage = require('./BasePage');
class SubscriptionPage extends BasePage{
 
async clickSubscriptionBtn() {
        const btn = await $("//a[.//span[normalize-space(text())='Subscriptions']]");
        await expect(btn).toBeDisplayed();
        await btn.click();
    }

async verifySubscriptionsHeading() {
        const heading = await $("//h4[normalize-space(text())='Subscriptions']");
        await expect(heading).toBeDisplayed();
    }


async goToSubscriptionPlansInIframe() {
    console.log("🧭 Attempting to click Subscription Plans inside iframe...");

    // Locate iframe
    const targetFrame = await $('iframe[src*="subscription-staging.cartpanda.com"]');
    await targetFrame.waitForExist({ timeout: 60000 });
    console.log("✅ Iframe exists, switching to it...");
    await browser.switchFrame(targetFrame);

    // Click the Subscription Plans link
    const subscriptionLink = await $('a*=Subscription plans');
    await browser.waitUntil(
        async () => await subscriptionLink.isDisplayed(),
        {
            timeout: 60000,
            interval: 500,
            timeoutMsg: '❌ Subscription Plans link did not appear inside iframe'
        }
    );
    console.log("✅ Link is visible, clicking...");
    await subscriptionLink.scrollIntoView();
    await subscriptionLink.click();

    // Switch back to main page context
    await browser.switchFrame(null);
    console.log("🔙 Switched back to main page context.");
}





 async clickAddNewButton() {
    console.log("🧭 Attempting to click 'Add new' button inside iframe...");

    // Locate iframe
    const targetFrame = await $('iframe[src*="subscription-staging.cartpanda.com"]');
    await targetFrame.waitForExist({ timeout: 60000 });
    console.log("✅ Iframe exists, switching to it...");
    await browser.switchFrame(targetFrame);

    // Locate the "Add new" button
    const addNewBtn = await $("//a[@class='btn btn-primary end-nav' and text()[contains(.,'Add new')]]");

    // Wait until the button is displayed
    await browser.waitUntil(
        async () => await addNewBtn.isDisplayed(),
        {
            timeout: 60000,
            interval: 500,
            timeoutMsg: "❌ 'Add new' button did not appear inside iframe"
        }
    );
    console.log("✅ 'Add new' button is visible, clicking...");
    await addNewBtn.scrollIntoView();
    await addNewBtn.click();

    // Switch back to main page context
    await browser.switchFrame(null);
    console.log("🔙 Switched back to main page context.");
}


    async enterPlanName(name) {
    console.log("🧭 Attempting to enter Plan Name inside iframe...");

    // Locate iframe
    const targetFrame = await $('iframe[src*="subscription-staging.cartpanda.com"]');
    await targetFrame.waitForExist({ timeout: 60000 });
    console.log("✅ Iframe exists, switching to it...");
    await browser.switchFrame(targetFrame);

    // Locate the plan name input
    const planInput = await $("input.form-control.undefined");

    // Wait until input is displayed
    await browser.waitUntil(
        async () => await planInput.isDisplayed(),
        {
            timeout: 60000,
            interval: 500,
            timeoutMsg: "❌ Plan Name input box did not appear inside iframe"
        }
    );
    console.log("✅ Plan Name input is visible, entering value...");
    await planInput.scrollIntoView();
    await planInput.setValue(name);

    // Switch back to main page context
    await browser.switchFrame(null);
    console.log("🔙 Switched back to main page context.");
}


   async clickSelectProducts() {
    console.log("🧭 Attempting to click 'Select products' button inside iframe...");

    // Locate iframe
    const targetFrame = await $('iframe[src*="subscription-staging.cartpanda.com"]');
    await targetFrame.waitForExist({ timeout: 60000 });
    console.log("✅ Iframe exists, switching to it...");
    await browser.switchFrame(targetFrame);

    // Locate the 'Select products' button
    const selectProductsBtn = await $("//button[contains(normalize-space(.), 'Select products')]");

    // Wait until button is displayed
    await browser.waitUntil(
        async () => await selectProductsBtn.isDisplayed(),
        {
            timeout: 60000,
            interval: 500,
            timeoutMsg: "❌ 'Select products' button did not appear inside iframe"
        }
    );
    console.log("✅ 'Select products' button is visible, clicking...");
    await selectProductsBtn.scrollIntoView();
    await selectProductsBtn.click();

    // Switch back to main page context
    await browser.switchFrame(null);
    console.log("🔙 Switched back to main page context.");
}


    async selectProduct1(productName) {
    console.log(`🧭 Attempting to select product "${productName}" inside iframe...`);

    // Locate iframe
    const targetFrame = await $('iframe[src*="subscription-staging.cartpanda.com"]');
    await targetFrame.waitForExist({ timeout: 60000 });
    console.log("✅ Iframe exists, switching to it...");
    await browser.switchFrame(targetFrame);

    // Dynamically locate the product checkbox based on product name
    const productCheckbox = await $(`//label[contains(@class, 'product-row')]//div[@class='product-name' and normalize-space()='DROP SHIRT']`);

    // Wait until checkbox is visible
    await browser.waitUntil(
        async () => await productCheckbox.isDisplayed(),
        {
            timeout: 60000,
            interval: 500,
            timeoutMsg: `❌ Product "${productName}" checkbox did not appear inside iframe`
        }
    );
    console.log(`✅ Product "${productName}" checkbox is visible, clicking...`);
    await productCheckbox.scrollIntoView();
    await productCheckbox.click();

    // Switch back to main page context
    await browser.switchFrame(null);
    console.log("🔙 Switched back to main page context.");
}

   async selectProduct2(productName) {
    console.log(`🧭 Attempting to select product "${productName}" inside iframe...`);

    // Locate iframe
    const targetFrame = await $('iframe[src*="subscription-staging.cartpanda.com"]');
    await targetFrame.waitForExist({ timeout: 60000 });
    console.log("✅ Iframe exists, switching to it...");
    await browser.switchFrame(targetFrame);

    // Dynamically locate the product checkbox based on product name
    const productCheckbox = await $(`//label[@class='product-row'][.//div[@class='product-name' and normalize-space(text())='SHORTS']]//input[@type='checkbox']`);

    // Wait until checkbox is visible
    await browser.waitUntil(
        async () => await productCheckbox.isDisplayed(),
        {
            timeout: 60000,
            interval: 500,
            timeoutMsg: `❌ Product "${productName}" checkbox did not appear inside iframe`
        }
    );
    console.log(`✅ Product "${productName}" checkbox is visible, clicking...`);
    await productCheckbox.scrollIntoView();
    await productCheckbox.click();

    // Switch back to main page context
    await browser.switchFrame(null);
    console.log("🔙 Switched back to main page context.");
}

    async clickSaveButton() {
    console.log("🧭 Attempting to click Save button inside iframe...");

    const targetFrame = await $('iframe[src*="subscription-staging.cartpanda.com"]');
    await targetFrame.waitForExist({ timeout: 60000 });
    console.log("✅ Iframe exists, switching to it...");
    await browser.switchFrame(targetFrame);


    // Locate Save button by text and class
    const saveBtn = await $("//div[contains(@class, 'btn') and contains(@class, 'btn-primary') and normalize-space(text())='Save']");

    // Wait until the button is displayed and enabled
    await browser.waitUntil(
        async () => await saveBtn.isDisplayed() && await saveBtn.isEnabled(),
        {
            timeout: 60000,
            interval: 500,
            timeoutMsg: '❌ Save button did not become clickable inside iframe'
        }
    );

    console.log("✅ Save button is visible and enabled, clicking...");
    await saveBtn.scrollIntoView();
    await saveBtn.click();

    // Optional: wait a short time for any page update
    await browser.pause(10000);

    // Switch back to main page context
    await browser.switchFrame(null);
    console.log("🔙 Switched back to main page context.");
}



    async clickOrderFrequencyBox() {
    console.log("🧭 Attempting to click Order Frequency box inside iframe...");

    // Switch to iframe
    const targetFrame = await $('iframe[src*="subscription-staging.cartpanda.com"]');
    await targetFrame.waitForExist({ timeout: 60000 });
    console.log("✅ Iframe exists, switching to it...");
    await browser.switchFrame(targetFrame);

    // Locate Order Frequency box
    const box = await $("//select[@name='every' and contains(@class,'form-control')]");

    // Wait until the box is displayed
    await browser.waitUntil(
        async () => await box.isDisplayed(),
        {
            timeout: 10000,
            interval: 500,
            timeoutMsg: '❌ Order Frequency box did not appear inside iframe'
        }
    );
    console.log("✅ Order Frequency box is visible, clicking...");
    await box.scrollIntoView({ block: "center", inline: "center" });
    await box.click();

    // Switch back to main page context
    await browser.switchFrame(null);
    console.log("🔙 Switched back to main page context.");
}

// Page file
async selectFrequency(frequency) {
    console.log(`🧭 Selecting frequency: ${frequency} inside iframe...`);

    // Switch to the subscription iframe
    const targetFrame = await $('iframe[src*="subscription-staging.cartpanda.com"]');
    await targetFrame.waitForExist({ timeout: 60000 });
    await browser.switchFrame(targetFrame);

    // Locate the select box
    const selectBox = await $('select[name="every"]');
    await selectBox.waitForDisplayed({ timeout: 30000 });
    await selectBox.scrollIntoView();
    // Use selectByAttribute to pick the value directly
    await selectBox.selectByAttribute('value', frequency);
    
    console.log(`✅ Frequency "${frequency}" selected successfully`);

    // Optional pause
    await browser.pause(500);

    // Switch back to main page
    await browser.switchFrame(null);
    console.log("🔙 Switched back to main page context.");
}
async enterPlanName2(name) {
    console.log(`🧭 Switching to iframe to enter plan name: ${name}...`);

    // Switch to subscription iframe
    const targetFrame = await $('iframe[src*="subscription-staging.cartpanda.com"]');
    await targetFrame.waitForExist({ timeout: 60000 });
    console.log("✅ Iframe exists, switching to it...");
    await browser.switchFrame(targetFrame);

    // Locate the plan name input inside iframe
    const planInput = await $('//input[@placeholder="Every 3 months"]'); // adjust selector if different
    await planInput.waitForDisplayed({ timeout: 30000 });
    await planInput.scrollIntoView({ block: "center", inline: "center" });
    
    // Enter the plan name
    await planInput.setValue(name);
    console.log(`✅ Plan name "${name}" entered successfully inside iframe`);

    // Switch back to main page context
    await browser.switchFrame(null);
    console.log("🔙 Switched back to main page context.");
}
async clickSaveBtn() {
    console.log("🧭 Attempting to click Save button inside iframe...");

    const targetFrame = await $('iframe[src*="subscription-staging.cartpanda.com"]');
    await targetFrame.waitForExist({ timeout: 60000 });
    console.log("✅ Iframe exists, switching to it...");
    await browser.switchFrame(targetFrame);


    // Locate Save button by text and class
    const saveBtn = await $('//button[normalize-space()="Save"]');

    // Wait until the button is displayed and enabled
    await browser.waitUntil(
        async () => await saveBtn.isDisplayed() && await saveBtn.isEnabled(),
        {
            timeout: 60000,
            interval: 500,
            timeoutMsg: '❌ Save button did not become clickable inside iframe'
        }
    );

    console.log("✅ Save button is visible and enabled, clicking...");
    await saveBtn.scrollIntoView();
    await saveBtn.click();

    // Optional: wait a short time for any page update
    await browser.pause(10000);

    // Switch back to main page context
    await browser.switchFrame(null);
    console.log("🔙 Switched back to main page context.");
}
async clickOkBtn() {
    console.log("🧭 Attempting to click OK button...");

    // Ensure we are in the main context (in case you were inside an iframe before)
    const targetFrame = await $('iframe[src*="subscription-staging.cartpanda.com"]');
    await targetFrame.waitForExist({ timeout: 60000 });
    console.log("✅ Iframe exists, switching to it...");
    await browser.switchFrame(targetFrame);


    // Define OK button locator
    const okBtn = await $("//button[contains(@class, 'swal2-confirm') and normalize-space(text())='OK']");

    // Wait for OK button to be visible and clickable
    await okBtn.waitForDisplayed({ timeout: 10000 });
    await okBtn.scrollIntoView();
    await okBtn.click();
    await browser.pause(3000);

    console.log("✅ Clicked OK button successfully!");
}

async clickDisCheckbox() {
    console.log("🧭 Attempting to click the Discount Offer checkbox inside iframe...");

    // Locate and switch to the iframe
    const targetFrame = await $('iframe[src*="subscription-staging.cartpanda.com"]');
    await targetFrame.waitForExist({ timeout: 60000 });
    console.log("✅ Iframe exists, switching to it...");
    await browser.switchFrame(targetFrame);

    // Locate the discount checkbox
    const discountCheckbox = await $('//input[@id="offer_discount" and @type="checkbox"]');

    // Wait until the checkbox is visible and clickable
    await browser.waitUntil(
        async () => await discountCheckbox.isDisplayed() && await discountCheckbox.isEnabled(),
        {
            timeout: 30000,
            interval: 500,
            timeoutMsg: "❌ Discount Offer checkbox did not appear inside iframe"
        }
    );

    // Scroll into view and click
    await discountCheckbox.scrollIntoView();
    console.log("✅ Checkbox is visible, clicking now...");
    await discountCheckbox.click();

    // Optional short pause for UI response
    await browser.pause(500);

    // Switch back to main page context
    await browser.switchFrame(null);
    console.log("🔙 Switched back to main page context after clicking discount checkbox.");
}
async clickDisbox() {
    console.log("🧭 Attempting to click the Discount Offer input box inside iframe...");

    // Locate and switch to the subscription iframe
    const targetFrame = await $('iframe[src*="subscription-staging.cartpanda.com"]');
    await targetFrame.waitForExist({ timeout: 60000 });
    console.log("✅ Iframe exists, switching to it...");
    await browser.switchFrame(targetFrame);

    // Locate the discount input box (same checkbox element, but you can adjust if it's a separate input)
    const discountInputBox = await $('//input[@type="number" and @class="form-control undefined"]');

    // Wait until it is displayed and clickable
    await browser.waitUntil(
        async () => await discountInputBox.isDisplayed() && await discountInputBox.isEnabled(),
        {
            timeout: 30000,
            interval: 500,
            timeoutMsg: "❌ Discount Offer input box did not appear inside iframe"
        }
    );

    // Scroll into view and click
    await discountInputBox.scrollIntoView();
    console.log("✅ Discount input box is visible, clicking now...");
    await discountInputBox.click();

    // Optional short pause for UI update
    await browser.pause(500);

    // Switch back to main page context
    await browser.switchFrame(null);
    console.log("🔙 Switched back to main page context after clicking discount input box.");
}
async enterDisAmmount(amount) {
    console.log(`🧭 Switching to iframe to enter discount amount: ${amount}...`);

    // Switch to subscription iframe
    const targetFrame = await $('iframe[src*="subscription-staging.cartpanda.com"]');
    await targetFrame.waitForExist({ timeout: 60000 });
    console.log("✅ Iframe exists, switching to it...");
    await browser.switchFrame(targetFrame);

    // Locate the discount amount input box
    const discountInput = await $('//input[@type="number" and @class="form-control undefined"]');

    // Wait until input is displayed
    await browser.waitUntil(
        async () => await discountInput.isDisplayed() && await discountInput.isEnabled(),
        {
            timeout: 30000,
            interval: 500,
            timeoutMsg: "❌ Discount amount input box did not appear inside iframe"
        }
    );

    // Scroll into view, clear existing value, and enter amount
    await discountInput.scrollIntoView();
    await discountInput.clearValue();
    await discountInput.setValue(amount);
    console.log(`✅ Discount amount "${amount}" entered successfully inside iframe`);

    // Optional short pause for UI update
    await browser.pause(500);

    // Switch back to main page context
    await browser.switchFrame(null);
    console.log("🔙 Switched back to main page context after entering discount amount.");
}
async clickDiscountType() {
    console.log("🧭 Switching to iframe to click Discount Type...");

    // Switch to subscription iframe
    const targetFrame = await $('iframe[src*="subscription-staging.cartpanda.com"]');
    await targetFrame.waitForExist({ timeout: 60000 });
    console.log("✅ Iframe exists, switching to it...");
    await browser.switchFrame(targetFrame);

    // Locate the Discount Type element (adjust XPath if needed)
    const discountTypeBtn = await $('//select[@class="form-select"]');

    // Wait until element is displayed and clickable
    await browser.waitUntil(
        async () => await discountTypeBtn.isDisplayed() && await discountTypeBtn.isEnabled(),
        {
            timeout: 30000,
            interval: 500,
            timeoutMsg: "❌ Discount Type element did not appear inside iframe"
        }
    );

    await discountTypeBtn.scrollIntoView();
    await discountTypeBtn.click();
    console.log("✅ Discount Type clicked inside iframe");

    // Optional pause for UI to update
    await browser.pause(500);

    // Switch back to main page context
    await browser.switchFrame(null);
    console.log("🔙 Switched back to main page context after clicking Discount Type");
}

async selectDiscountAmount() {
    console.log("🧭 Selecting 'Amount off' discount type...");

    const iframe = await $('iframe[src*="subscription"]');
    await iframe.waitForExist({ timeout: 30000 });
    await browser.switchFrame(iframe);

    // First, try standard <select>
    const dropdown = await $('select.form-select');
    await dropdown.waitForDisplayed({ timeout: 10000 });
    await dropdown.scrollIntoView();

    try {
        await dropdown.selectByVisibleText('Amount off');
        console.log("✅ Selected 'Amount off' via <select>");
    } catch (err) {
        console.log("⚠️ Fallback to manual click method (custom dropdown)");

        await dropdown.click();
        const amountOption = await $('//*[contains(text(),"Amount off") or @value="amount"]');
        await amountOption.waitForDisplayed({ timeout: 5000 });
        await amountOption.click();
        console.log("✅ Selected 'Amount off' manually");
    }

    await browser.switchFrame(null);
}





}

module.exports = new SubscriptionPage();

