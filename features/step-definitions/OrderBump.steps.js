const {Before,Given, When, Then } = require('@cucumber/cucumber');
const LoginPage = require('../../pages/LoginPage');
const DashboardPage = require('../../pages/DashboardPage');
const OrderBumpPage = require('../../pages/OrderbumpPage');
const dashboardPage = new DashboardPage();



Before(async () => {
    // Reset browser session before each scenario
    await browser.reloadSession();
});

When('I click on the order bump on the side bar', async () => {
    await OrderBumpPage.clickOrderBumpSidebar();
});

Then('I should see the order bump screen', async () => {
    await OrderBumpPage.verifyOrderBumpScreen();
});

When('I click on the new order bmp button', async () => {
    await OrderBumpPage.clickNewOrderBump();
});

Then('I should see the rules screen', async () => {
    await OrderBumpPage.verifyRulesScreen();
});

When('I click on the input box to turn on active', async () => {
    await OrderBumpPage.toggleActive();
});

When('I click on the field and enter {string} in the field', async (value) => {
    await OrderBumpPage.enterTitle(value);
});

When('click on thee Ordersave button', async () => {
    await OrderBumpPage.clickSave();
});

Then('I should see the product headings', async () => {
    await OrderBumpPage.verifyProductHeading();
});

When('I click on the Add rule button', async () => {
    await OrderBumpPage.clickAddRule();
});

When('I click on the save rules button', async () => {
    await OrderBumpPage.clickSaveRule();
});

When('Then I click on the search', async () => {
    await OrderBumpPage.clickSearchProduct();
});

Then('I should see the add product heading.', async () => {
    await OrderBumpPage.verifyAddProductHeading();
});

When('then enter product name {string}', async (name) => {
    await OrderBumpPage.enterProductSearch(name);
});

When('click on the product in the drop down.', async () => {
    await OrderBumpPage.selectProductFromDropdown();
});

When('click on the select button', async () => {
    await OrderBumpPage.clickSelectProduct();
});

When('Then clicks on the view product save button', async () => {
    await OrderBumpPage.clickViewProductSave();
});

When('Then click on the order bump sae button', async () => {
    await OrderBumpPage.finalSaveOrderBump();
});

When('I click on the back button', async () => {
    await OrderBumpPage.clickBackButton();
});

Then('I should see the orderbumps heading.', async () => {
    await OrderBumpPage.verifyOrderBumpScreen();
});
Then('I click on Discount input box and enter discount', async () => {
    await OrderBumpPage.enterDiscountValue();
});
Then('I click on Fixed checkbox', async () => {
    await OrderBumpPage.clickFixedCheckbox();
})
Then('I click on Action tab and select Total in cart from the dropdown', async () => {
    await OrderBumpPage.selectActionTotalinCart();
})
Then('I click on Action tab and select Cart Items from the dropdown', async () => {
    await OrderBumpPage.selectActionCartItems();
})
Then('I click on rule and select equal to from the dropdown', async () => {
    await OrderBumpPage.selectequalRule();
})
Then('I click on Value input box and enter the value', async () => {
    await OrderBumpPage.enterValue();
})
Then('I click on rule and select not equal to from the dropdown', async () => {
    await OrderBumpPage.selectnotequalRule();
})
Then('I click on rule and select greater than to from the dropdown', async () => {
    await OrderBumpPage.selectgreaterthanRule();
})
Then('I click on rule and select less than from the dropdown', async () => {
    await OrderBumpPage.selectlessthanRule();
})
Then('I click on rule and select Greater or Equal to from the dropdown', async () => {
    await OrderBumpPage.selectGreaterorEqualRule();
})
Then('I click on rule and select Less or Equal to from the dropdown', async () => {
    await OrderBumpPage.selectLessorEqualRule();
})
Then('I click on rule and select Between values from the dropdown', async () => {
    await OrderBumpPage.selectBetweenValuesRule();
})
Then('I click on min Value input box and enter the value', async () => {
    await OrderBumpPage.enterMinValue();
})
Then('I click on max Value input box and enter the value', async () => {
    await OrderBumpPage.enterMaxValue();
})
Then('I click on rule and select Equal to all from the dropdown', async () => {
    await OrderBumpPage.selectEqualtoallRule();
})
Then('I click on rule and select Not Equal to all from the dropdown', async () => {
    await OrderBumpPage.selectNotEqualtoallRule();
})
When('I click on the search for rules', async () => {
    await OrderBumpPage.clickSearchProductRule();
});
Then('I click on rule and select Equal to any from the dropdown', async () => {
    await OrderBumpPage.selectEqualtoanyRule();
})
Then('I click on rule and select Not Equal to any from the dropdown', async () => {
    await OrderBumpPage.selectNotEqualtoanyRule();
})