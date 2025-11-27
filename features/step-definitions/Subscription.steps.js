const { Before,Given, When, Then } = require('@cucumber/cucumber');
const LoginPage = require('../../pages/LoginPage');
const DashboardPage = require('../../pages/DashboardPage');
const SubscriptionPage = require('../../pages/SubscriptionPage'); // already exported as an instance
const dashboardPage = new DashboardPage();


// Before(async () => {
//     // Reset browser session before each scenario
//     await browser.reloadSession();
// });

When('I click on Subscription btn in sidebar', async () => {
    await SubscriptionPage.clickSubscriptionBtn();
});

Then('I should see Subscriptions heading', async () => {
    await SubscriptionPage.verifySubscriptionsHeading();
});

When('I select a Subscriptions plans', async () => {
    await SubscriptionPage.goToSubscriptionPlansInIframe();
});

Then('I click on Add new button', async () => {
    await SubscriptionPage.clickAddNewButton();
});

When('I click on Plan name input box', async () => {
    // Optional: Clicking the input box is usually handled by setValue
});

Then('I enter {string} in the input box', async (name) => {
    await SubscriptionPage.enterPlanName(name);
});

When('I click on Select products button', async () => {
    await SubscriptionPage.clickSelectProducts();
});

Then('I select Drop Shirt from the list', async () => {
    await SubscriptionPage.selectProduct1("DROP SHIRT");
});
Then('I select Shorts from list', async () => {
    await SubscriptionPage.selectProduct2("SHORTS");
});

Then('I click on Save button', async () => {
    await SubscriptionPage.clickSaveButton();
});

When('I click on order frequency box', async () => {
    await SubscriptionPage.clickOrderFrequencyBox();
});

Then('I select the frequency from the dropdown', async () => {
    // Pass "3" to select 3 from the dropdown
    await SubscriptionPage.selectFrequency("3");
});
Then('I enter {string} in plan name', async (name) => {
    await SubscriptionPage.enterPlanName2(name);
});

Then('I click on Savebtn', async () => {
    await SubscriptionPage.clickSaveBtn();

});
Then('I click on ok button', async () => {
    await SubscriptionPage.clickOkBtn();
});

Then('I click on discount offer checkbox', async () => {
    await SubscriptionPage.clickDisCheckbox();
});
Then('I click on Discount offer input box', async () => {
    await SubscriptionPage.clickDisbox();
});
Then('I enter the the discount ammount', async () => {
    await SubscriptionPage.enterDisAmmount("50");
});
Then('I click on Discount type', async () => {
    await SubscriptionPage.clickDiscountType();
});
Then('I select Percentage for discount', async () => {
    await SubscriptionPage.selectDiscountType();
});
Then('I select amount off from the dropdown', async () => {
    await SubscriptionPage.selectDiscountAmount();
});


