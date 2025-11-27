const BasePage = require('./BasePage');
class DiscountPage extends BasePage {

    async clickDiscountSidebar() {
        const btn = await $("//a[.//span[normalize-space(text())='Discounts']]");
        await expect(btn).toBeDisplayed();
        await btn.click();
    }

    async clickDiscountsDropdown() {
        const dropdown = await $("//span[@class='nav-link-text dropdown-link' and normalize-space(text())='Discounts']");
        await expect(dropdown).toBeDisplayed();
        await dropdown.click();
    }

    async verifyDiscountsHeading() {
        const heading = await $("//div[contains(@class,'d-flex') and contains(@class,'justify-content-between')]//h4[normalize-space(text())='Discounts']");
        await heading.waitForDisplayed({ timeout: 5000 });
        await expect(heading).toBeDisplayed();
    }

     async clickAutoDiscount() {
        const btn = await $("//a[normalize-space(text())='Automatic discounts']");
        await expect(btn).toBeDisplayed();
        await btn.click();
    }


    async clickCreateDiscountBtn() {
        const btn = await $("//button[contains(text(),'Create discount')]");
        await expect(btn).toBeDisplayed();
        await btn.click();
    }

    async selectOrderType() {
         const orderLink = await $("//img[@src='https://accounts.staging.cartpanda.com/assets/images/discount_order_new.svg']");
    await expect(orderLink).toBeDisplayed();
    await orderLink.click();
    }
     async selectProductType() {
         const orderLink = await $("//img[@src='https://accounts.staging.cartpanda.com/assets/images/discount_product_new.svg']");
    await expect(orderLink).toBeDisplayed();
    await orderLink.click();
    }

    async verifyCreateDiscountsHeading() {
        const heading = await $("//h4[contains(@class,'mb-0') and normalize-space(text())='Create discount']");
        await expect(heading).toBeDisplayed();
    }

    async enterDiscountName(name) {
        const input = await $("//input[@placeholder='e.g. SUMMERSALE']");
        await expect(input).toBeDisplayed();
        await input.setValue(name);
    }

    async enterAutoDiscountValue(value = '50') {
    const input = await $("//input[contains(@name,'percentageAmountDiscount') and contains(@class,'form-control') and @type='number']");
    
    await expect(input).toBeDisplayed();

    await input.click();                 // Focus the input
    await input.clearValue();            // Clear any existing value
    await input.addValue(value);         // Type value like user would

    await browser.keys("Enter");         // Trigger Enter key to confirm
    await browser.pause(1000);           // Small pause to let UI update
}


    async enterMinimumValue(value) {
    const valueinput = await $("//input[@name='minimumPurchaseAmount' and @type='text']");
    await valueinput.waitForDisplayed({ timeout: 5000 });
    await valueinput.click();
    await valueinput.setValue(value);
    await browser.pause(3000);
}
     async enterDiscountValue(value = '50') {
        const input = await $("//input[@type='number' and @name='fixedAmountDiscount' and @class='form-control']");
        await expect(input).toBeDisplayed();
        await input.setValue(value);
        await browser.pause(3000);
    }

    async clickSetEndDate() {
        const btn = await $("//input[@id='isEndDate']");
        await expect(btn).toBeDisplayed();
        await btn.click();
    }
    async clickSpecificProduct() {
        const btn = await $("//input[@id='specific_products']");
        await expect(btn).toBeDisplayed();
        await btn.click();
    }

    async enterEndDate(date = '12/30/2025') {
        const input = await $("//input[@name='coupon_end_date']");
        await expect(input).toBeDisplayed();
        await input.setValue(date);
        await input.scrollIntoView();
    }

