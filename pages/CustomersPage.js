const BasePage = require('./BasePage');
class CustomersPage extends BasePage {


async clickCustomerSidebar() {
    const CustomerBtn = await $("//span[normalize-space(text())='Customers']");
    await CustomerBtn.waitForClickable({ timeout: 15000 });
    await CustomerBtn.click();
  }

  
async clickAddCustomers() {
    const AddCustomerBtn = await $("//a[normalize-space(text())='Add customers']");
    await AddCustomerBtn.waitForClickable({ timeout: 15000 });
    await AddCustomerBtn.click();
  }


async clickTaxCheckbox() {
    const AddCustomerBtn = await $('//input[@id="tax_exempt"]');
    await AddCustomerBtn.waitForClickable({ timeout: 15000 });
    await AddCustomerBtn.click();
  }

  async clickEmailCheckbox() {
    const AddCustomerBtn = await $('//input[@id="email_marketing"]');
    await AddCustomerBtn.waitForClickable({ timeout: 15000 });
    await AddCustomerBtn.click();
  }

  async clickCustomerSave() {
    const CustomerSave = await $('//button[@type="submit" and normalize-space(text())="Save"]');
    await CustomerSave.waitForClickable({ timeout: 15000 });
    await CustomerSave.click();
  }

async fillCustomerFields(field, value) {
    // Mapping of human-readable field names to locators
    const fieldMapping = {
        // ---------- Contact ----------
        'contact first name': '//label[normalize-space()="First name"]/following::input[1]',
        'contact last name': '//label[normalize-space()="Last name"]/following::input[1]',
        'email': '//label[contains(text(),"Email")]/following::input[1]',
        'contact phone': '//label[contains(text(),"Phone")]/following::input[1]',

        // ---------- Address ----------
        'address first name': '//input[@name="address_first_name"]',
        'address last name': '//input[@name="address_last_name"]',
        'company': '//label[normalize-space()="Company"]/following::input[1]',
        'cpf': '//label[normalize-space()="CPF"]/following::input[1]',
        'address line 1': '//label[contains(text(),"Address Line 1")]/following::input[1]',
        'address line 2': '//label[contains(text(),"Address Line 2")]/following::input[1]',
        'city': '//label[normalize-space()="City"]/following::input[1]',
        'state': '//label[normalize-space()="State"]/following::input[1]',
        'zip': '//label[contains(text(),"ZIP")]/following::input[1]',
        'address phone': '//input[@name="address_phone"]',

        // ---------- Notes & Tags ----------
        'notes': '//input[@placeholder="Add notes about this customer"]',
        'tags': '//label[normalize-space()="Tags"]/following::input[1]'
    };

    // Normalize field name
    const selector = fieldMapping[field.trim().toLowerCase()];

    if (!selector) {
        throw new Error(`Unknown customer field provided: ${field}`);
    }

    const element = await $(selector);

    // Wait for element readiness
    await element.waitForDisplayed({ timeout: 10000 });
    await element.waitForEnabled({ timeout: 10000 });

    // Clear existing value
    await element.clearValue();

    // Type value character by character
    for (const char of value.toString().trim()) {
        await element.addValue(char);
        await browser.pause(50);
    }

    // Small pause to ensure value is registered
    await browser.pause(100);
}
}
module.exports = new CustomersPage ();