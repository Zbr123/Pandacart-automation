const BasePage = require('./BasePage');

class OrderBumpPage extends BasePage {

    async switchToOrderBumpIframe() {
        console.log("🧭 Switching to Order Bump iframe...");
        const frame = await $('iframe[src*="order-bump"]'); // Adjust the iframe selector
        await frame.waitForExist({ timeout: 60000 });
        await browser.switchFrame(frame);
        console.log("✅ Switched to Order Bump iframe");
    }

    async switchToParent() {
        await browser.switchToParentFrame();
        console.log("🔙 Switched back to main document");
    }

    async clickOrderBumpSidebar() {
        console.log("🧭 Clicking Order Bump sidebar...");
        await this.switchToParent(); // Sidebar might be outside iframe
        const btn = await $("//a[.//span[normalize-space(text())='Order Bump']]");
        await btn.waitForDisplayed({ timeout: 5000 });
        await btn.click();
        console.log("✅ Clicked Order Bump sidebar");
    }

    async verifyOrderBumpScreen() {
        console.log("🧭 Verifying Order Bump screen...");
        await this.switchToParent();
        const heading = await $("//h4[contains(text(),'Order Bump')]");
        await heading.waitForDisplayed({ timeout: 5000 });
        console.log("✅ Order Bump screen verified");
        
    }

    async clickNewOrderBump() {
        console.log("🧭 Clicking New Order Bump button...");
        await this.switchToOrderBumpIframe();
        const btn = await $("//a[contains(@class,'btn-primary') and normalize-space(text())='New order bump']");
        await btn.waitForDisplayed({ timeout: 5000 });
        await btn.click();
        console.log("✅ Clicked New Order Bump");
        await this.switchToParent();
    }

    async verifyRulesScreen() {
        console.log("🧭 Verifying Rules screen...");
        await this.switchToOrderBumpIframe();
        const heading = await $("//h3[normalize-space(text())='Rules']");
        await heading.waitForDisplayed({ timeout: 5000 });
        console.log("✅ Rules screen verified");
        await this.switchToParent();
    }

    async toggleActive() {
        console.log("🧭 Toggling Active checkbox...");
        await this.switchToOrderBumpIframe();
        const checkbox = await $('//input[@type="checkbox" and @name="enable_field_confirmation"]');
        await checkbox.waitForDisplayed({ timeout: 5000 });
        await checkbox.click();
        console.log("✅ Active checkbox toggled");
        await this.switchToParent();
    }

    async enterTitle(value) {
        console.log(`🧭 Entering Order Bump title: ${value}`);
        await this.switchToOrderBumpIframe();
        const input = await $('//input[@class="form-control" and @id="order-bump-title"]');
        await input.waitForDisplayed({ timeout: 5000 });
        await input.setValue(value);
        console.log("✅ Title entered");
        await this.switchToParent();
    }

    async clickSave() {
        console.log("🧭 Clicking Save button...");
        await this.switchToOrderBumpIframe();
        const btn = await $('//button[contains(text(),"Save")]');
        await btn.waitForDisplayed({ timeout: 5000 });
        await btn.click();
        console.log("✅ Save button clicked");
        await this.switchToParent();
        await browser.pause(3000);
    }

    async verifyProductHeading() {
        console.log("🧭 Verifying Products heading...");
        await this.switchToOrderBumpIframe();
        const heading = await $("//h3[normalize-space(text())='Products']");
        await heading.waitForDisplayed({ timeout: 5000 });
        console.log("✅ Products heading verified");
        await this.switchToParent();
    }

    async clickAddRule() {
        console.log("🧭 Clicking Add Rule button...");
        await this.switchToOrderBumpIframe();
        const btn = await $('//button[contains(text(),"Add Rule")]');
        await btn.waitForDisplayed({ timeout: 5000 });
        await btn.click();
        console.log("✅ Add Rule clicked");
        await this.switchToParent();
    }
      
