const BasePage = require('./BasePage');

class CollectionPage extends BasePage {

  // Click on "Collections" from sidebar
  async clickCollections() {
    const collectionsLink = await $("//a[.//span[text()='Collections']]");
    await collectionsLink.waitForDisplayed({ timeout: 10000 });
    await collectionsLink.click();
  }

  // Verify the "Collections" heading is visible
  async verifyCollectionHeading() {
    const heading = await $("//h4[normalize-space(text())='Collections']");
    await heading.waitForDisplayed({ timeout: 1000 });
    await expect(heading).toBeDisplayed();
  }

  // Click the "Add collection" button
  async clickAddCollectionOption() {
    const addBtn = await $("//button[text()='Add collection']");
    await addBtn.waitForDisplayed({ timeout: 1000});
    await addBtn.click();
  }

  // Fill fields in the collection form
  async fillCollectionField(field, value) {
    const fieldMapping = {
      title: '//input[@name="title"]',

    };
  

    const selector = fieldMapping[field.trim().toLowerCase()];
    if (!selector) {
      throw new Error(`Unknown collection field: ${field}`);
    }

    const element = await $(selector);
    await element.waitForDisplayed({ timeout: 1000 });

    if (field === 'collection_type') {
      await element.selectByVisibleText(value);
    } else {
      await element.clearValue();
      for (const char of value) {
        await element.addValue(char);
        await browser.pause(100);
      }
    }
  }
  // click "Click on the smarth collection button"
   async clickonSmarthCollectionOption() {
    const smartBtn = await $('//input[@id="collection_type_smart"]');
    await smartBtn.waitForClickable({ timeout: 1000 });
    await smartBtn.click();
  }

  // Click "Save Collection" button
  async clickSaveCollection() {
    const saveBtn = await $("//button[@type='submit' and contains(@class, 'js_save_collection')]");
    await saveBtn.waitForClickable({ timeout: 1000 });
    await saveBtn.click();
  }

  // Click "Edit collection" from sidebar
  async clickEditCollectionSidebar() {
    const editBtn = await $("//a[@class='back-button']"); // Adjust if exact text differs
    await editBtn.waitForClickable({ timeout: 1000 });
    await editBtn.click();
  }

  // Verify "All Collections" heading is shown
  async verifyAllCollectionsVisible() {
    const allCollectionsHeading = await $("//h4[normalize-space(text())='Collections']");
    await allCollectionsHeading.waitForDisplayed({ timeout: 1000});
    await expect(allCollectionsHeading).toBeDisplayed();
  }
  // click "Click on the smarth collection button"

   async clickonManualCollectionOption() {
    const manualBtn = await $("//input[@id='collection_type_manual']");
    await manualBtn.waitForClickable({ timeout: 1000 });
    await manualBtn.click();
  }



}

module.exports = CollectionPage;
