const path = require('path');
const fs = require('fs');

const BasePage = require('./BasePage');
class KitsPage extends BasePage{

    async clickOnKitsFromDropdown() {
        const kitsDropdown = await $("//span[normalize-space(text())='Kits']");
        await kitsDropdown.waitForClickable({ timeout: 10000 });
        await kitsDropdown.click();
    }

    async clickOnAddKitsButton() {
        const addButton = await $('//button[contains(text(), "Add kit") and @type="button"]');
        await addButton.waitForClickable({ timeout: 10000 });
        await addButton.click();
    }

    async enterKitsName(kitsName) {
        const nameInput = await $('//input[@name="title"]');
        await nameInput.waitForDisplayed({ timeout: 10000 });
        await nameInput.clearValue();
        await nameInput.setValue(kitsName);
    }

    async searchProduct() {



        const searchInput = await $('//input[@placeholder="Search product"]');
        await searchInput.waitForDisplayed({ timeout: 10000 });
        await searchInput.click();
        await browser.pause(2000);

        
    }
     async enterProductname(productName) {
        const searchInput = await $('//input[@placeholder="Search for a product or a sku"]');
        await searchInput.waitForDisplayed({ timeout: 10000 });
        await searchInput.setValue(productName);

        // small pause for dropdown to populate
        await browser.pause(1000);
    }

    async selectProductFromDropdown() {
        const productOption = await $('//td[@class="js_title align-middle"]');
        await productOption.waitForDisplayed({ timeout: 10000 });
        await productOption.click();
    }

    async uploadKitsImage() {
        // 1. Resolve image path from project root
        const imagePath = path.resolve(
            process.cwd(),
            'features/imageupload/GIFTCARD.jpg'
        );
    
        // 2. Read image as base64 (Node side)
        const imageBuffer = fs.readFileSync(imagePath);
        const base64Image = imageBuffer.toString('base64');
    
        // 3. Execute inside browser to create REAL File & inject into Dropzone
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
                { type: 'image/jpg' }
            );
    
            const dropzoneElement = document.querySelector('#drop-zone');
            const dropzone = dropzoneElement.dropzone;
    
            dropzone.addFile(file);
    
            done();
        }, base64Image);
    
        // 4. Give Dropzone time to render preview & upload
        await browser.pause(20000);
    }

    async clickSaveButton() {
        const saveButton = await $('//button[@type="button" and contains(@class,"btn-primary") and normalize-space(text())="Save kit"]');
        await saveButton.waitForClickable({ timeout: 10000 });
        await saveButton.scrollIntoView();  
        await saveButton.click();
        await browser.pause(3000);
    }



     async clickSelectButton() {
        const saveButton = await $('//button[@class="btn btn-primary" and contains(@class,"btn-primary") and normalize-space(text())="Select"]');
        await saveButton.waitForClickable({ timeout: 10000 });
        await saveButton.click();
    }

      
    async clickProductDiscountCheckbox() {
        const checkbox = await $('//input[@type="radio" and @value="sku-discount"]');
        await checkbox.waitForClickable({ timeout: 10000 });
        await checkbox.click();
    }
     async clickCustomizedCheckbox(productName) {
    // Locator scoped to the product name
    const customizedRadio = await $(
        `//*[normalize-space()="${productName}"]/ancestor::div[.//input[@type="radio" and @value="custom"]][1]//input[@type="radio" and @value="custom"]`
    );

    await customizedRadio.scrollIntoView();
    await customizedRadio.waitForClickable({ timeout: 10000 });
    await customizedRadio.click();
}
    
     async clickAddproducts() {
        const checkbox = await $("//button[contains(@class,'btn-falcon-default') and normalize-space(text())='+ Add product']");
        await checkbox.waitForClickable({ timeout: 10000 });
        await checkbox.click();
    }

    async enterDiscountAmount(discount) {
    // XPath locator for the discount input field
    const discountInput = await $('//div[@class="input-group" and span[text()="%"]]/input');
    await discountInput.waitForDisplayed({ timeout: 10000 });

    // Set the value as string
    await discountInput.setValue(discount.toString());
}

  async enterCustomizedAmount(productName, discount) {
  // scope the custom-price input to the product card that contains the product name
  const discountInput = await $(
    `xpath=//*[normalize-space()="${productName}"]
      /ancestor::*[.//input[@id="custom-price"]][1]
      //input[@id="custom-price"]`
  );

  await discountInput.scrollIntoView();
  await discountInput.waitForDisplayed({ timeout: 10000 });
  await discountInput.waitForEnabled({ timeout: 10000 }); // important after selecting "Customized"
  await discountInput.clearValue();
  await discountInput.setValue(String(discount));
}

}

module.exports = new KitsPage();
