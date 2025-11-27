const {Before,Given, When, Then } = require('@cucumber/cucumber');
const LoginPage = require('../../pages/LoginPage');
const DashboardPage = require('../../pages/DashboardPage');
const DiscountPage = require('../../pages/DiscountPage'); // already exported as an instance
const dashboardPage = new DashboardPage();


// Before(async () => {
//     // Reset browser session before each scenario
//     await browser.reloadSession();
// });

When('I click on Discount btn in sidebar', async () => {
  await DiscountPage.clickDiscountSidebar();
});

When('I click on discounts from the dropdown', async () => {
  await DiscountPage.clickDiscountsDropdown();
});

Then('I should see Discounts heading', async () => {
  await DiscountPage.verifyDiscountsHeading();
});

Then('I click on automatic discounts', async () => {
  await DiscountPage.clickAutoDiscount();
});

When('I click on Create discount button', async () => {
  await DiscountPage.clickCreateDiscountBtn();
});

When('I select Order from the dropdown', async () => {
  await DiscountPage.selectOrderType();
});
When('I select Product from the dropdown', async () => {
  await DiscountPage.selectProductType();
});
Then('I should see Create Discount heading', async () => {
  await DiscountPage.verifyCreateDiscountsHeading();
});

When(/^I enter "([^"]*)" in the Discount name input box$/, async (discountName) => {
  await DiscountPage.enterDiscountName(discountName);
});

Then('I click on auto discount value and enter discount', async () => {
  await DiscountPage.enterAutoDiscountValue();
});
Then('I click on minimum value and enter value', async () => {
  await DiscountPage.enterMinimumValue("50");
});
Then('I click on discount value and enter discount', async () => {
  await DiscountPage.enterDiscountValue();
});

Then('I click on Specific product checkbox', async () => {
  await DiscountPage.clickSpecificProduct();
});
Then('I click on Set end date checkbox', async () => {
  await DiscountPage.clickSetEndDate();
});

When('I enter the end date', async () => {
  await DiscountPage.enterEndDate();
});

When('I click on SaveDiscount button', async () => {
  await DiscountPage.clickSaveDiscountBtn();
});
Then('I click on Discount Type and select fixed amount from the dropdown', async () => {
    await DiscountPage.selectFixedAmountDiscount();
});
Then('I click on Discount Type and select Free Shipping from the dropdown', async () => {
    await DiscountPage.selectFreeShipping();
});
Then('I click on Discount Type and select buy x get y from the dropdown', async () => {
    await DiscountPage.selectBuyXgetY();
});
Then('I click on Quantity and enter it in the Customer buys section', async () => {
    await DiscountPage.enterquantity();
});
Then('I click on search product', async () => {
    await DiscountPage.entername();
});
Then('I enter and select {string} from the dropdown in the Customer buys section', async (productName) => {
    await DiscountPage.enterAndSelectCustomerBuysProduct(productName);
});
Then('I enter and select {string} from the dropdown', async (productName) => {
    await DiscountPage.selectSpecificProduct(productName);
});
Then('I click on Quantity and enter it in the Customer gets section', async () => {
    await DiscountPage.enterquantitygets();
});
Then('I enter and select {string} from the dropdown in the Customer gets section', async (productName) => {
    await DiscountPage.enterAndSelectCustomerGetsProduct(productName);
});
Then('I click on Percentage', async () => {
    await DiscountPage.clickPercentageCheckbox();
});
Then('I click and enter {string} in the percentage input box', async (value) => {
    await DiscountPage.enterPercentageValue(value);
});
Then('I click on back button', async () => {
  await DiscountPage.clickBackbutton();
});