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

    async storePage() {
        const letsStartHeading = await $("//div[@class='title' and normalize-space(text())='Select a shop']");
        await expect(letsStartHeading).toBeDisplayed();
    }

    async selectstore(storeName) {
        const xpath = `//div[normalize-space(text())='${storeName}']`;
        const selectstore = await $(xpath);
        await expect(selectstore).toBeDisplayed();
        await selectstore.click();
    }

    async dashBoardPage() {
        const letsStartHeading = await $("//div[@class='welcome-title' and contains(normalize-space(text()), 'Welcome')]");
        await expect(letsStartHeading).toBeDisplayed();
    }
    
    




    




    
    














}

module.exports = new LoginPage();