    async clickSaveRule() {
    await this.switchToOrderBumpIframe();
    const btn = await $("//button[.//span[normalize-space(text())='Save rules']]");
    await btn.waitForDisplayed(5000);
    await btn.scrollIntoView();
    await btn.click();
    
}
// async clickSaveRule() {
//     console.log("🧭 Clicking 'Save rules' button...");

//     // Switch to iframe
//     // await this.switchToOrderBumpIframe();

//     // Small pause for animations/DOM to settle
//     await browser.pause(500);

//     const btn = await $('//button[.//span[normalize-space(text())="Save rules"]]');

//     // Ensure button exists, is displayed, and clickable
//     await btn.waitForExist({ timeout: 1000});
//     await btn.waitForDisplayed({ timeout: 10000 });
//     await browser.waitUntil(
//         async () => await btn.isClickable(),
//         {
//             timeout: 10000,
//             timeoutMsg: "❌ Save rules button is not clickable"
//         }
//     );

//     // Scroll exactly to the center
//     await btn.scrollIntoView({ block: 'center', inline: 'center' });
//     await browser.pause(300); // wait a tiny bit

//     // Try normal click first
//     try {
//         await btn.click();
//     } catch (err) {
//         console.warn("⚠️ Normal click failed, using JS click");
//         await browser.execute(el => el.click(), btn);
//     }

//     console.log("✅ 'Save rules' clicked");
//     await this.switchToParent();
// }


   async clickSearchProduct() {
    console.log("🧭 Clicking on the Search Product input...");

    // Switch to the Order Bump iframe
    // await this.switchToOrderBumpIframe();

    const searchInput = await $('//input[@placeholder="Start by typing three letters to search for products."]');

    // Wait until displayed
    await searchInput.waitForDisplayed({ timeout: 10000 });

    // Scroll into view and give UI a moment to settle
    await searchInput.scrollIntoView({ block: 'center' });
    await browser.pause(300);

    // Wait until clickable
    await searchInput.waitForClickable({ timeout: 10000 });

    // Try normal click first, fallback to JS click if intercepted
    try {
        await searchInput.click();
    } catch (err) {
        console.warn("⚠️ Normal click failed, using JS click fallback");
        await browser.execute(el => el.click(), searchInput);
    }

    // Switch back to parent frame
    await this.switchToParent();
}

    async verifyAddProductHeading() {
        console.log("🧭 Verifying Add Product heading...");
        await this.switchToOrderBumpIframe();
        const heading = await $("//h5[@id='product-selector-modal___BV_modal_title_' and contains(@class,'modal-title')]");
        await heading.waitForDisplayed();
        await heading.scrollIntoView(60000);
        console.log("✅ Add Product heading verified");
        await this.switchToParent();
    }
             
    async enterProductSearch(name) {
        console.log(`🧭 Entering product search: ${name}`);
        await this.switchToOrderBumpIframe();
        const input = await $('//input[@placeholder="Type a product title"]');
        await input.waitForDisplayed({ timeout: 5000 });
        await input.setValue(name);
        await input.scrollIntoView();
        console.log("✅ Product name entered");
        await this.switchToParent();
    }

    async selectProductFromDropdown() {
        console.log("🧭 Selecting product from dropdown...");
        await this.switchToOrderBumpIframe();
        const option = await $('//label[contains(text(),"DROP SHIRT")]'); // Update text dynamically if needed
        await option.waitForDisplayed({ timeout: 50000 });
        await option.click();
        console.log("✅ Product selected from dropdown");
        await this.switchToParent();
    }

    async clickSelectProduct() {
        console.log("🧭 Clicking Select Product button...");
        await this.switchToOrderBumpIframe();
        const btn = await $('//button[@class="btn float-right btn-primary"]');
        await btn.waitForDisplayed({ timeout: 5000 });
        await btn.click();
        console.log("✅ Select Product clicked");
        await this.switchToParent();
    }
    async clickSearchProductRule() {
        
        
        // await this.switchToOrderBumpIframe();
        const btn = await $("//input[contains(@class,'form-control') and contains(@class,'border-0') and contains(@class,'form-input-custom')]");
        await btn.waitForDisplayed({ timeout: 5000 });
        await btn.click();
        await this.switchToParent();
    }

