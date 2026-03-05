const { Before,Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../../pages/LoginPage');
const DashboardPage = require('../../pages/DashboardPage');
const KitsPage = require('../../pages/KitPage');
const dashboardPage = new DashboardPage();

Then('I click on Kits from the Products dropdown', async () => {
    await KitsPage.clickOnKitsFromDropdown();
});

Then('I click on Add Kits button', async () => {
    await KitsPage.clickOnAddKitsButton();
});

Then('I click on Kits name input field and enter the name of the Kits {string}', async (kitsName) => {
    await KitsPage.enterKitsName(kitsName);
});

Then('I click on product search field and enter {string}', async (productName) => {
    await KitsPage.enterProductname(productName);
});
Then('I click on the search field', async () => {
    await KitsPage.searchProduct();
});
Then('I select the searched product from the list', async () => {
    await KitsPage.selectProductFromDropdown();
});

Then('I upload the Kits image', async () => {
    await KitsPage.uploadKitsImage();
});

Then('I click on the save it button', async () => {
    await KitsPage.clickSaveButton();
});
Then('I click on Select button', async () => {
    await KitsPage.clickSelectButton();
});

Then('I check Product and Discounts', async () => {
    await KitsPage.clickProductDiscountCheckbox();
});
Then('I check Customized for {string}', async (productName) => {
    await KitsPage.clickCustomizedCheckbox(productName);
});

Then('I click on Add products', async () => {
    await KitsPage.clickAddproducts();
});

Then('I enter the {string} discount amount in the discount field', async (discount) => {
    await KitsPage.enterDiscountAmount(discount);
})
Then('I enter the {string} amount in the customized field for {string}', async (amount, productName) => {
  await KitsPage.enterCustomizedAmountForProduct(productName, amount);
});