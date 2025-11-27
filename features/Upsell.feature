Feature: Upsell Offer Creation
# Scenario: Create a new Upsell offer successfully
#   Given I am on the login page
#   When I enter "saad@cartpanda.com" in email field
#   And I enter "Vista123+@" in password field
#   And I click on Signin button
#   Then I should see Select store Page
#   When I click on "msaad" button
#   Then I should see Dashboard Page
#   And I click on One Click Upsell btn in sidebar
#   Then I should see the One Click Upsell heading
#   When I click on the Add Upsell button
#   Then I should see Affiliate field
#   Then I fill the Name field with "Test Offer"
#   And I click on Save and Close btn
#   Then I should see the Test Offer heading
#   Then I click on Add new step button and select Add Upsell
#   Then I fill the Name with "UP1"
#   Then I click on the No product
#   Then I enter the product "DROP SHIRT"
#   Then I select the product "DROP SHIRT" from the dropdown
#   And I click on Save btn
#   And I clicked on Save and Close button
#   And I click on Back Button
#   Then I should see Test Offer
#   And I enable the "Test Offer" upsell





Scenario: Create a new Upsell offer successfully with multiple offers
  Given I am on the login page
  When I enter "saad@cartpanda.com" in email field
  And I enter "Vista123+@" in password field
  And I click on Signin button
  Then I should see Select store Page
  When I click on "msaad" button
  Then I should see Dashboard Page
  And I click on One Click Upsell btn in sidebar
  Then I should see the One Click Upsell heading
  When I click on the Add Upsell button
  Then I should see Affiliate field
  Then I fill the Name field with "Test Offer"
  And I click on Save and Close btn
  Then I should see the Test Offer heading
  Then I click on Add new step button and select Add Upsell
  Then I fill the Name with "UP1"
  Then I click on the No product
  Then I enter the product "DROP SHIRT"
  Then I select the product "DROP SHIRT" from the dropdown
  And I click on Save btn
  And I clicked on Save and Close button
  And I click on plus icon and select add upsell
  Then I should see the Test Offer heading
  Then I fill the Name with "UP2"
  Then I click on the No product
  Then I enter the product "SOCKS"
  Then I select the product "SOCKS" from the dropdown
  And I click on Save btn
  And I clicked on Save and Close button
  And I click on Back Button
  Then I should see Test Offer
  And I enable the "Test Offer" upsell




  Scenario: Create a new Upsell offer successfully with discount(fixed)
  Given I am on the login page
  When I enter "saad@cartpanda.com" in email field
  And I enter "Vista123+@" in password field
  And I click on Signin button
  Then I should see Select store Page
  When I click on "msaad" button
  Then I should see Dashboard Page
  And I click on One Click Upsell btn in sidebar
  Then I should see the One Click Upsell heading
  When I click on the Add Upsell button
  Then I should see Affiliate field
  Then I fill the Name field with "Test Offer"
  And I click on Save and Close btn
  Then I should see the Test Offer heading
  Then I click on Add new step button and select Add Upsell
  Then I fill the Name with "UP1"
  Then I click on the No product
  Then I enter the product "DROP SHIRT"
  Then I select the product "DROP SHIRT" from the dropdown
  And I click on Save btn
  Then I click on discount value and enter Upsell discount value "30"
  And I clicked on Save and Close button
  And I click on Back Button
  Then I should see Test Offer
  And I enable the "Test Offer" upsell



    Scenario: Create a new Upsell offer successfully with discount(percentage)
  Given I am on the login page
  When I enter "saad@cartpanda.com" in email field
  And I enter "Vista123+@" in password field
  And I click on Signin button
  Then I should see Select store Page
  When I click on "msaad" button
  Then I should see Dashboard Page
  And I click on One Click Upsell btn in sidebar
  Then I should see the One Click Upsell heading
  When I click on the Add Upsell button
  Then I should see Affiliate field
  Then I fill the Name field with "Test Offer"
  And I click on Save and Close btn
  Then I should see the Test Offer heading
  Then I click on Add new step button and select Add Upsell
  Then I fill the Name with "UP1"
  Then I click on the No product
  Then I enter the product "DROP SHIRT"
  Then I select the product "DROP SHIRT" from the dropdown
  And I click on Save btn
 Then I click on Discount Type and select fixed amount from dropdown for Upsell offer 
  Then I click on discount value and enter Upsell discount value "30"
  And I clicked on Save and Close button
  And I click on Back Button
  Then I should see Test Offer
  And I enable the "Test Offer" upsell