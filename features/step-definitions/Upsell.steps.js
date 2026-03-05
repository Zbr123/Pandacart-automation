const { Before,Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../../pages/LoginPage');
const DashboardPage = require('../../pages/DashboardPage');
const UpsellPage = require('../../pages/UpsellPage'); // already exported as an instance
const dashboardPage = new DashboardPage();
Before(async () => {
    // Reset browser session before each scenario
    await browser.reloadSession();
});

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
Then('I fill the Name field with {string}', async (offername) => {
  await UpsellPage.fillUpsellNameField(offername);
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
When('I click on plus icon and select add downsell', async () => {
    await UpsellPage.selectseconddownsell();
});
When('I click on second upsell plus icon and select add downsell', async () => {
    await UpsellPage.selectdownsellforsecondupsell();
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
When('I enter the product collection {string}', async (productName) => {
    await UpsellPage.enterProductCollection(productName);
});
Then('I select the product {string} from the dropdown', async (productName) => {
    await UpsellPage.selectProductFromDropdown(productName);
});
Then('I select the product collection {string} from the dropdown', async (productName) => {
    await UpsellPage.selectProductCollectionFromDropdown(productName);
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
// Then('I should see Test Offer', async () => {
//     await UpsellPage.verifyTestOffer();
// })
// Then('I enable the "Test Offer" upsell', async () => {
//     await UpsellPage.enableTestOffer();
// });
Then('I should see {string}', async (offerName) => {
    await UpsellPage.verifyUpsellIsVisible(offerName);
});
Then('I enable the upsell named {string}', async (offerName) => {
    await UpsellPage.enablefunnel(offerName);
});
Then('I click on plus icon and select add upsell', async () => {
    await UpsellPage.selectsecondupsell();
});
Then('I click on discount value and enter Upsell discount value {string}', async (discountValue) => {
    await UpsellPage.enterUpsellDiscount(discountValue);
});
Then('I click on Discount Type and select percentage from dropdown for Upsell offer', async () => {
    await UpsellPage.selectUpsellDiscountType();
});
Then('I enable this upsell', async () => {
    await UpsellPage.enableUpsells();
});
Then('I click on search Affiliate field and select {string}', async (affiliateName) => {
    await UpsellPage.selectAffiliate(affiliateName);
});
// Then('I select the product "DROP SHIRT" from the dropdown', async () => {
//     await UpsellPage.selectProductFromDropdown1("DROP SHIRT");
// });
// Then('I select the product "SOCKS" from the dropdown', async () => {
//     await UpsellPage.selectProductFromDropdown2("SOCKS");
// });
Then('I click on rule and select Total cart value', async () => {
    await UpsellPage.selectRuleAlwaysAvailable();
});
Then('I click on rule and select Product in cart', async () => {
    await UpsellPage.selectProductInCart();
});
Then('I click on rule and select Product Collection in cart', async () => {
    await UpsellPage.selectProductCollectionInCart();
});
When('I select operator {string}', async (operator) => {
    await UpsellPage.selectOperator(operator);
});
When('I enter the value {string} in the Value input', async (value) => {
await UpsellPage.enterRuleValue(value);
});
Then('I enable all upsell toggles', async () => {
    await UpsellPage.enableAllUpsellToggles();
}); 
Then('I click on Upsell External button', async () => {
    await UpsellPage.clickExternalUpsell();
}); 
Then(
    'I enter the external page URL {string} in the External page field',
    async (url) => {
        await UpsellPage.enterExternalPageUrl(url);
    }
);
Then(
    'I enter the external page URL {string} in the Offer Page URL',
    async (url) => {
        await UpsellPage.enterExternalPageUrlinfunnel(url);
    }
);

Then('I click on the Create Upsell button', async () => {
    await UpsellPage.clickcreateUpsellButton();
});
Then('I click on the upsell offer {string}', async (offerName) => {
        await UpsellPage.clickOnUpsellOfferByName(offerName);
    }
);
