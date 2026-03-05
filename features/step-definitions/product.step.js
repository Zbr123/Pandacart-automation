 const DashboardPage = require("../../pages/DashboardPage");
const { Given, When, Then } = require('@cucumber/cucumber');
const ProductPage = require("../../pages/product");
const dashboardPage = new DashboardPage();



Then("I click on digital product option", async () => {
    await ProductPage.clickDigitaltOption(); 
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


Then('I upload the image', async () => {
    await ProductPage.uploadImage();
});

