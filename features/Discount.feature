# Feature: Discount Creation
# Scenario: Create a Order Discount(Percentage)
#   Given I am on the login page
#   When I enter "saad@cartpanda.com" in email field
#   And I enter "Vista123+@" in password field
#   And I click on Signin button
#   Then I should see Select store Page
#   When I click on "msaad" button
#   Then I should see Dashboard Page
#   And I click on Discount btn in sidebar
#   And I click on discounts from the dropdown
#   Then I should see Discounts heading
#   And I click on Create discount button
#   And I select Order from the dropdown 
#   Then I should see Create Discount heading
#   And I enter "DISCOUNTTEST" in the Discount name input box
#   Then I click on discount value and enter discount 
#   Then I click on Set end date checkbox
#   And I enter the end date 
#   And I click on SaveDiscount button
  
Feature: Discount Creation
# Scenario: Create a Order Discount for Specific Product 
#   Given I am on the login page
#   When I enter "saad@cartpanda.com" in email field
#   And I enter "Vista123+@" in password field
#   And I click on Signin button
#   Then I should see Select store Page
#   When I click on "msaad" button
#   Then I should see Dashboard Page
#   And I click on Discount btn in sidebar
#   And I click on discounts from the dropdown
#   Then I should see Discounts heading
#   And I click on Create discount button
#   And I select Order from the dropdown 
#   Then I should see Create Discount heading
#   And I enter "DISCOUNTTEST(specificproduct)" in the Discount name input box
#   Then I click on discount value and enter discount 
#   And I click on Specific product checkbox
#   And I enter and select "SHORTS" from the dropdown
#   Then I click on Set end date checkbox
#   And I enter the end date 
#   And I click on SaveDiscount button
#   Then I click on back button




# Scenario: Create a Order Discount(Fixed Amount)
#   Given I am on the login page
#   When I enter "saad@cartpanda.com" in email field
#   And I enter "Vista123+@" in password field
#   And I click on Signin button
#   Then I should see Select store Page
#   When I click on "msaad" button
#   Then I should see Dashboard Page
#   And I click on Discount btn in sidebar
#   And I click on discounts from the dropdown
#   Then I should see Discounts heading
#   And I click on Create discount button
#   And I select Order from the dropdown 
#   Then I should see Create Discount heading
#   And I enter "DISCOUNTTEST(ammount)" in the Discount name input box
#   Then I click on Discount Type and select fixed amount from the dropdown
#   Then I click on discount value and enter discount 
#   Then I click on Set end date checkbox
#   And I enter the end date 
#   And I click on SaveDiscount button
#   Then I click on back button



#   Scenario: Create a Order Discount(Buy X get Y)
#   Given I am on the login page
#   When I enter "saad@cartpanda.com" in email field
#   And I enter "Vista123+@" in password field
#   And I click on Signin button
#   Then I should see Select store Page
#   When I click on "msaad" button
#   Then I should see Dashboard Page
#   And I click on Discount btn in sidebar
#   And I click on discounts from the dropdown
#   Then I should see Discounts heading
#   And I click on Create discount button
#   And I select Order from the dropdown 
#   Then I should see Create Discount heading
#   And I enter "DISCOUNTTEST(Buy1Get1)" in the Discount name input box
#   Then I click on Discount Type and select buy x get y from the dropdown
#   Then I click on Quantity and enter it in the Customer buys section
#   And I click on search product
#   And I enter and select "DROP SHIRT" from the dropdown in the Customer buys section
#   Then I click on Quantity and enter it in the Customer gets section
#   And I enter and select "SHORTS" from the dropdown in the Customer gets section
#   Then I click on Percentage 
#   And I click and enter "20" in the percentage input box
#   Then I click on Set end date checkbox
#   And I enter the end date 
#   And I click on SaveDiscount button
#   Then I click on back button



# Scenario: Create a Order Discount(Free Shipping)
#   Given I am on the login page
#   When I enter "saad@cartpanda.com" in email field
#   And I enter "Vista123+@" in password field
#   And I click on Signin button
#   Then I should see Select store Page
#   When I click on "msaad" button
#   Then I should see Dashboard Page
#   And I click on Discount btn in sidebar
#   And I click on discounts from the dropdown
#   Then I should see Discounts heading
#   And I click on Create discount button
#   And I select Order from the dropdown 
#   Then I should see Create Discount heading
#   And I enter "DISCOUNTTEST(FreeShipping)" in the Discount name input box
#   Then I click on Discount Type and select Free Shipping from the dropdown
#   Then I click on discount value and enter discount 
#   Then I click on Set end date checkbox
#   And I enter the end date 
#   And I click on SaveDiscount button
#   Then I click on back button



# Scenario:Create a Product Discount(Percentage with specific product)
#   Given I am on the login page
#   When I enter "saad@cartpanda.com" in email field
#   And I enter "Vista123+@" in password field
#   And I click on Signin button
#   Then I should see Select store Page
#   When I click on "msaad" button
#   Then I should see Dashboard Page
#   And I click on Discount btn in sidebar
#   And I click on discounts from the dropdown
#   Then I should see Discounts heading
#   And I click on Create discount button
#   And I select Product from the dropdown 
#   Then I should see Create Discount heading
#   And I enter "DISCOUNTTEST(product)" in the Discount name input box
#   Then I click on discount value and enter discount 
#   And I click on Specific product checkbox
#   And I enter and select "SHORTS" from the dropdown
#   Then I click on Set end date checkbox
#   And I enter the end date 
#   And I click on SaveDiscount button
#   Then I click on back button