    async clickViewProductSave() {
    console.log("🧭 Clicking on View Product Save button...");

    // Make sure we are in the correct iframe
    await this.switchToOrderBumpIframe();

    const saveBtn = await $('//button[@data-v-6f9f11e6 and contains(@class,"btn-primary")]');

    // Wait until displayed
    await saveBtn.waitForDisplayed({ timeout: 10000 });

    // Scroll to the button and pause a bit
    await saveBtn.scrollIntoView({ block: 'center' });
    await browser.pause(300);

    // Wait until clickable
    await saveBtn.waitForClickable({ timeout: 10000 });

    // Try normal click, fallback to JS click
    try {
        await saveBtn.click();
    } catch (err) {
        console.warn("⚠️ Normal click failed, using JS click fallback");
        await browser.execute(el => el.click(), saveBtn);
    }

    // Switch back to parent frame
    await this.switchToParent();
}

   async finalSaveOrderBump() {
    console.log("🧭 Clicking on the Order Bump Save button...");

    // Switch to iframe if inside one
    await this.switchToOrderBumpIframe();

    const btn = await $('//button[@data-v-40e1c488 and contains(@class,"btn-primary")]');

    // Wait until displayed and scroll into view
    await btn.waitForDisplayed({ timeout: 10000 });
    await btn.scrollIntoView({ block: 'center', inline: 'center' });

    // Wait until clickable
    await browser.waitUntil(
        async () => await btn.isClickable(),
        {
            timeout: 5000,
            timeoutMsg: '❌ Order Bump Save button is not clickable'
        }
    );

    // Small pause to let any overlay disappear
    await browser.pause(500);

    await btn.click();

    // Switch back to parent frame if needed
    await this.switchToParent();
}

    async clickBackButton() {
        console.log("🧭 Clicking Back button...");
        await this.switchToOrderBumpIframe();
        const btn = await $('//a[@class="text-blue-500 text-sm"]');
        await btn.waitForDisplayed({ timeout: 50000 });
        await btn.scrollIntoView();
        await btn.click();
        console.log("✅ Back button clicked");
        await this.switchToParent();
    }

    
     async clickFixedCheckbox() {
         await this.switchToOrderBumpIframe();
        const btn = await $("//span[@data-v-6f9f11e6 and text()='Fixed']");
        await expect(btn).toBeDisplayed(50000);
    

        await browser.waitUntil(
        async () => await btn.isClickable(),
        {
            timeout: 50000,
            timeoutMsg: '❌ Order Bump Save button is not clickable'
        }
    );
     await btn.click();
        await this.switchToParent();
    }
    
