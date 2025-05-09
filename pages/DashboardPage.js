const BasePage = require('./BasePage');
class DashboardPage extends BasePage {

    get dashboardHeader() {
        return $('~dashboard-header');
    }

    async clickProductsButton() {
        const productLink = await $("//a[contains(@class,'nav-link') and contains(@href,'#products-nav')]");
        await productLink.waitForDisplayed({ timeout: 10000 });
        await productLink.click();
    }

    async clickAllProducts() {
        const allProducts = await $("//span[normalize-space(text())='All products' and contains(@class, 'dropdown-link')]");
        await allProducts.waitForDisplayed({ timeout: 10000 });
        await allProducts.click();
    }

    async verifyProductsHeading() {
        const heading = await $("//h4[normalize-space(text())='Products']");
        await heading.waitForDisplayed({ timeout: 10000 });
        await expect(heading).toBeDisplayed();
    }
    
    async LogoutBtn() {
        const logoutbtnLocator = await $('//a[text()[normalize-space()="Logout"]]');
        await $(logoutbtnLocator).click();
    }

    async LogInToYourAccountText() {
        const LogInToYourAccountText = await $("//div[contains(text(), 'Login to your account')]");
        await expect(LogInToYourAccountText).toBeDisplayed();
    }

    async clickAddProductButton() {
        const addProductBtn = await $("//button[contains(@class,'btn-primary') and normalize-space(text())='Add product']");
        await addProductBtn.waitForDisplayed({ timeout: 10000 });
        await addProductBtn.click();
    }
    
    async clickPhysicalProductOption() {
        const physicalOption = await $("//a[contains(@class,'dropdown-item') and .//img[contains(@src, 'physical_product.svg')]]");
        await physicalOption.waitForDisplayed({ timeout: 10000 });
        await physicalOption.click();
    }
    
    async fillProductField(field, value) {
        const fieldMapping = {
            title: 'input[name="title"]',
            price: 'input[name="price"]',
            compare_price: 'input[name="compare_at_price"]',
            sku: 'input[name="sku"]',
            barcode: 'input[name="barcode"]'
          };
          
          const selector = fieldMapping[field];
          
          if (!selector) {
            throw new Error(`Unknown field: ${field}`);
          }
          
          const input = await $(selector);
          await input.waitForDisplayed({ timeout: 10000 });
          await input.clearValue();
          
          // Type character-by-character with delay
          for (const char of value) {
            await input.addValue(char);
            await browser.pause(100); // 100ms delay between keystrokes
          }
        }          
     
    async clickSaveProductButton() {
        const saveBtn = await $('button.btn-primary.js_save_product');
        await saveBtn.waitForClickable({ timeout: 10000 });
        await saveBtn.click();
    }

    async clickAllProductsLink() {
        const allProductsLink = await $("//span[contains(@class, 'nav-link-text') and normalize-space()='All products']");
        await allProductsLink.waitForDisplayed({ timeout: 10000 });
        await allProductsLink.click();
    }
    
    async verifyProductSearchInputVisible() {
        const searchInput = await $('input[placeholder="Filter products"]');
        await searchInput.waitForDisplayed({ timeout: 10000 });
        await expect(searchInput).toBeDisplayed();
    }
    
   
    
    


    //Add product
    async addProductbtn() {
        const addProductButton = await $("//button[contains(@class, 'btn-primary') and text()='Add product']");
        await expect(addProductButton).toBeDisplayed();
        await addProductButton.click();  // ✅ Fix: Ensure correct variable name
    }


    async enterPrice(price) {
        const priceInput = await $("//input[@id='price']");
        await priceInput.setValue(price);
    }

    async enterComparePrice(compareprice) {
        const comparePriceInput = await $("//input[@name='compare_at_price']");
        await comparePriceInput.setValue(compareprice);
    }


    async saveProductBtn() {
        const saveProductBtnLocator = await $("//button[contains(@class, 'btn-primary') and text()='Save product']");
        await $(saveProductBtnLocator).click();
    }


    async SKUFieldRequiredText() {
        const SKUfieldText = await $("//div[contains(@class, 'alert-content') and contains(text(), 'The SKU field is required')]");
        await expect(SKUfieldText).toBeDisplayed();
    }

    async enterShirtTitle(shirttitle) {
        const shirtTitleInput = await $("//input[@name='title']");
        await shirtTitleInput.setValue(shirttitle);
    }

    async entersalesPagetext(salesPagetext) {
        const salePageInput = await $("//input[@id='sales_page']");
        await salePageInput.setValue(salesPagetext);
    }

    async enterVSLText(VSLText) {
        const VslInput = await $("//input[@name='vsl']");
        await VslInput.setValue(VSLText);
    }


    async checkBoxBtn() {
        const checkbox = await $('//input[@id="enable_multiple_currencies"]');
        await checkbox.click();

    }

    // async selectSupplier(supplierName) {
    //     const supplierDropdown = await $("//select[@name='supplier']"); // Locate dropdown
    //     await supplierDropdown.click(); // Click to open dropdown
    //     await supplierDropdown.selectByVisibleText(supplierName); // Select supplier
    // }



    async enterProductPurposeText(purposeText) {
        const productPurposeInput = await $("//input[@id='purpose']");
        await productPurposeInput.setValue(purposeText);
    }

    async enterReturnAddressText(returnaddressText) {
        const returnaddressTextInput = await $("//input[@id='return_center_address']");
        await returnaddressTextInput.setValue(returnaddressText);
    }



    async CompliancescriptText() {
        const ScriptText = await $("//div[contains(@class, 'alert alert-warning') and contains(text(), 'You must validate the compliance script')]");
        await expect(ScriptText).toBeDisplayed();
    }


    async ValidateButton() {
        const ValidateButtonLocator = await $('//button[@data-action="validate-script"]');
        await $(ValidateButtonLocator).click();
    }

    async scriptMissingalerttext() {
        const scriptAlertText = await $("//div[contains(@class, 'alert-content') and contains(text(), 'Some scripts are missing')]");
        await expect(scriptAlertText).toBeDisplayed();
    }
}

module.exports = DashboardPage;
