const { Given, When, Then } = require('@wdio/cucumber-framework');
const ShippingProfilePage = require('../../pages/ShippingProfilePage.page');

When('I click on Admin btn in sidebar', async () => {
    await ShippingProfilePage.clickAdminBtn();
});

Then('I click on Shipping card in the settings', async () => {
    await ShippingProfilePage.clickShippingCard();
});

Then('I shouLd see the Shipping heading', async () => {
    await ShippingProfilePage.verifyShippingHeading();
});

When('I click on Create shipping profile button', async () => {
    await ShippingProfilePage.clickCreateShippingProfile();
});

Then('I enter {string} in the Shipping profile name input box', async (name) => {
    await ShippingProfilePage.enterShippingProfileName(name);
});

Then('I click on Add products button', async () => {
    await ShippingProfilePage.clickAddProducts();
});

Then('I select only one product from the list', async () => {
    await ShippingProfilePage.selectOneProduct();
});

Then('I click on Select Button', async () => {
    await ShippingProfilePage.clickSelectButton();
});

Then('I click on Shipping Profile Save button', async () => {
    await ShippingProfilePage.clickSaveButton();
});

Then('I click on Add Shipping zone Button', async () => {
    await ShippingProfilePage.clickAddShippingZone();
});

Then('I enter {string} in the Shipping zone name input box', async (zone) => {
    await ShippingProfilePage.enterShippingZoneName(zone);
});

Then('I click on Edit Button', async () => {
    await ShippingProfilePage.clickEditButton();
});

Then('I enter {string} in the Country input box', async (country) => {
    await ShippingProfilePage.enterCountry(country);
});

Then('I click on Save changes button', async () => {
    await ShippingProfilePage.clickSaveChanges();
});

Then('I click on Add rate button', async () => {
await ShippingProfilePage.clickAddRate();
});

Then('I click on Add conditions', async () => {
await ShippingProfilePage.clickAddConditions();
});
Then('I check "Base on Order Value"', async () => {
await ShippingProfilePage.checkBaseOnOrderValue();
});
Then('I enter {string} in the Minimum order rate input box', async (minValue) => {
    await ShippingProfilePage.enterMinimumOrderRate(minValue);
});
Then('I enter {string} in the Maximum order rate input box', async (maxValue) => {
    await ShippingProfilePage.enterMaximumOrderRate(maxValue);
});
Then('I enter {string} in the Minimum order weight input box', async (minWeight) => {
    await ShippingProfilePage.enterMinimumOrderWeight(minWeight);
});
Then('I enter {string} in the Maximum order weight input box', async (maxWeight) => {
    await ShippingProfilePage.enterMaximumOrderWeight(maxWeight);
});
Then('I enter {string} in the Shipping rate name input box', async (name) => {
    await ShippingProfilePage.enterShippingRateName(name);
});

Then('I enter {string} in the Shipping rate amount input box', async (amount) => {
    await ShippingProfilePage.enterShippingRateAmount(amount);
});

Then('I click on Save rate button', async () => {
    await ShippingProfilePage.clickSaveRate();
});

Then('I click on final shipping profile Save button', async () => {
    await ShippingProfilePage.finalSaveShippingProfile();
});