   async selectequalRule() {
    await this.switchToOrderBumpIframe();

    const actionDropdown1 = await $('//span[@class="multiselect__placeholder" and normalize-space()="Select rule"]');

    // Click to open the dropdown
    await actionDropdown1.waitForDisplayed({ timeout: 10000 });
    await actionDropdown1.click();


    // Locate the "Equal to" option in the multiselect dropdown
    const equalToOption = await $("//li[contains(@class,'multiselect__element')]//span[normalize-space(text())='Equal to']");

    // Wait until displayed and clickable
    await equalToOption.waitForDisplayed({ timeout: 10000 });
    await equalToOption.scrollIntoView({ block: 'center' });
    await browser.waitUntil(
        async () => await equalToOption.isClickable(),
        {
            timeout: 5000,
            timeoutMsg: '❌ "Equal to" option is not clickable'
        }
    );

    // Click the option
    await equalToOption.click();
    console.log("✅ 'Equal to' option clicked");
}
   async selectnotequalRule() {
    await this.switchToOrderBumpIframe();

    const actionDropdown1 = await $('//span[@class="multiselect__placeholder" and normalize-space()="Select rule"]');

    // Click to open the dropdown
    await actionDropdown1.waitForDisplayed({ timeout: 10000 });
    await actionDropdown1.click();


    // Locate the "Equal to" option in the multiselect dropdown
    const equalToOption = await $("//span[contains(text(),'Not equal to')]");

    // Wait until displayed and clickable
    await equalToOption.waitForDisplayed({ timeout: 10000 });
    await equalToOption.scrollIntoView({ block: 'center' });
    await browser.waitUntil(
        async () => await equalToOption.isClickable(),
        {
            timeout: 5000,
            timeoutMsg: '❌ "Equal to" option is not clickable'
        }
    );

    // Click the option
    await equalToOption.click();
    console.log("✅ 'Equal to' option clicked");
}
 async selectgreaterthanRule() {
    await this.switchToOrderBumpIframe();

    const actionDropdown1 = await $('//span[@class="multiselect__placeholder" and normalize-space()="Select rule"]');

    // Click to open the dropdown
    await actionDropdown1.waitForDisplayed({ timeout: 10000 });
    await actionDropdown1.click();


    // Locate the "Equal to" option in the multiselect dropdown
    const equalToOption = await $("//span[contains(text(),'Greater than')]");

    // Wait until displayed and clickable
    await equalToOption.waitForDisplayed({ timeout: 10000 });
    await equalToOption.scrollIntoView({ block: 'center' });
    await browser.waitUntil(
        async () => await equalToOption.isClickable(),
        {
            timeout: 5000,
            timeoutMsg: '❌ "Equal to" option is not clickable'
        }
    );

    // Click the option
    await equalToOption.click();
    console.log("✅ 'Equal to' option clicked");
}

