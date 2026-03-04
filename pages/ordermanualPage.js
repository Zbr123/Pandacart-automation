const BasePage = require('./BasePage');
class ManualOrderPage extends BasePage {
// -------- SIDEBAR NAVIGATION --------
  async clickOrdersFromSidebar() {
    const ordersBtn = await $("//a[@href='#orders-nav']");
    await ordersBtn.waitForDisplayed({ timeout: 5000 });
    await ordersBtn.click();
  }
  async clickAllOrders() {
    const allOrdersLink = await $("//span[text()='All orders']")
    await allOrdersLink.waitForDisplayed({ timeout: 5000 });
    await allOrdersLink.click();
  }
  async verifyOrdersHeading() {
    const heading = await $("//h4[text()='Orders']")
    await heading.waitForDisplayed({ timeout: 5000 });
    await expect(heading).toBeDisplayed();
  }
  // -------- ORDER CREATION --------
  async clickCreateOrderBtn() {
    const createBtn = await $("//a[@class='btn btn-primary create-order-button']");
    await createBtn.waitForDisplayed({ timeout: 5000 });
    await createBtn.click();
  }
  async verifyCreateOrderPage() {
    const heading = await $("//h4[normalize-space(text())='Create order']");
    await heading.waitForDisplayed({ timeout: 10000});
    await expect(heading).toBeDisplayed();
    await browser.pause(5000);
  }
  // -------- PRODUCT SELECTION --------
  async clickAddProductsBtn() {
    const addProductBtn = await $("//button[normalize-space(.)='Add products']");
    await addProductBtn.waitForDisplayed({ timeout: 5000 });
    await addProductBtn.click();
    await browser.pause(5000);
  }
  async verifyProductsSearchField() {
    const searchField = await $("//h5[contains(@class,'modal-title') and normalize-space(.)='Add products']");
    await searchField.waitForDisplayed({ timeout: 15000 });
    await expect(searchField).toBeDisplayed();
    await browser.pause(5000);
  }
  
    async searchProduct(productName) {
    

      const searchInput = await $('#search-product-input');
    await searchInput.waitForExist({ timeout: 10000 });
    await searchInput.scrollIntoView();
    await searchInput.waitForDisplayed({ timeout: 10000 });
    await searchInput.click();
    await searchInput.setValue(productName);
    await browser.pause(5000);


}
    



async selectProductFromDropdown() {
    // Locate the exact option dynamically
    const dropdownOption = await $(`//label[@for="variant_checkbox_196380779"]`);
    await dropdownOption.waitForDisplayed({ timeout: 10000 });

    await dropdownOption.click();
}

  async clickChooseBtn() {
    const chooseBtn = await $("//button[@id='choose-products']");
    await chooseBtn.waitForDisplayed({ timeout: 10000 });
    await chooseBtn.click();
  }
  async verifyOrderDetailPage() {
    const heading = await $("//h5[normalize-space(.)='Order details']");
    await heading.waitForDisplayed({ timeout: 10000 });
    await expect(heading).toBeDisplayed();
    await browser.pause(3000);
  }
  // -------- CUSTOMER --------
  async clickCreateNewCustomerBtn() {
    const btn = await $("//a[@id='create-customer']");
    await btn.waitForDisplayed({ timeout: 50000 });
    await btn.click();
  }
  async verifyCreateCustomerPage() {
    const heading = await $("//h5[text()='Create a new customer']");
    await heading.waitForDisplayed({ timeout: 5000 });
    await expect(heading).toBeDisplayed();
  }
  async fillCustomerForm(data) {
    const fieldMap = {
        email: "//input[@id='customer-email-field']",
        full_name: "//input[@id='customer-full-name-field']",
        phone_number: "//input[@id='shipping_phone']",
        cpf_cnpj: '//input[@name="customer[document]"]',
        zip_code: "//input[@id='zip-code']",
        city: "//input[@id='city']",
        address: "//input[@id='address']",
        number: "//input[@id='shipping_house_no']",
        neighborhood: "//input[@id='neighbourhood']",
        line2: "//input[@id='complement']",

        // dropdowns (intentionally excluded)
        // country: "//select[@id='shipping_country']",
        // province: "//select[@id='state']"
    };

    for (const [key, selector] of Object.entries(fieldMap)) {
        if (!data[key]) continue; // skip missing fields

        const element = await $(selector);
        await element.waitForExist({ timeout: 10000 });
        await element.scrollIntoView();
        await element.waitForDisplayed({ timeout: 10000 });

        // ✅ Extra safety: only fill INPUT elements
        const tagName = await element.getTagName();
        if (tagName !== 'input') continue;

        await element.clearValue();
        await element.setValue(data[key].toString());
    }
}

