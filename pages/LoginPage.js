const BasePage = require('./BasePage');

class LoginPage extends BasePage {


    get supplierDropdown() {
        return $("//select[@name='supplier']"); // Dropdown element
    }

    async selectSupplier(supplierName) {
        await this.supplierDropdown.waitForExist({ timeout: 5000 }); // Ensure dropdown is visible
        await this.supplierDropdown.selectByVisibleText(supplierName); // Select supplier
    }

    async getSelectedSupplier() {
        return await this.supplierDropdown.getValue(); // Get selected value from dropdown
    }


    async assertLoginHeadingDisplayed() {
        const loginHeading = await $("//div[contains(text(), 'Login to your account')]");
        await expect(loginHeading).toBeDisplayed();
    }

    async enterEmail(email) {
        const emailInput = await $("//input[@name='email']");
        await emailInput.setValue(email);
    }

    async enterPassword(password) {
        const passwordInput = await $("//input[@placeholder='Password']");
        await passwordInput.setValue(password);
    }

    async SignInBtn() {
        const loginbutton = await $("//button[@id='loginButton']");
        await expect(loginbutton).toBeDisplayed();
        await loginbutton.click();  // ✅ Fix: Ensure correct variable name
    }
    
    async dashBoardPage() {
        const letsStartHeading = await $("//h5[@class='mb-0']");
        await expect(letsStartHeading).toBeDisplayed();
    }


    
    async profileSettingBtn() {
        const settingsLocator = await $('//img[@alt="profile"]');
        // await $(settingsLocator).waitForDisplayed({ timeout: 5000 }); // Ensure element is visible
        await settingsLocator.click(); // Click on the settings button
    }

    async LogoutBtn() {
        const logoutbtnLocator = await $('//a[text()[normalize-space()="Logout"]]');
        await $(logoutbtnLocator).click();
    }

    async LogInToYourAccountText() {
        const LogInToYourAccountText = await $("//div[contains(text(), 'Login to your account')]");
        await expect(LogInToYourAccountText).toBeDisplayed();
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

module.exports = new LoginPage();
