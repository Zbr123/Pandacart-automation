const DashboardPage = require("../../pages/DashboardPage");
const { Given, When, Then } = require('@cucumber/cucumber');
const dashboardPage = new DashboardPage();

Then("I click on Product btn in sidebar", async () => {
    await dashboardPage.clickProductsButton(); 
    await browser.pause(10000);
});

Then("I click on All Products", async () => {
    await dashboardPage.clickAllProducts();
});

Then("I should see the Products heading", async () => {
    await dashboardPage.verifyProductsHeading();
});

Then("I click on Add Product button", async () => {
    await dashboardPage.clickAddProductButton();
});

Then("I click on Physical product option", async () => {
    await dashboardPage.clickPhysicalProductOption(); 
});

Then("I fill the product form with the following data:", async (dataTable) => {
    for (const { field, value } of dataTable.hashes()) {
      await dashboardPage.fillProductField(field, value);
    }
  });
  

  Then("I click on the Save product button", async () => {
    await dashboardPage.clickSaveProductButton();
});

Then("I click on All Products from the sidebar", async () => {
    await dashboardPage.clickAllProductsLink();
});

Then("I should see the Product Page heading", async () => {
    await dashboardPage.verifyProductSearchInputVisible();
});

Then("I search for product {string}", async (productName) => {
    const searchInput = await $('input[name="term"]');
    await searchInput.waitForDisplayed({ timeout: 10000 });
    await searchInput.clearValue();                     
    await searchInput.setValue(productName);
    await browser.keys(['Enter']);                     
    await browser.pause(3000);                          
});

Then("I should see product {string} in the results", async (productName) => {
    const productSelector = `//td[contains(text(), "${productName}")]`;
    const productResult = await $(productSelector);
    await productResult.waitForDisplayed({ timeout: 10000 });
    await expect(productResult).toBeDisplayed();
});


