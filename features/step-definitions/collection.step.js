const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPage = require('../../pages/LoginPage');
const DashboardPage = require('../../pages/DashboardPage');
const CollectionPage = require('../../pages/CollectionPage');

// Instantiate page objects

const dashboardPage = new DashboardPage();
const collectionPage = new CollectionPage();



Then('I click on Collections', async () => {
    await collectionPage.clickCollections();
});

Then('I should see the Collections heading', async () => {
    await collectionPage.verifyCollectionHeading();
});

Then('I click on Add Collection button', async () => {
    await collectionPage.clickAddCollectionOption();
});

Then('I fill the collection form with the following data:', async (dataTable) => {
    for (const { field, value } of dataTable.hashes()) {
        await collectionPage.fillCollectionField(field, value);
    }
});
Then('I click on the smart collection radio button',async()=>{
      await collectionPage.clickonSmarthCollectionOption();
});

When('I click on the save collection buttion', async () => {
    await collectionPage.clickSaveCollection();
});

Then('I click on edit collection btn in sidebar', async () => {
    await collectionPage.clickEditCollectionSidebar();
});

Then('I should see all collections', async () => {
    await collectionPage.verifyAllCollectionsVisible();
});

//Manual Collection
Then('I click on the manual collection radio button',async()=>{
      await collectionPage.clickonManualCollectionOption();
});





 