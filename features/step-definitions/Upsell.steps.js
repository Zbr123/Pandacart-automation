const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPage = require('../../pages/LoginPage');
const DashboardPage = require('../../pages/DashboardPage');
const UpsellPage = require('../../pages/UpsellPage'); // already exported as an instance
const dashboardPage = new DashboardPage();
When('I click on One Click Upsell btn in sidebar', async () => {
    await UpsellPage.clickOnOneClickUpsell();
});
Then('I should see the One Click Upsell heading', async () => {
    await UpsellPage.verifyOneClickUpsellHeading();
});
Then('I should refresh the page', async () => {
  await UpsellPage.refreshPage();
});
When('I click on the Add Upsell button', async () => {
    await UpsellPage.clickAddUpsellButton();
});
Then('I should see Affiliate field', async () => {
    await UpsellPage.verifyAffiliateField();
});
Then('I fill the Name field with "Test Offer"', async () => {
  await UpsellPage.fillUpsellNameField("Test Offer");
});
When('I click on Save and Close btn', async () => {
    await UpsellPage.clickSaveAndClose();
});
Then('I should see the Test Offer heading', async () => {
    await UpsellPage.verifyTestOfferHeading();
});
When('I click on Add new step button and select Add Upsell', async () => {
    await UpsellPage.clickAddNewStepAndSelectUpsell();
});
Then('I fill the Name with {string}', async (upsellName) => {
  await UpsellPage.fillUpsellName(upsellName);
});
Then('I click on the No product' , async () => {
  await UpsellPage.clickOnNoProduct();
});
When('I enter the product {string}', async (productName) => {
    await UpsellPage.enterProduct(productName);
});

Then('I select the product "DROP SHIRT" from the dropdown', async () => {
    await UpsellPage.selectProductFromDropdown1("DROP SHIRT");
});
Then('I select the product "SOCKS" from the dropdown', async () => {
    await UpsellPage.selectProductFromDropdown2("SOCKS");
});
Then('I click on Save btn' , async () => {
  await UpsellPage.clickSavebtn();
});
When('I clicked on Save and Close button', async () => {
    await UpsellPage.clickSaveAndCloseBtn();
});
When('I click on Back Button', async () => {
    await UpsellPage.clickBackButton();
});
Then('I should see Test Offer', async () => {
    await UpsellPage.verifyTestOffer();
})
Then('I enable the "Test Offer" upsell', async () => {
    await UpsellPage.enableTestOffer();
});
Then('I click on plus icon and select add upsell', async () => {
    await UpsellPage.selectsecondupsell();
});
Then('I click on discount value and enter Upsell discount value {string}', async (discountValue) => {
    await UpsellPage.enterUpsellDiscount(discountValue);
});
Then('I click on discount value and enter Upsell discount value {string}', async (discountValue) => {
    await UpsellPage.enterUpsellDiscount(discountValue);
});