    async clickSaveDiscountBtn() {
        const btn = await $("//button[normalize-space(text())='Save discount']");
        await expect(btn).toBeDisplayed();
        await btn.click();
        await browser.pause(10000);
    }
async selectFixedAmountDiscount() {
    // Locate the dropdown
    const dropdown = await $("//select[@name='discountTypeSelect']");
    await expect(dropdown).toBeDisplayed();

    // Click the dropdown to open it
    await dropdown.click();

    // Small pause to ensure options render (optional)
    await browser.pause(500);

    // Select the "Fixed amount" option
    await dropdown.selectByAttribute('value', 'fixed_amount');
}
async selectFreeShipping() {
    // Locate the dropdown
    const dropdown = await $("//select[@name='discountTypeSelect']");
    await expect(dropdown).toBeDisplayed();

    // Click the dropdown to open it
    await dropdown.click();

    // Small pause to ensure options render (optional)
    await browser.pause(500);

    // Select the "Fixed amount" option
    await dropdown.selectByAttribute('value', 'free_shipping');
}

async selectBuyXgetY() {
    // Locate the dropdown
    const dropdown = await $("//select[@name='discountTypeSelect']");
    await expect(dropdown).toBeDisplayed();

    // Click the dropdown to open it
    await dropdown.click();

    // Small pause to ensure options render (optional)
    await browser.pause(500);

    // Select the "Fixed amount" option
    await dropdown.selectByAttribute('value', 'buy_x_get_y');
}
async enterquantity(quantity = '1') { // default quantity = 1
    const input = await $('//input[@id="buyXQuantityInput"]'); // update locator if needed
    await expect(input).toBeDisplayed();
    await input.click();
    await input.setValue(quantity);
}

async entername() {
    const input = await $('//input[contains(@class,"browse-x-product-discount")]'); // update locator if needed
    await input.click();
    await browser.pause(5000);
}
async enterAndSelectCustomerBuysProduct(productName) {
    // Locate the search input
    const searchInput = await $('#search-x-product-input'); // update locator if needed
    await expect(searchInput).toBeDisplayed();
    
    // Click and enter the product name
    await searchInput.click();
    await searchInput.setValue(productName);

    // Wait for the dropdown option to appear
    const option = await $(`//label[contains(normalize-space(.), 'DROP SHIRT')]`);
    await option.waitForDisplayed({ timeout: 5000 });
    const choose =await $('//button[@id="choose-x-products"]');
    // Click the option from the dropdown
    await option.click();
    await choose.click();
}
async selectSpecificProduct(productName) {
    // Locate the search input
    const searchInput = await $("//input[@type='text' and contains(@class,'browse-products') and @placeholder='Search Products']"); // update locator if needed
    await expect(searchInput).toBeDisplayed();
    
    const searchInputEnter = await $("//input[@id='search-product-input']"); 
    // Click and enter the product name
    await searchInput.click();
    await searchInputEnter.click();
    await searchInputEnter.setValue(productName);

    // Wait for the dropdown option to appear
    const option = await $(`//label[contains(normalize-space(.), 'SHORTS')]`);
    await option.waitForDisplayed({ timeout: 5000 });
    const choose =await $("//button[@type='button' and @id='choose-products']");
     const shortsProduct = await $("//td[contains(., 'SHORTS (Product ID: 25754300)')]");
    // Click the option from the dropdown
    await option.click();
    await choose.click();
    await shortsProduct.scrollIntoView();
    await browser.pause(3000);
    
}
async enterquantitygets(quantity = '1') { // default quantity = 1
    const input = await $('//input[@id="getYQuantityInput"]'); // update locator if needed
    await expect(input).toBeDisplayed();
    await input.click();
    await input.setValue(quantity);
    await input.scrollIntoView();
}
async enterAndSelectCustomerGetsProduct(productName) {
    // Locate the search input
    const input = await $('//input[contains(@class,"browse-y-product-discount")]'); // update locator if needed
    await input.click();
    
    const searchInput = await $('#search-y-product-input'); // update locator if needed
    await expect(searchInput).toBeDisplayed();
    
    // Click and enter the product name
    await searchInput.click();
    await searchInput.setValue(productName);

    // Wait for the dropdown option to appear
    const option = await $(`//label[contains(normalize-space(.), 'SHORTS')]`);
    await option.waitForDisplayed({ timeout: 5000 });
    const choose =await $('//button[@id="choose-y-products"]');

    // Click the option from the dropdown
    await option.click();
    await choose.click();
    
}
async clickPercentageCheckbox() {
    // Locate the Percentage checkbox
    const checkbox = await $('//label[@for="xnyDiscount1"]'); // update locator if needed
    await expect(checkbox).toBeDisplayed();

    // Click the checkbox
    await checkbox.click();
}
async enterPercentageValue(value) {
    // Locate the percentage input box
    const input = await $('//input[@name="percentageAmountDiscountonXnY"]'); // Update locator if needed
    await expect(input).toBeDisplayed();

    // Click and enter the value
    await input.click();
    await input.setValue(value);
}
async clickBackbutton() {
        const btn = await $("//a[@class='back-button']");
        await expect(btn).toBeDisplayed();
        await btn.click();
        await browser.pause(10000);
    }
}
module.exports = new DiscountPage();
