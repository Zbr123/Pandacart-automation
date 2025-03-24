const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../../pages/LoginPage');




console.log("✅ Step definitions file is loaded!"); // Debugging step

Given("I am on the login page", async () => {
    const baseUrl = browser.options.baseUrl;
    await browser.url(`${baseUrl}`);
    await browser.pause(3000);
    await LoginPage.assertLoginHeadingDisplayed();
});


When("I enter {string} in email field", async (email) => {
    await LoginPage.enterEmail(email);
    await browser.pause(1000);

});

When("I enter {string} in password field", async (password) => {
    await LoginPage.enterPassword(password);
    await browser.pause(1000);

});

When("I click on Signin button", async () => {
    await LoginPage.SignInBtn();
    await browser.pause(10000);
});

Then("I should see Dashboard Page", async () => {
    await LoginPage.dashBoardPage();
    await browser.pause(10000);
});



When("I click On Profile button", async () => {
    await LoginPage.profileSettingBtn();
    await browser.pause(2000);
});

When("I click on Logout button", async() => {
    await LoginPage.LogoutBtn();
    await browser.pause(5000);
});

Then("I should see log into your account text", async () => {
    await LoginPage.LogInToYourAccountText();
    await browser.pause(2000);

});


//add product
When("I click on add product button", async () => {
    await LoginPage.addProductbtn();
    await browser.pause(5000);
});

When("I enter {string} in price field", async (price) => {
    await LoginPage.enterPrice(price);
    await browser.pause(1000);

});

When("I enter {string} in compare price field", async (compareprice) => {
    await LoginPage.enterComparePrice(compareprice);
    await browser.pause(1000);

});

When("I click on save product button", async() => {
    await LoginPage.saveProductBtn();
    await browser.pause(5000);
});

Then("I should see sku field is required text", async () => {
    await LoginPage.SKUFieldRequiredText();
    await browser.pause(2000);

});

When("I enter {string} in title field", async (shirttitle) => {
    await LoginPage.enterShirtTitle(shirttitle);
    await browser.pause(1000);

});

When("I click on Check box button", async() => {
    await LoginPage.checkBoxBtn();
    await browser.pause(5000);
});


When("I enter {string} in Sales page field", async (salesPagetext) => {
    await LoginPage.entersalesPagetext(salesPagetext);
    await browser.pause(1000);

});


When("I enter {string} in VSL field", async (VSLText) => {
    await LoginPage.enterVSLText(VSLText);
    await browser.pause(1000);

});



When('I select {string} from the supplier dropdown', async (supplierName) => {
    await LoginPage.selectSupplier(supplierName);
});

Then(/^the selected supplier should be "([^"]*)"$/, async (expectedSupplier) => {
    const selectedSupplier = await LoginPage.getSelectedSupplier();
    expect(selectedSupplier).toEqual(expectedSupplier);
});



When("I enter {string} in product purpose field", async (purposeText) => {
    await LoginPage.enterProductPurposeText(purposeText);
    await browser.pause(1000);

});

When("I enter {string} in return address field", async (returnaddressText) => {
    await LoginPage.enterReturnAddressText(returnaddressText);
    await browser.pause(1000);

});


Then("I should see Compliance script text", async () => {
    await LoginPage.CompliancescriptText();
    await browser.pause(2000);

});

When("I click on Validate button", async() => {
    await LoginPage.ValidateButton();
    await browser.pause(10000);
});


Then("I should see script missing alert text", async () => {
    await LoginPage.scriptMissingalerttext();
    await browser.pause(2000);

});