  async clickSaveCustomerBtn() {
    const btn = await $("//button[@id='save-customer-details']");
    await btn.waitForDisplayed({ timeout: 50000});
    await btn.click();
  }

  async clickOrderSaveCustomerBtn() {
    const btn = await $("//button[@id='save-order']");
    await btn.waitForDisplayed({ timeout: 50000});
    await btn.click();
  }
  // -------- ORDER FORM --------
  async fillOrderForm(data) {
    await $("//input[@name='note']").setValue(data.notes);
    await $("//input[@id='src']").setValue(data.order_src);
  }
  async selectPaymentMethod() {
    const dropdown = await $("//select[@id='payment_method']");
    await dropdown.waitForDisplayed({ timeout: 3000 });
    await dropdown.click();
    await dropdown.selectByAttribute('value', 'others');

  }
  async selectPaymentMethodCredit() {
    const dropdown = await $("//select[@id='payment_method']");
    await dropdown.waitForDisplayed({ timeout: 3000 });
    await dropdown.click();
    await dropdown.selectByAttribute('value', 'cc');

  }
  async getSelectedPaymentMethod() {
    const selected = await $("//option[normalize-space(.)='Mark as paid']");
    return await selected.getText();
  }
  async clickSaveOrderBtn() {
    const saveBtn = await $("//button[@id='save-order']");
    await saveBtn.waitForDisplayed({ timeout: 5000 });
    await saveBtn.click();
  }
  // -------- SHIPPING --------
  async verifyShippingPopup() {
    const popup = await $("//h5[normalize-space(.)='Add shipping']");
    await popup.waitForDisplayed({ timeout: 5000 });
    await expect(popup).toBeDisplayed();
  }
  async selectFreeShipping() {
    const radio = await $("//input[@id='radio0']");
    await radio.waitForDisplayed({ timeout: 3000 });
    await radio.click();
    await browser.pause(3000);
  }
  async clickSaveShippingBtn() {
    const saveBtn = await $("//button[@id='apply-shipping']");
    await saveBtn.waitForDisplayed({ timeout: 3000 });
    await saveBtn.click();
  }
  async clickCCBtn() {
    const saveBtn = await $("//button[@type='button' and contains(@class,'btn-primary') and @data-bs-dismiss='modal' and normalize-space(text())='Save']");
    await saveBtn.waitForDisplayed({ timeout: 3000 });
    await saveBtn.click();
  }
  async enterDiscount(discount) {
    const discountInput = await $('//input[contains(@placeholder,"0,00")]');
    await discountInput.waitForDisplayed({ timeout: 10000 });
    await discountInput.setValue(discount);
    await browser.pause(3000);
}

  async clickAddDiscountBtn() {
    const saveBtn = await $("//a[@id='add-discount-button']");
    await saveBtn.waitForDisplayed({ timeout: 3000 });
    await saveBtn.scrollIntoView();
    await saveBtn.click();
  }

   async clickFixedAmount() {
    const saveBtn2 = await $('//input[@id="order-discount-by"]');
    await saveBtn2.waitForDisplayed({ timeout: 3000 });
    await saveBtn2.click();
  }
   async clickSaveBtn() {
    const saveBtn = await $("//button[@id='apply-discount']");
    await saveBtn.waitForDisplayed({ timeout: 3000 });
    await saveBtn.click();
  }

async selectCustomer(email) {
    const input = await $('#search-customer');
    await input.waitForDisplayed({ timeout: 10000 });
    await input.clearValue();
    await input.setValue(email);

    const optionXpath =
        `//a[contains(@class,"custom-list-item")]//div[contains(text(),"${email}")]/ancestor::a`;

    await browser.waitUntil(async () => {
        const el = await $(optionXpath);
        return await el.isDisplayed();
    }, {
        timeout: 10000,
        timeoutMsg: 'Customer option not visible'
    });

    // 🔁 Retry-safe click
    await browser.waitUntil(async () => {
        try {
            const el = await $(optionXpath); // RE-FIND
            await el.scrollIntoView();
            await el.click();
            return true;
        } catch (err) {
            if (err.message.includes('stale')) {
                return false; // retry
            }
            throw err;
        }
    }, {
        timeout: 10000,
        timeoutMsg: 'Failed to click customer option due to re-render'
    });
}



  async clickCustomerfield() {
    // Locate and type into the customer input
    const customerInput = await $('//input[@id="search-customer"]');
    await customerInput.click();
  }
  
