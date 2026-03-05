const path = require('path');
const fs = require('fs');

const BasePage = require('./BasePage');
class GiftProductPage extends BasePage {

  async clickOnGiftCards() {
    const giftCardBtn = await $("//span[normalize-space(text())='Gift cards']");
    await giftCardBtn.waitForClickable({ timeout: 15000 });
    await giftCardBtn.click();
  }

  async verifyGiftCardHeading() {
    const heading = await $('//h4[normalize-space()="Gift cards"]');
    await heading.waitForDisplayed({ timeout: 10000 });
  }

  async clickAddGiftCard() {
    const addBtn = await $("//a[contains(text(),'Add gift card')]");
    await addBtn.waitForClickable({ timeout: 10000 });
    await addBtn.click();
  }

   async clickIssueGiftCard() {
    const addBtn = await $("//a[contains(text(),'Issue gift card')]");
    await addBtn.waitForClickable({ timeout: 10000 });
    await addBtn.click();
  }


  async enterProductName(name) {
    const nameInput = await $('input[name="title"]');
    await nameInput.waitForDisplayed({ timeout: 10000 });
    await nameInput.setValue(name);
  }

  async enableMinQuantity() {
    const minCheckbox = await $('//input[@class="form-check-input js_minimum_quantity"]');
    await minCheckbox.waitForClickable({ timeout: 10000 });

    if (!(await minCheckbox.isSelected())) {
      await minCheckbox.click();
    }
  }

  async enterMinQuantity(value) {
    const minInput = await $('//input[@name="minimum_quantity_count"]');
    await minInput.waitForDisplayed({ timeout: 10000 });
    await minInput.setValue(value);
  }

  async enableMaxQuantity() {
    const maxCheckbox = await $('//input[@id="max_quantity_checkbox"]');
    await maxCheckbox.waitForClickable({ timeout: 10000 });

    if (!(await maxCheckbox.isSelected())) {
      await maxCheckbox.click();
    }
  }

  async enterMaxQuantity(value) {
    const maxInput = await $('//input[@name="max_quantity_count"]');
    await maxInput.waitForDisplayed({ timeout: 10000 });
    await maxInput.setValue(value);
    await browser.pause(10000);
  }

  async enterDenomination(value) {
    const amountInput = await $('(//input[@class="form-control variant-price"])[1]');
    await amountInput.waitForDisplayed({ timeout: 10000 });
    await amountInput.setValue(value);
  }

   async entermultipleDenomination() {
    const amountInput = await $('(//input[@class="form-control variant-price"])[1]');
    await amountInput.waitForDisplayed({ timeout: 10000 });
    await amountInput.setValue("50");

    const amountInput2 = await $('(//input[@class="form-control variant-price"])[2]');
    await amountInput2.waitForDisplayed({ timeout: 10000 });
    await amountInput2.setValue("70");

    const amountInput3 = await $('(//input[@class="form-control variant-price"])[3]');
    await amountInput3.waitForDisplayed({ timeout: 10000 });
    await amountInput3.setValue("90");

    const amountInput4 = await $('(//input[@class="form-control variant-price"])[4]');
    await amountInput4.waitForDisplayed({ timeout: 10000 });
    await amountInput4.setValue("120");
  }

  async clickSaveProduct() {
    const saveBtn = await $('//button[normalize-space()="Save product"]');
    await saveBtn.waitForClickable({ timeout: 15000 });
    await saveBtn.click();
    await browser.pause(10000);
  }

  async clickSave() {
    const saveBtn = await $('//button[@class="btn btn-primary js_save_gift" and normalize-space()="Save"]');
    await saveBtn.waitForClickable({ timeout: 15000 });
    await saveBtn.click();
    await browser.pause(10000);
  }
  async uploadImage() {
    // 1. Resolve image path from project root
    const imagePath = path.resolve(
        process.cwd(),
        'features/imageupload/GIFTCARD.jpg'
    );

    // 2. Read image as base64 (Node side)
    const imageBuffer = fs.readFileSync(imagePath);
    const base64Image = imageBuffer.toString('base64');

    // 3. Inject REAL File into Vue Dropzone
    await browser.executeAsync((base64, done) => {
        const byteCharacters = atob(base64);
        const byteNumbers = new Array(byteCharacters.length);

        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }

        const byteArray = new Uint8Array(byteNumbers);

        const file = new File(
            [byteArray],
            'GIFTCARD.jpg',
            { type: 'image/jpeg' }
        );

        const dropzoneElement = document.querySelector('#drop-zone');
        const dropzone = dropzoneElement.dropzone;

        dropzone.addFile(file);

        done();
    }, base64Image);

    // 4. Give Dropzone time to process upload
    await browser.pause(2000);
}

 async clickActionbutton() {
    const ActionBtn = await $('//button[normalize-space()="Actions"]');
    await ActionBtn.waitForClickable({ timeout: 15000 });
    await ActionBtn.click();
    await browser.pause(2000);
  }
  

  async selectConverttophysical() {
    const SelectPhysical = await $('//a[@id="convert-to-physical"]');
    await SelectPhysical.waitForClickable({ timeout: 15000 });
    await SelectPhysical.click();
    await browser.pause(5000);
  
    const Sureproceed= await $('//button[@class="swal2-confirm swal2-styled"]')
    await Sureproceed.waitForClickable();
    await Sureproceed.click();
    await browser.pause(1000);

}

 async clickMarketCheckbox() {
    const minCheckbox = await $('//label[@class="form-check-label mb-0" and @for]');
    await minCheckbox.waitForClickable({ timeout: 10000 });

    if (!(await minCheckbox.isSelected())) {
      await minCheckbox.click();
    }
  }

