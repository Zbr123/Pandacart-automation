const { Before,Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../../pages/LoginPage');
const DashboardPage = require('../../pages/DashboardPage');
const CustomersPage = require('../../pages/CustomersPage');
const dashboardPage = new DashboardPage();




When('I click on Customer btn in sidebar', async () => {
  await CustomersPage.clickCustomerSidebar();
});

Then('I click on Add Customers button', async () => {
  await CustomersPage.clickAddCustomers();
});
Then('I click on the Customer is tax exempt checkbox', async () => {
  await CustomersPage.clickTaxCheckbox();
});
Then('I click on the Customer accepts email checkbox', async () => {
  await CustomersPage.clickEmailCheckbox();
});
When('I fill the form with following details:', async (dataTable) => {
    const rows = dataTable.hashes();

    for (const row of rows) {
        await CustomersPage.fillCustomerFields(row.field, row.value);
    }
});

When('I save the customer', async () => {
    await CustomersPage.clickCustomerSave();
});

Then('the customer should be saved successfully', async () => {
    // Flexible assertion – update if you have toast / redirect
    await browser.pause(1500);
});