 async selectlessthanRule() {
    await this.switchToOrderBumpIframe();

    const actionDropdown1 = await $('//span[@class="multiselect__placeholder" and normalize-space()="Select rule"]');

    // Click to open the dropdown
    await actionDropdown1.waitForDisplayed({ timeout: 10000 });
    await actionDropdown1.click();


    // Locate the "Equal to" option in the multiselect dropdown
    const equalToOption = await $("//span[contains(text(),'Less than')]");

    // Wait until displayed and clickable
    await equalToOption.waitForDisplayed({ timeout: 10000 });
    await equalToOption.scrollIntoView({ block: 'center' });
    await browser.waitUntil(
        async () => await equalToOption.isClickable(),
        {
            timeout: 5000,
            timeoutMsg: '❌ "Equal to" option is not clickable'
        }
    );

    // Click the option
    await equalToOption.click();
    console.log("✅ 'Equal to' option clicked");
}
 async selectGreaterorEqualRule() {
    await this.switchToOrderBumpIframe();

    const actionDropdown1 = await $('//span[@class="multiselect__placeholder" and normalize-space()="Select rule"]');

    // Click to open the dropdown
    await actionDropdown1.waitForDisplayed({ timeout: 10000 });
    await actionDropdown1.click();


    // Locate the "Equal to" option in the multiselect dropdown
    const equalToOption = await $("//span[contains(text(),'Greater or equal to')]");

    // Wait until displayed and clickable
    await equalToOption.waitForDisplayed({ timeout: 10000 });
    await equalToOption.scrollIntoView({ block: 'center' });
    await browser.waitUntil(
        async () => await equalToOption.isClickable(),
        {
            timeout: 5000,
            timeoutMsg: '❌ "Equal to" option is not clickable'
        }
    );

    // Click the option
    await equalToOption.click();
    console.log("✅ 'Equal to' option clicked");
}

async selectLessorEqualRule() {
    await this.switchToOrderBumpIframe();

    const actionDropdown1 = await $('//span[@class="multiselect__placeholder" and normalize-space()="Select rule"]');

    // Click to open the dropdown
    await actionDropdown1.waitForDisplayed({ timeout: 10000 });
    await actionDropdown1.click();


    // Locate the "Equal to" option in the multiselect dropdown
    const equalToOption = await $("//span[contains(text(),'Less or equal to')]");

    // Wait until displayed and clickable
    await equalToOption.waitForDisplayed({ timeout: 10000 });
    await equalToOption.scrollIntoView({ block: 'center' });
    await browser.waitUntil(
        async () => await equalToOption.isClickable(),
        {
            timeout: 5000,
            timeoutMsg: '❌ "Equal to" option is not clickable'
        }
    );

    // Click the option
    await equalToOption.click();
    console.log("✅ 'Equal to' option clicked");
}
async selectEqualtoallRule() {
    await this.switchToOrderBumpIframe();

    const actionDropdown1 = await $('//span[@class="multiselect__placeholder" and normalize-space()="Select rule"]');

    // Click to open the dropdown
    await actionDropdown1.waitForDisplayed({ timeout: 10000 });
    await actionDropdown1.click();


    // Locate the "Equal to" option in the multiselect dropdown
    const equalToOption = await $("//span[contains(text(),'Equal to (all)')]");

    // Wait until displayed and clickable
    await equalToOption.waitForDisplayed({ timeout: 10000 });
    await equalToOption.scrollIntoView({ block: 'center' });
    await browser.waitUntil(
        async () => await equalToOption.isClickable(),
        {
            timeout: 5000,
            timeoutMsg: '❌ "Equal to" option is not clickable'
        }
    );

    // Click the option
    await equalToOption.click();
    console.log("✅ 'Equal to' option clicked");
}
async selectNotEqualtoallRule() {
    await this.switchToOrderBumpIframe();

    const actionDropdown1 = await $('//span[@class="multiselect__placeholder" and normalize-space()="Select rule"]');

    // Click to open the dropdown
    await actionDropdown1.waitForDisplayed({ timeout: 10000 });
    await actionDropdown1.click();


    // Locate the "Equal to" option in the multiselect dropdown
    const equalToOption = await $("//span[contains(text(),'Not equal to (all)')]");

    // Wait until displayed and clickable
    await equalToOption.waitForDisplayed({ timeout: 10000 });
    await equalToOption.scrollIntoView({ block: 'center' });
    await browser.waitUntil(
        async () => await equalToOption.isClickable(),
        {
            timeout: 5000,
            timeoutMsg: '❌ "Equal to" option is not clickable'
        }
    );

    // Click the option
    await equalToOption.click();
    console.log("✅ 'Equal to' option clicked");
}
async selectEqualtoanyRule() {
    await this.switchToOrderBumpIframe();

    const actionDropdown1 = await $('//span[@class="multiselect__placeholder" and normalize-space()="Select rule"]');

    // Click to open the dropdown
    await actionDropdown1.waitForDisplayed({ timeout: 10000 });
    await actionDropdown1.click();


    // Locate the "Equal to" option in the multiselect dropdown
    const equalToOption = await $("//span[contains(text(),'Equal to (any)')]");

    // Wait until displayed and clickable
    await equalToOption.waitForDisplayed({ timeout: 10000 });
    await equalToOption.scrollIntoView({ block: 'center' });
    await browser.waitUntil(
        async () => await equalToOption.isClickable(),
        {
            timeout: 5000,
            timeoutMsg: '❌ "Equal to" option is not clickable'
        }
    );

    // Click the option
    await equalToOption.click();
    console.log("✅ 'Equal to' option clicked");
}
async selectNotEqualtoanyRule() {
    await this.switchToOrderBumpIframe();

    const actionDropdown1 = await $('//span[@class="multiselect__placeholder" and normalize-space()="Select rule"]');

    // Click to open the dropdown
    await actionDropdown1.waitForDisplayed({ timeout: 10000 });
    await actionDropdown1.click();


    // Locate the "Equal to" option in the multiselect dropdown
    const equalToOption = await $("//span[contains(text(),'Not equal to (any)')]");

    // Wait until displayed and clickable
    await equalToOption.waitForDisplayed({ timeout: 10000 });
    await equalToOption.scrollIntoView({ block: 'center' });
    await browser.waitUntil(
        async () => await equalToOption.isClickable(),
        {
            timeout: 5000,
            timeoutMsg: '❌ "Equal to" option is not clickable'
        }
    );

    // Click the option
    await equalToOption.click();
    console.log("✅ 'Equal to' option clicked");
}
async selectBetweenValuesRule() {
    await this.switchToOrderBumpIframe();

    const actionDropdown1 = await $('//span[@class="multiselect__placeholder" and normalize-space()="Select rule"]');

    // Click to open the dropdown
    await actionDropdown1.waitForDisplayed({ timeout: 10000 });
    await actionDropdown1.click();


    // Locate the "Equal to" option in the multiselect dropdown
    const equalToOption = await $("//span[contains(text(),'Between values')]");

    // Wait until displayed and clickable
    await equalToOption.waitForDisplayed({ timeout: 10000 });
    await equalToOption.scrollIntoView({ block: 'center' });
    await browser.waitUntil(
        async () => await equalToOption.isClickable(),
        {
            timeout: 5000,
            timeoutMsg: '❌ "Equal to" option is not clickable'
        }
    );

    // Click the option
    await equalToOption.click();
    console.log("✅ 'Equal to' option clicked");
}

async selectActionTotalinCart() {
    console.log("🧭 Selecting 'Total in cart' from Action dropdown...");
    await this.switchToOrderBumpIframe();

    // Locate the Action dropdown input
    const actionDropdown = await $("//span[@class='multiselect__single' and normalize-space()='Always available']");

    // Click to open the dropdown
    await actionDropdown.waitForDisplayed({ timeout: 10000 });
    await actionDropdown.click();

    // Wait for the dropdown options to appear
    const option = await $("//span[@class='multiselect__option' and span[normalize-space()='Total in cart']]");
    await option.waitForDisplayed({ timeout: 10000 });

    // Scroll into view and click
    await option.scrollIntoView({ block: 'center' });
    await browser.waitUntil(
        async () => await option.isClickable(),
        {
            timeout: 5000,
            timeoutMsg: '❌ "Total in cart" option is not clickable'
        }
    );
    await option.click();
    

    await this.switchToParent();
}
async selectActionCartItems() {
    console.log("🧭 Selecting 'Total in cart' from Action dropdown...");
    await this.switchToOrderBumpIframe();

    // Locate the Action dropdown input
    const actionDropdown = await $("//span[@class='multiselect__single' and normalize-space()='Always available']");

    // Click to open the dropdown
    await actionDropdown.waitForDisplayed({ timeout: 10000 });
    await actionDropdown.click();

    // Wait for the dropdown options to appear
    const optioncartitem = await $("//li[contains(@class,'multiselect__element')]//span[normalize-space()='Cart items']");
    await optioncartitem.waitForDisplayed({ timeout: 10000 });

    // Scroll into view and click
    await optioncartitem.scrollIntoView({ block: 'center' });
    await browser.waitUntil(
        async () => await optioncartitem.isClickable(),
        {
            timeout: 5000,
            timeoutMsg: '❌ "Total in cart" option is not clickable'
        }
    );
    await optioncartitem.click();
    await this.switchToParent();
}

async enterValue(value = '5000') {
        const input = await $("//input[@class='form-control placeholder-black']");
        await expect(input).toBeDisplayed();
        await input.setValue(value);
        

        const valueLabel = $('//label[normalize-space(text())="Value"]');
        await valueLabel.click();
        await browser.pause(10000);
    }
      async enterDiscountValue(value = '50') { 
        await this.switchToOrderBumpIframe(); 
        const input = await $("//input[@type='number' and @class='border border-gray-400 rounded-sm w-20']"); 
        await expect(input).toBeDisplayed(); 
        await input.setValue(value); 
        await browser.pause(3000);
         await this.switchToParent(); }

         async enterMinValue(value = '500') { 
        
        const input = await $("//span[@id='basic-addon1' and normalize-space()='$']/following-sibling::input"); 
        await expect(input).toBeDisplayed(); 
        await input.setValue(value); 
        await browser.pause(3000);
      }

         async enterMaxValue(value = '3000') { 
       
        const input = await $("//span[@id='basic-addon2' and normalize-space()='$']/following-sibling::input"); 
        await expect(input).toBeDisplayed(); 
        await input.setValue(value); 
        await browser.pause(3000);
        }


    }


module.exports = new OrderBumpPage();
