const { Before,Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../../pages/LoginPage');
const DashboardPage = require('../../pages/DashboardPage');
const GiftProductPage = require('../../pages/GiftproductPage');
const dashboardPage = new DashboardPage();


Before(async () => {
    // Reset browser session before each scenario
    await browser.reloadSession();
});

Then('I click on Gift cards from the products section', async () => {
    await GiftProductPage.clickOnGiftCards();
});

Then('I should see Gift Cards Heading', async () => {
    await GiftProductPage.verifyGiftCardHeading();
});

Then('I click on Add Gift Card product', async () => {
    await GiftProductPage.clickAddGiftCard();
});

Then('I enter product name {string}', async (name) => {
    await GiftProductPage.enterProductName(name);
});

Then('I click on enable minimum quantity checkbox', async () => {
    await GiftProductPage.enableMinQuantity();
});

Then('I enter the quantity in the minimum input', async () => {
    await GiftProductPage.enterMinQuantity('1');
});

Then('I click on enable maximum quantity checkbox', async () => {
    await GiftProductPage.enableMaxQuantity();
});

Then('I enter the quantity in the maximum input', async () => {
    await GiftProductPage.enterMaxQuantity('10');
});

Then('I enter ammount in first denominations input box', async () => {
    await GiftProductPage.enterDenomination('50');
});
Then('I enter ammount in multiple denominations input box', async () => {
    await GiftProductPage.entermultipleDenomination();
});


Then('I click on save products button', async () => {
    await GiftProductPage.clickSaveProduct();
});
Then('I click on save button', async () => {
    await GiftProductPage.clickSave();
});
Then('I upload the Image for the Gift Card', async () => {
    await GiftProductPage.uploadImage();
});
Then('I click on Actions button', async () => {
    await GiftProductPage.clickActionbutton();
});

Then('I select Convert To Physical from the dropdown', async () => {
    await GiftProductPage.selectConverttophysical();
});
Then('I click on enable checkbox to fill the Markets Details', async () => {
    await GiftProductPage.clickMarketCheckbox();
});
Then('I fill the required fields with following data', async (dataTable) => {
    const data = dataTable.hashes(); // ✅ removes header row automatically

    for (const row of data) {
        await GiftProductPage.fillProductFields(
            row.field,
            row.value
        );
    }
});

Then('I select {string} from the supplier list', async (supplierName) => {
    await GiftProductPage.selectSupplier(supplierName);
});;


Then('I click on copy from another product', async () => {
  await GiftProductPage.clickCopyFromAnotherProduct();
});

Then('I click on the product tile and search {string}', async (productName) => {
  await GiftProductPage.searchProductToCopy(productName);
});

Then(
  'I select the {string} from the dropdown and click on Select button',
  async (productName) => {
    await GiftProductPage.selectProductFromDropdown(productName);
  }
);

Then('I click on Issue Gift Card', async () => {
  await GiftProductPage.clickIssueGiftCard();
});


Then('I click on Initial Value Input box and enter {string}', async (value) => {
    await GiftProductPage.enterInitialValue(value);
});

Then('I click on the customer field and enter {string} and select it from the dropdown', async (email) => {
    await GiftProductPage.selectCustomer(email);
});

Then('I click on set expiration date checkbox', async () => {
    await GiftProductPage.clickDateCheckbox();
})
Then('I click on the date input box', async () => {
    await GiftProductPage.enterDate();
})

Then('I click on Code input box and remove the default code and enter {string}', async (code) => {
    await GiftProductPage.enterGiftCardCode(code);
});