  async clickProvinceField() {
        const provinceFieldLocator = await $('//select[@id="state"]');
        await $(provinceFieldLocator).click();
        await provinceFieldLocator.selectByAttribute('value', 'SD');

    }
    async selectSindhFromDropdown() {
        const sindhOptionLocator = await $('//select[@id="state"]/option[normalize-space()="Sindh"]');
        await $(sindhOptionLocator).click();
    }
    async enterAddress(address) {
        const addressFieldLocator = await $('//input[@name="shipping_info[address1]"]');
        await $(addressFieldLocator).setValue(address);
    }


    async selectCountry(countryName) {
    const countryDropdown = await $('//select[@name="shipping_info[country]"]');
    await countryDropdown.waitForDisplayed({ timeout: 10000 });
    await countryDropdown.scrollIntoView();
    await countryDropdown.click();
    await countryDropdown.addValue("p");
    await countryDropdown.selectByAttribute('value', 'Pakistan');

    // dropdown option
    // const option = await $(`//option[@value="Pakistan"]`);
    // await option.waitForDisplayed({ timeout: 10000 });
    // await option.click();
}

async switchToStripePaymentFrame() {
    const stripeFrame = await $(
        '//iframe[contains(@title,"Secure card payment")]'
    );
    await stripeFrame.waitForExist({ timeout: 20000 });
    await browser.switchToFrame(stripeFrame);
}




async enterStripeCardDetails() {
    // Switch to Stripe iframe
    const stripeFrame = await $('//iframe[contains(@title,"Secure card payment")]');
    await stripeFrame.waitForExist({ timeout: 10000 });
    await browser.switchToFrame(stripeFrame);

    // Inject a dummy card number (mock input)
    await browser.execute(() => {
        const input = document.querySelector('input[name="cardnumber"]');
        if (input) {
            input.value = '4242424242424242'; // Stripe test card
            input.dispatchEvent(new Event('input', { bubbles: true }));
        }
    });

    // Mock expiry, CVC, ZIP if needed
    await browser.execute(() => {
        const expiry = document.querySelector('input[name="exp-date"]');
        if (expiry) expiry.value = '12/30';
        const cvc = document.querySelector('input[name="cvc"]');
        if (cvc) cvc.value = '123';
        const zip = document.querySelector('input[name="postal"]');
        if (zip) zip.value = '12345';
    });

    // Switch back to main frame
    await browser.switchToParentFrame();
}





async enterExpirydate() {
    await this.switchToStripeFrameContaining(
        'input[data-elements-stable-field-name="cardExpiry"]'
    );

    const expiryInput = await $('input[data-elements-stable-field-name="cardExpiry"]');
    await expiryInput.waitForEnabled({ timeout: 15000 });

    const expiry = '12/30';
    for (const char of expiry) {
        await expiryInput.addValue(char);
        await browser.pause(40);
    }

    await browser.switchToParentFrame();
}



async enterCVC() {
    await this.switchToStripeFrameContaining(
        'input[data-elements-stable-field-name="cardCvc"]'
    );

    const cvcInput = await $('input[data-elements-stable-field-name="cardCvc"]');
    await cvcInput.waitForEnabled({ timeout: 15000 });

    const cvc = '123';
    for (const digit of cvc) {
        await cvcInput.addValue(digit);
        await browser.pause(40);
    }

    await browser.switchToParentFrame();
}
async openAffiliateDropdown() {
    const affiliateInput = await $('//input[@name="affiliate"]');
    await affiliateInput.waitForDisplayed({ timeout: 10000 });
    await affiliateInput.click();
    await browser.pause(3000);
}
async searchAffiliate(name) {
    const affiliateInput = await $('//input[@placeholder="Affiliate name"]');
    await affiliateInput.waitForDisplayed({ timeout: 10000 });
    await affiliateInput.clearValue();
    await affiliateInput.setValue(name);

}
async selectAffiliateFromList() {
    const affiliateOptionXpath =
        '//label[@data-id="652"]';

    await browser.waitUntil(async () => {
        try {
            const option = await $(affiliateOptionXpath);
            await option.scrollIntoView();
            await option.click();
            return true;
        } catch (e) {
            if (e.message.includes('stale')) return false;
            throw e;
        }
    }, {
        timeout: 10000,
        timeoutMsg: 'Unable to select affiliate due to re-render'
    });

    const selectButton = await $('//button[normalize-space()="Select"]');
    await selectButton.waitForClickable({ timeout: 10000 });
    await selectButton.click();
}

}
module.exports = new ManualOrderPage();