#   Scenario:Create a Product Discount(Fixed Amount with specific product)
#   Given I am on the login page
#   When I enter "saad@cartpanda.com" in email field
#   And I enter "Vista123+@" in password field
#   And I click on Signin button
#   Then I should see Select store Page
#   When I click on "msaad" button
#   Then I should see Dashboard Page
#   And I click on Discount btn in sidebar
#   And I click on discounts from the dropdown
#   Then I should see Discounts heading
#   And I click on Create discount button
#   And I select Product from the dropdown 
#   Then I should see Create Discount heading
#   And I enter "DISCOUNTTEST(Productwithfixedamount)" in the Discount name input box
#   Then I click on Discount Type and select fixed amount from the dropdown
#   Then I click on discount value and enter discount 
#   And I click on Specific product checkbox
#   And I enter and select "SHORTS" from the dropdown
#   Then I click on Set end date checkbox
#   And I enter the end date 
#   And I click on SaveDiscount button
#   Then I click on back button



# Scenario:Create a Automatic Order Discount(Percentage)
#   Given I am on the login page
#   When I enter "saad@cartpanda.com" in email field
#   And I enter "Vista123+@" in password field
#   And I click on Signin button
#   Then I should see Select store Page
#   When I click on "msaad" button
#   Then I should see Dashboard Page
#   And I click on Discount btn in sidebar
#   And I click on discounts from the dropdown
#   Then I should see Discounts heading
#   And I click on automatic discounts 
#   Then I click on Create discount button
#   And I select Order from the dropdown 
#   And I enter "DISCOUNTTEST(AUTOMATICORDER)" in the Discount name input box
#   Then I click on auto discount value and enter discount 
#   Then I click on Set end date checkbox
#   And I enter the end date 
#   And I click on SaveDiscount button
# Then I click on back button
  


  Scenario: Create a Automatic Order Discount(Fixed Amount)
  Given I am on the login page
  When I enter "saad@cartpanda.com" in email field
  And I enter "Vista123+@" in password field
  And I click on Signin button
  Then I should see Select store Page
  When I click on "msaad" button
  Then I should see Dashboard Page
  And I click on Discount btn in sidebar
  And I click on discounts from the dropdown
  Then I should see Discounts heading
  And I click on automatic discounts 
  And I click on Create discount button
  And I select Order from the dropdown 
  And I enter "DISCOUNTTEST(AUTOMATICORDER:fixedammount)" in the Discount name input box
  Then I click on Discount Type and select fixed amount from the dropdown
  Then I click on discount value and enter discount
  Then I click on minimum value and enter value
  Then I click on Set end date checkbox
  And I enter the end date 
  And I click on SaveDiscount button
  Then I click on back button



  Scenario: Create a Automatic Order Discount(Buy X get Y)
  Given I am on the login page
  When I enter "saad@cartpanda.com" in email field
  And I enter "Vista123+@" in password field
  And I click on Signin button
  Then I should see Select store Page
  When I click on "msaad" button
  Then I should see Dashboard Page
  And I click on Discount btn in sidebar
  And I click on discounts from the dropdown
  Then I should see Discounts heading
  And I click on automatic discounts 
  And I click on Create discount button
  And I select Order from the dropdown 
  And I enter "AUTOMATICORDERDISCOUNTTEST(Buy1Get1)" in the Discount name input box
  Then I click on Discount Type and select buy x get y from the dropdown
  Then I click on Quantity and enter it in the Customer buys section
  And I click on search product
  And I enter and select "DROP SHIRT" from the dropdown in the Customer buys section
  Then I click on Quantity and enter it in the Customer gets section
  And I enter and select "SHORTS" from the dropdown in the Customer gets section
  Then I click on Percentage 
  And I click and enter "20" in the percentage input box
  Then I click on Set end date checkbox
  And I enter the end date 
  And I click on SaveDiscount button
  Then I click on back button


  Scenario:Create a Automatic Product Discount(Percentage)
  Given I am on the login page
  When I enter "saad@cartpanda.com" in email field
  And I enter "Vista123+@" in password field
  And I click on Signin button
  Then I should see Select store Page
  When I click on "msaad" button
  Then I should see Dashboard Page
  And I click on Discount btn in sidebar
  And I click on discounts from the dropdown
  Then I should see Discounts heading
  And I click on automatic discounts 
  Then I click on Create discount button
  And I select Product from the dropdown 
  And I enter "DISCOUNTTEST(AUTOMATICPRODUCT)" in the Discount name input box
  Then I click on auto discount value and enter discount 
  And I click on Specific product checkbox
  And I enter and select "SHORTS" from the dropdown
  Then I click on minimum value and enter value
  Then I click on Set end date checkbox
  And I enter the end date 
  And I click on SaveDiscount button
  Then I click on back button



 Scenario: Create a Automatic Product Discount(Fixed Amount)
  Given I am on the login page
  When I enter "saad@cartpanda.com" in email field
  And I enter "Vista123+@" in password field
  And I click on Signin button
  Then I should see Select store Page
  When I click on "msaad" button
  Then I should see Dashboard Page
  And I click on Discount btn in sidebar
  And I click on discounts from the dropdown
  Then I should see Discounts heading
  And I click on automatic discounts 
  And I click on Create discount button
  And I select Product from the dropdown 
  And I enter "DISCOUNTTEST(AUTOMATICPRODUCT:fixedammount)" in the Discount name input box
  Then I click on Discount Type and select fixed amount from the dropdown
  Then I click on discount value and enter discount
  And I click on Specific product checkbox
  And I enter and select "SHORTS" from the dropdown
  Then I click on minimum value and enter value
  Then I click on Set end date checkbox
  And I enter the end date 
  And I click on SaveDiscount button
  Then I click on back button