async fillProductFields(field, value) {
    // Mapping of human-readable field names to locators
    const fieldMapping = {
        'sales page': '//input[@name="sales_page"]',
        'vsl': '//input[@name="vsl"]',
        'return address': '//input[@name="return_center_address"]',
        'product purpose': '//input[@name="purpose"]',
    };

    // Normalize the field name
    const selector = fieldMapping[field.trim().toLowerCase()];

    if (!selector) {
        throw new Error(`Unknown field provided: ${field}`);
    }

    const element = await $(selector);

    // Wait until the element is displayed and enabled
    await element.waitForDisplayed({ timeout: 10000 });
    await element.waitForEnabled({ timeout: 10000 });

    // Clear existing value
    await element.clearValue();

    // Input the new value character by character (optional small pause for reliability)
    for (const char of value.toString().trim()) {
        await element.addValue(char);
        await browser.pause(50);
    }

    // Optional: small pause after finishing typing to ensure value is registered
    await browser.pause(100);
}

async selectSupplier(supplierName = 'Eagle Labs') {
    // Locate the <select> element
    const selectElem = await $('select[name="supplier"]');
    await selectElem.waitForDisplayed({ timeout: 10000 });

    // Select the option by visible text
    await selectElem.selectByVisibleText(supplierName);

    // Optional: verify selection
    const selectedValue = await selectElem.getValue();
    console.log(`Selected supplier: ${selectedValue}`);
}


async clickDateCheckbox() {
  const copyBtn = await $('//label[@class="form-check-label" and @for="set_expiration_date"]');
  await copyBtn.waitForClickable({ timeout: 10000 });
  await copyBtn.click();
}

async clickCopyFromAnotherProduct() {
  const copyBtn = await $("//button[normalize-space()='Copy from another product']");
  await copyBtn.waitForClickable({ timeout: 10000 });
  await copyBtn.click();
}

async searchProductToCopy(productName) {
  const searchInput = await $('//input[@placeholder="Product title"]');

  await searchInput.waitForDisplayed({ timeout: 10000 });
  await searchInput.clearValue();
  await searchInput.setValue(productName);

  await browser.pause(1000); // wait for dropdown results
}
async selectProductFromDropdown(productName) {
    // Wait until at least one dropdown item is displayed
    const productOption = await $(`//label[contains(normalize-space(), '${productName}')]`);
    
    // Wait for the element to exist and be displayed
    await productOption.waitForExist({ timeout: 10000 });
    await productOption.waitForDisplayed({ timeout: 10000 });

    // Scroll into view just in case
    await productOption.scrollIntoView();

    // Use JS click if normal click sometimes fails
    await browser.execute((el) => el.click(), productOption);

    // Click the Select button
    const selectBtn = await $("//button[normalize-space()='Select']");
    await selectBtn.waitForClickable({ timeout: 10000 });
    await selectBtn.click();
}
async enterInitialValue(value) {
        const input = await $('//input[@name="price"]'); // adjust name attribute if different
        await input.waitForDisplayed({ timeout: 10000 });
        await input.clearValue();
        await input.setValue(value);
    }
async selectCustomer(email) {
    // Locate and type into the customer input
    const customerInput = await $('//input[@id="customer-search"]');
    await customerInput.waitForDisplayed({ timeout: 10000 });
    await customerInput.clearValue();
    await customerInput.setValue(email);

    // Wait for at least one dropdown option to appear
    await browser.waitUntil(async () => {
        const options = await $$('//div[@id="eac-container-customer-search"]//li//div[contains(@class,"eac-item")]');
        return options.length > 0;
    }, {
        timeout: 10000,
        timeoutMsg: 'Customer dropdown options did not appear'
    });

    // Always locate the option *after* it appears to avoid stale references
    const dropdownOption = await $(`//div[@id='eac-container-customer-search']//li//div[contains(@class, 'eac-item') and contains(., 'saadtest@cartpanda.com')]`);
    await dropdownOption.waitForDisplayed({ timeout: 10000 });
    await dropdownOption.click();
}

async enterDate() {
        const input = await $("//input[@name='expiration_date']");
        await input.click();
        
        const date = await $('//span[@aria-label="December 26, 2025"]');
        await date.click();
      
      }
async enterGiftCardCode(code) {
        const codeInput = await $('//input[@name="card_code"]'); // Update XPath if name or attribute differs
        await codeInput.waitForDisplayed({ timeout: 10000 });

        // Clear the default value
        await codeInput.clearValue();

        // Enter the new code
        for (const char of code) {
            await codeInput.addValue(char);
            await browser.pause(50); // optional: simulate typing
        }
    }

}

module.exports = new GiftProductPage ();
