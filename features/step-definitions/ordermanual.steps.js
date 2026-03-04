const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPage = require('../../pages/LoginPage');
const DashboardPage = require('../../pages/DashboardPage');
const ManualOrderPage = require('../../pages/ordermanualPage');


Then('I click on order btn in sidebar', async () => {
    await ManualOrderPage.clickOrdersFromSidebar();
});
Then('I click on all order', async () => {
    await ManualOrderPage.clickAllOrders();
});
Then('I should see the order heading', async () => {
    await ManualOrderPage.verifyOrdersHeading();
});
// -------- CREATE ORDER PAGE FLOW --------
Then('I click on create button', async () => {
    await ManualOrderPage.clickCreateOrderBtn();
});
Then('I should see create order page', async () => {
    await ManualOrderPage.verifyCreateOrderPage();
});
// -------- PRODUCT SELECTION --------
Then('I click on Add Products button', async () => {
    await ManualOrderPage.clickAddProductsBtn();
});
Then('I should click on the add buuton again', async () => {
    await ManualOrderPage.clickAddProductsBtn();
});
Then('I should see addproducts popup', async () => {
    await ManualOrderPage.verifyProductsSearchField();
});
When('I click on the search bar and search the product {string}', async (productName) => {
    await ManualOrderPage.searchProduct(productName);
});

When('I select product form the dropdown', async () => {
    await ManualOrderPage.selectProductFromDropdown();
});

Then('I click on the "choose" button', async () => {
    await ManualOrderPage.clickChooseBtn();
});
Then('I should see Order detail page', async () => {
    await ManualOrderPage.verifyOrderDetailPage();
});
Then('I click on customer field', async () => {
    await ManualOrderPage.clickCustomerfield();
});
// -------- CUSTOMER --------
Then('I click on the create a new customer button', async () => {
    await ManualOrderPage.clickCreateNewCustomerBtn();
});
Then('I should see the create a new customer page', async () => {
    await ManualOrderPage.verifyCreateCustomerPage();
});
Then('I fill the Customer form with the following data:', async (dataTable) => {
    const data = dataTable.rowsHash();
    await ManualOrderPage.fillCustomerForm(data);
});
Then('I click on the province field', async () => {
    await ManualOrderPage.clickProvinceField();
});
Then('Select sindh in the drop down', async () => {
    await ManualOrderPage.selectSindhFromDropdown();
});
Then('enter "test" in the address field', async () => {
    await ManualOrderPage.enterAddress();
});
Then('click on the customer page save button', async () => {
    await ManualOrderPage.clickSaveCustomerBtn();
});
// -------- ORDER FORM --------
Then('I fill the following  form with the following data:', async (dataTable) => {
    const data = dataTable.rowsHash();
    await ManualOrderPage.fillOrderForm(data);
});
Then('I click on the Payment method dropdown', async () => {
    await ManualOrderPage.selectPaymentMethod();
});

Then('I select on the Payment method dropdown for Credit Card', async () => {
    await ManualOrderPage.selectPaymentMethodCredit();
});

Then(/^I select "([^"]*)" from the dropdown$/, async (method) => {
    await ManualOrderPage.selectPaymentMethod(method);
});
Then(/^the payment method should be set to "([^"]*)"$/, async (expected) => {
    const actual = await ManualOrderPage.getSelectedPaymentMethod();
    expect(actual).toEqual(expected);
});
Then('I click on the save order', async () => {
    await ManualOrderPage.clickSaveOrderBtn();
});
// -------- SHIPPING --------
Then('I should see the Add shipping popup', async () => {
    await ManualOrderPage.verifyShippingPopup();
});
Then('click on the free radio button', async () => {
    await ManualOrderPage.selectFreeShipping();
});
Then('Click on the save button', async () => {
    await ManualOrderPage.clickSaveShippingBtn();
});
Then('I clicked on the save button for Card Details', async () => {
    await ManualOrderPage.clickCCBtn();
});
Then('I click on Add Discounts', async () => {
    await ManualOrderPage.clickAddDiscountBtn();
});

Then('I click customer field and enter {string} and select it from the dropdown', async (email) => {
    await ManualOrderPage.selectCustomer(email);
});
Then('I click on Fixed ammount checkbox', async () => {
    await ManualOrderPage.clickFixedAmount();
});
Then(
  'I enter {string} discount in the input box',
  async function (discount) {
      await ManualOrderPage.enterDiscount(discount);
  }
);
Then('I save the discount', async () => {
    await ManualOrderPage.clickSaveBtn();
});
Then('I should see the create order page', async () => {
    await ManualOrderPage.verifyCreateOrderPage();
});
Then('click on the save button', async () => {
    await ManualOrderPage.clickSaveCustomerBtn(); // Assuming same button reuse
});
Then('click on the order save button', async () => {
    await ManualOrderPage.clickOrderSaveCustomerBtn(); // Assuming same button reuse
});
Then(
  'I select {string} from the Country dropdown',
  async function (country) {
    await ManualOrderPage.selectCountry(country);
  }
);
Then('I enter the card number', async function () {
    await ManualOrderPage.enterCardNumber();
});

Then('I enter MM/YY', async function () {
    await ManualOrderPage.enterExpirydate();
});

Then('I enter CVC', async function () {
    await ManualOrderPage.enterCVC();
});
Then('I enter valid card details', async function () {
    await ManualOrderPage.enterStripeCardDetails();
});
Then('I click on the Affiliate Field', async () => {
    await ManualOrderPage.openAffiliateDropdown();
});

Then('I enter affiliate name {string}', async (affiliateName) => {
    await ManualOrderPage.searchAffiliate(affiliateName);
});

Then('I click on the searched affiliate and click on Select Button', async () => {
    await ManualOrderPage.selectAffiliateFromList();
});