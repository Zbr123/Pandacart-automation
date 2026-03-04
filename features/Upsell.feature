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
 





# Scenario: Create a new Upsell offer successfully with multiple offers
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
#   And I click on plus icon and select add upsell
#   Then I should see the Test Offer heading
#   Then I fill the Name with "UP2"
#   Then I click on the No product
#   Then I enter the product "SOCKS"
#   Then I select the product "SOCKS" from the dropdown
#   And I click on Save btn
#   And I clicked on Save and Close button
#   And I click on Back Button
#   Then I should see Test Offer
#   And I enable the "Test Offer" upsell




#   Scenario: Create a new Upsell offer successfully with discount(fixed)
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
#   Then I click on discount value and enter Upsell discount value "30"
#   And I clicked on Save and Close button
#   And I click on Back Button
#   Then I should see Test Offer
#   And I enable the "Test Offer" upsell



#     Scenario: Create a new Upsell offer successfully with discount(percentage)
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
#  Then I click on Discount Type and select fixed amount from dropdown for Upsell offer 
#   Then I click on discount value and enter Upsell discount value "30"
#   And I clicked on Save and Close button
#   And I click on Back Button
#   Then I enable the upsell named "Test Offer"



# Scenario: Create a new Upsell offer(Affiliate) with Total Cart Value(Equal to)
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
#   Then I fill the Name field with "Test Offer(Affiliate)(Total Cart Value=Equal to)"
#   Then I click on search Affiliate field and select "SaadTest"
#   And I click on rule and select Total cart value
#   And I select operator "equal-to"
#   And I enter the value "100" in the Value input
#   And I click on Save and Close btn
#   Then I should see the Test Offer heading
#   Then I click on Add new step button and select Add Upsell
#   Then I fill the Name with "UP1"
#   Then I click on the No product
#   Then I enter the product "DROP SHIRT"
#   Then I select the product "DROP SHIRT" from the dropdown
#   And I click on Save btn
#   And I clicked on Save and Close button
#   And I click on plus icon and select add upsell
#   Then I should see the Test Offer heading
#   Then I fill the Name with "UP2"
#   Then I click on the No product
#   Then I enter the product "SOCKS"
#   Then I select the product "SOCKS" from the dropdown
#   And I click on Save btn
#   And I clicked on Save and Close button
#   And I click on Back Button
#   Then I should see "Test Offer(Affiliate)(Total Cart Value=GreaterOrEqual)"




#   Scenario: Create a new Upsell offer(Affiliate) with Total Cart Value(Different)
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
#   Then I fill the Name field with "Test Offer(Affiliate)(Total Cart Value=Different)"
#   Then I click on search Affiliate field and select "SaadTest"
#   And I click on rule and select Total cart value
#   And I select operator "not-equal-to"
#   And I enter the value "100" in the Value input
#   And I click on Save and Close btn
#   Then I should see the Test Offer heading
#   Then I click on Add new step button and select Add Upsell
#   Then I fill the Name with "UP1"
#   Then I click on the No product
#   Then I enter the product "DROP SHIRT"
#   Then I select the product "DROP SHIRT" from the dropdown
#   And I click on Save btn
#   And I clicked on Save and Close button
#   And I click on plus icon and select add upsell
#   Then I should see the Test Offer heading
#   Then I fill the Name with "UP2"
#   Then I click on the No product
#   Then I enter the product "SOCKS"
#   Then I select the product "SOCKS" from the dropdown
#   And I click on Save btn
#   And I clicked on Save and Close button
#   And I click on Back Button
#   Then I should see "Test Offer(Affiliate)(Total Cart Value=GreaterOrEqual)"




#   Scenario: Create a new Upsell offer(Affiliate) with Total Cart Value(Greater)
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
#   Then I fill the Name field with "Test Offer(Affiliate)(Total Cart Value=Greater)"
#   Then I click on search Affiliate field and select "SaadTest"
#   And I click on rule and select Total cart value
#   And I select operator "greater"
#   And I enter the value "1500" in the Value input
#   And I click on Save and Close btn
#   Then I should see the Test Offer heading
#   Then I click on Add new step button and select Add Upsell
#   Then I fill the Name with "UP1"
#   Then I click on the No product
#   Then I enter the product "DROP SHIRT"
#   Then I select the product "DROP SHIRT" from the dropdown
#   And I click on Save btn
#   And I clicked on Save and Close button
#   And I click on plus icon and select add upsell
#   Then I should see the Test Offer heading
#   Then I fill the Name with "UP2"
#   Then I click on the No product
#   Then I enter the product "SOCKS"
#   Then I select the product "SOCKS" from the dropdown
#   And I click on Save btn
#   And I clicked on Save and Close button
#   And I click on Back Button
#   Then I should see "Test Offer(Affiliate)(Total Cart Value=GreaterOrEqual)"



  # Scenario: Create a new Upsell offer(Affiliate) with Total Cart Value(GreaterOrEqual)
  # Given I am on the login page
  # When I enter "saad@cartpanda.com" in email field
  # And I enter "Vista123+@" in password field
  # And I click on Signin button
  # Then I should see Select store Page
  # When I click on "msaad" button
  # Then I should see Dashboard Page
  # And I click on One Click Upsell btn in sidebar
  # Then I should see the One Click Upsell heading
  # When I click on the Add Upsell button
  # Then I should see Affiliate field
  # Then I fill the Name field with "Test Offer(Affiliate)(Total Cart Value=GreaterOrEqual)"
  # Then I click on search Affiliate field and select "SaadTest"
  # And I click on rule and select Total cart value
  # And I select operator "greater-or-equal"
  # And I enter the value "1000" in the Value input
  # And I click on Save and Close btn
  # Then I should see the Test Offer heading
  # Then I click on Add new step button and select Add Upsell
  # Then I fill the Name with "UP1"
  # Then I click on the No product
  # Then I enter the product "DROP SHIRT"
  # Then I select the product "DROP SHIRT" from the dropdown
  # And I click on Save btn
  # And I clicked on Save and Close button
  # And I click on plus icon and select add upsell
  # Then I should see the Test Offer heading
  # Then I fill the Name with "UP2"
  # Then I click on the No product
  # Then I enter the product "SOCKS"
  # Then I select the product "SOCKS" from the dropdown
  # And I click on Save btn
  # And I clicked on Save and Close button
  # Then I enable all upsell toggles
  # And I click on Back Button
 



  
  # Scenario: Create a new Upsell offer(Affiliate) with Total Cart Value(LessThan)
  # Given I am on the login page
  # When I enter "saad@cartpanda.com" in email field
  # And I enter "Vista123+@" in password field
  # And I click on Signin button
  # Then I should see Select store Page
  # When I click on "msaad" button
  # Then I should see Dashboard Page
  # And I click on One Click Upsell btn in sidebar
  # Then I should see the One Click Upsell heading
  # When I click on the Add Upsell button
  # Then I should see Affiliate field
  # Then I fill the Name field with "Test Offer(Affiliate)(Total Cart Value=LessThan)"
  # Then I click on search Affiliate field and select "SaadTest"
  # And I click on rule and select Total cart value
  # And I select operator "less"
  # And I enter the value "2005" in the Value input
  # And I click on Save and Close btn
  # Then I should see the Test Offer heading
  # Then I click on Add new step button and select Add Upsell
  # Then I fill the Name with "UP1"
  # Then I click on the No product
  # Then I enter the product "DROP SHIRT"
  # Then I select the product "DROP SHIRT" from the dropdown
  # And I click on Save btn
  # And I clicked on Save and Close button
  # And I click on plus icon and select add upsell
  # Then I should see the Test Offer heading
  # Then I fill the Name with "UP2"
  # Then I click on the No product
  # Then I enter the product "SOCKS"
  # Then I select the product "SOCKS" from the dropdown
  # And I click on Save btn
  # And I clicked on Save and Close button
  # Then I enable all upsell toggles
  # And I click on Back Button
   





#  Scenario: Create a new External Upsell offer[Discount:Fixed]
#   Given I am on the login page
#   When I enter "saad@cartpanda.com" in email field
#   And I enter "Vista123+@" in password field
#   And I click on Signin button
#   Then I should see Select store Page
#   When I click on "msaad" button
#   Then I should see Dashboard Page
#   And I click on One Click Upsell btn in sidebar
#   Then I should see the One Click Upsell heading
#   When I click on Upsell External button
#   When I click on the Create Upsell button
#   Then I should see Affiliate field
#   Then I fill the Name field with "Test Offer(EXTERNAL)(Discount:Fixed)"
#   Then I enter the external page URL "https://exocu-staging.weebly.com" in the External page field
#   And I click on Save and Close btn
#   Then I click on the upsell offer "Test Offer(EXTERNAL)(Discount:Fixed)"
#   And I click on plus icon and select add upsell
#   Then I fill the Name with "UP1"
#   Then I click on the No product
#   Then I enter the product "DROP SHIRT"
#   Then I select the product "DROP SHIRT" from the dropdown
#   Then I click on discount value and enter Upsell discount value "3"
#   And I click on Save btn
#   And I clicked on Save and Close button
#   And I click on plus icon and select add upsell
#   Then I should see the Test Offer heading
#   Then I fill the Name with "UP2"
#   Then I click on the No product
#   Then I enter the product "SOCKS"
#   Then I select the product "SOCKS" from the dropdown
#   Then I click on discount value and enter Upsell discount value "3"
#   Then I enter the external page URL "https://exocu-staging.weebly.com" in the Offer Page URL
#   And I click on Save btn
#   And I clicked on Save and Close button
#   Then I enable all upsell toggles
#   And I click on Back Button
   


#  Scenario: Create a new External Upsell offer[Discount:Percentage]
#   Given I am on the login page
#   When I enter "saad@cartpanda.com" in email field
#   And I enter "Vista123+@" in password field
#   And I click on Signin button
#   Then I should see Select store Page
#   When I click on "msaad" button
#   Then I should see Dashboard Page
#   And I click on One Click Upsell btn in sidebar
#   Then I should see the One Click Upsell heading
#   When I click on Upsell External button
#   When I click on the Create Upsell button
#   Then I should see Affiliate field
#   Then I fill the Name field with "Test Offer(EXTERNAL)(Discount:Percentage)"
#   Then I enter the external page URL "https://exocu-staging.weebly.com" in the External page field
#   And I click on Save and Close btn
#   Then I click on the upsell offer "Test Offer(EXTERNAL)(Discount:Percentage)"
#   And I click on plus icon and select add upsell
#   Then I fill the Name with "UP1"
#   Then I click on the No product
#   Then I enter the product "DROP SHIRT"
#   Then I select the product "DROP SHIRT" from the dropdown
#   And I click on Discount Type and select percentage from dropdown for Upsell offer
#   Then I click on discount value and enter Upsell discount value "3"
#   And I click on Save btn
#   And I clicked on Save and Close button
#   And I click on plus icon and select add upsell
#   Then I should see the Test Offer heading
#   Then I fill the Name with "UP2"
#   Then I click on the No product
#   Then I enter the product "SOCKS"
#   Then I select the product "SOCKS" from the dropdown
#   Then I click on discount value and enter Upsell discount value "3"
#   And I click on Discount Type and select percentage from dropdown for Upsell offer
#   Then I enter the external page URL "https://exocu-staging.weebly.com" in the Offer Page URL
#   And I click on Save btn
#   And I clicked on Save and Close button
#   Then I enable all upsell toggles
#   And I click on Back Button

  
   

#     Scenario: Create a new External Upsell offer(Affiliate)[Discount:Percentage]
#   Given I am on the login page
#   When I enter "saad@cartpanda.com" in email field
#   And I enter "Vista123+@" in password field
#   And I click on Signin button
#   Then I should see Select store Page
#   When I click on "msaad" button
#   Then I should see Dashboard Page
#   And I click on One Click Upsell btn in sidebar
#   Then I should see the One Click Upsell heading
#   When I click on Upsell External button
#   When I click on the Create Upsell button
#   Then I should see Affiliate field
#   Then I fill the Name field with "Test Offer(Affiliate)(EXTERNAL)(Discount:Percentage)"
#   Then I click on search Affiliate field and select "SaadTest"
#   Then I enter the external page URL "https://exocu-staging.weebly.com" in the External page field
#   And I click on Save and Close btn
#   Then I click on the upsell offer "Test Offer(Affiliate)(EXTERNAL)(Discount:Percentage)"
#   And I click on plus icon and select add upsell
#   Then I fill the Name with "UP1"
#   Then I click on the No product
#   Then I enter the product "DROP SHIRT"
#   Then I select the product "DROP SHIRT" from the dropdown
#   And I click on Discount Type and select percentage from dropdown for Upsell offer
#   Then I click on discount value and enter Upsell discount value "3"
#   And I click on Save btn
#   And I clicked on Save and Close button
#   And I click on plus icon and select add upsell
#   Then I should see the Test Offer heading
#   Then I fill the Name with "UP2"
#   Then I click on the No product
#   Then I enter the product "SOCKS"
#   Then I select the product "SOCKS" from the dropdown
#   Then I click on discount value and enter Upsell discount value "3"
#   And I click on Discount Type and select percentage from dropdown for Upsell offer
#   Then I enter the external page URL "https://exocu-staging.weebly.com" in the Offer Page URL
#   And I click on Save btn
#   And I clicked on Save and Close button
#   Then I enable all upsell toggles
#   And I click on Back Button


#   Scenario: Create a new External Upsell offer(Affiliate)[Discount:Fixed]
#   Given I am on the login page
#   When I enter "saad@cartpanda.com" in email field
#   And I enter "Vista123+@" in password field
#   And I click on Signin button
#   Then I should see Select store Page
#   When I click on "msaad" button
#   Then I should see Dashboard Page
#   And I click on One Click Upsell btn in sidebar
#   Then I should see the One Click Upsell heading
#   When I click on Upsell External button
#   When I click on the Create Upsell button
#   Then I should see Affiliate field
#   Then I fill the Name field with "Test Offer(Affiliate)(EXTERNAL)(Discount:Fixed)"
#   Then I click on search Affiliate field and select "SaadTest"
#   Then I enter the external page URL "https://exocu-staging.weebly.com" in the External page field
#   And I click on Save and Close btn
#   Then I click on the upsell offer "Test Offer(Affiliate)(EXTERNAL)(Discount:Fixed)"
#   And I click on plus icon and select add upsell
#   Then I fill the Name with "UP1"
#   Then I click on the No product
#   Then I enter the product "DROP SHIRT"
#   Then I select the product "DROP SHIRT" from the dropdown
#   Then I click on discount value and enter Upsell discount value "3"
#   And I click on Save btn
#   And I clicked on Save and Close button
#   And I click on plus icon and select add upsell
#   Then I should see the Test Offer heading
#   Then I fill the Name with "UP2"
#   Then I click on the No product
#   Then I enter the product "SOCKS"
#   Then I select the product "SOCKS" from the dropdown
#   Then I click on discount value and enter Upsell discount value "3"
#   Then I enter the external page URL "https://exocu-staging.weebly.com" in the Offer Page URL
#   And I click on Save btn
#   And I clicked on Save and Close button
#   Then I enable all upsell toggles
#   And I click on Back Button
   









#   Scenario: Create a new External Upsell offer[Rule:Total Cart Value(Equal)][Discount:Fixed]
#   Given I am on the login page
#   When I enter "saad@cartpanda.com" in email field
#   And I enter "Vista123+@" in password field
#   And I click on Signin button
#   Then I should see Select store Page
#   When I click on "msaad" button
#   Then I should see Dashboard Page
#   And I click on One Click Upsell btn in sidebar
#   Then I should see the One Click Upsell heading
#   When I click on Upsell External button
#   When I click on the Create Upsell button
#   Then I should see Affiliate field
#   Then I fill the Name field with "Test Offer[Rule:Total Cart Value(Equal)](Discount:Fixed)"
#   Then I enter the external page URL "https://exocu-staging.weebly.com" in the External page field
#   And I click on rule and select Total cart value
#   And I select operator "equal-to"
#   And I enter the value "100" in the Value input
#   And I click on Save and Close btn
#   Then I click on the upsell offer "Test Offer[Rule:Total Cart Value(Equal)](Discount:Fixed)"
#   And I click on plus icon and select add upsell
#   Then I fill the Name with "UP1"
#   Then I click on the No product
#   Then I enter the product "DROP SHIRT"
#   Then I select the product "DROP SHIRT" from the dropdown
#   Then I click on discount value and enter Upsell discount value "3"
#   And I click on Save btn
#   And I clicked on Save and Close button
#   And I click on plus icon and select add upsell
#   Then I should see the Test Offer heading
#   Then I fill the Name with "UP2"
#   Then I click on the No product
#   Then I enter the product "SOCKS"
#   Then I select the product "SOCKS" from the dropdown
#   Then I click on discount value and enter Upsell discount value "3"
#   Then I enter the external page URL "https://exocu-staging.weebly.com" in the Offer Page URL
#   And I click on Save btn
#   And I clicked on Save and Close button
#   Then I enable all upsell toggles
#   And I click on Back Button
   




#   Scenario: Create a new External Upsell offer[Rule:Total Cart Value(Equal)][Discount:Percentage]
#   Given I am on the login page
#   When I enter "saad@cartpanda.com" in email field
#   And I enter "Vista123+@" in password field
#   And I click on Signin button
#   Then I should see Select store Page
#   When I click on "msaad" button
#   Then I should see Dashboard Page
#   And I click on One Click Upsell btn in sidebar
#   Then I should see the One Click Upsell heading
#   When I click on Upsell External button
#   When I click on the Create Upsell button
#   Then I should see Affiliate field
#   Then I fill the Name field with "Test Offer[Rule:Total Cart Value(Equal)](Discount:Percentage)"
#   Then I enter the external page URL "https://exocu-staging.weebly.com" in the External page field
#   And I click on rule and select Total cart value
#   And I select operator "equal-to"
#   And I enter the value "100" in the Value input
#   And I click on Save and Close btn
#   Then I click on the upsell offer "Test Offer[Rule:Total Cart Value(Equal)](Discount:Percentage)"
#   And I click on plus icon and select add upsell
#   Then I fill the Name with "UP1"
#   Then I click on the No product
#   Then I enter the product "DROP SHIRT"
#   Then I select the product "DROP SHIRT" from the dropdown
#   And I click on Discount Type and select percentage from dropdown for Upsell offer
#   Then I click on discount value and enter Upsell discount value "3"
#   And I click on Save btn
#   And I clicked on Save and Close button
#   And I click on plus icon and select add upsell
#   Then I should see the Test Offer heading
#   Then I fill the Name with "UP2"
#   Then I click on the No product
#   Then I enter the product "SOCKS"
#   Then I select the product "SOCKS" from the dropdown
#   Then I click on discount value and enter Upsell discount value "3"
#   And I click on Discount Type and select percentage from dropdown for Upsell offer
#   Then I enter the external page URL "https://exocu-staging.weebly.com" in the Offer Page URL
#   And I click on Save btn
#   And I clicked on Save and Close button
#   Then I enable all upsell toggles
#   And I click on Back Button


  
#   Scenario: Create a new External Upsell offer[Rule:Total Cart Value(Different)][Discount:Fixed]
#   Given I am on the login page
#   When I enter "saad@cartpanda.com" in email field
#   And I enter "Vista123+@" in password field
#   And I click on Signin button
#   Then I should see Select store Page
#   When I click on "msaad" button
#   Then I should see Dashboard Page
#   And I click on One Click Upsell btn in sidebar
#   Then I should see the One Click Upsell heading
#   When I click on Upsell External button
#   When I click on the Create Upsell button
#   Then I should see Affiliate field
#   Then I fill the Name field with "Test Offer[Rule:Total Cart Value(Different)](Discount:Fixed)"
#   Then I enter the external page URL "https://exocu-staging.weebly.com" in the External page field
#   And I click on rule and select Total cart value
#   And I select operator "not-equal-to" 
#   And I enter the value "100" in the Value input
#   And I click on Save and Close btn
#   Then I click on the upsell offer "Test Offer[Rule:Total Cart Value(Different)](Discount:Fixed)"
#   And I click on plus icon and select add upsell
#   Then I fill the Name with "UP1"
#   Then I click on the No product
#   Then I enter the product "DROP SHIRT"
#   Then I select the product "DROP SHIRT" from the dropdown
#   Then I click on discount value and enter Upsell discount value "3"
#   And I click on Save btn
#   And I clicked on Save and Close button
#   And I click on plus icon and select add upsell
#   Then I should see the Test Offer heading
#   Then I fill the Name with "UP2"
#   Then I click on the No product
#   Then I enter the product "SOCKS"
#   Then I select the product "SOCKS" from the dropdown
#   Then I click on discount value and enter Upsell discount value "3"
#   Then I enter the external page URL "https://exocu-staging.weebly.com" in the Offer Page URL
#   And I click on Save btn
#   And I clicked on Save and Close button
#   Then I enable all upsell toggles
#   And I click on Back Button
   


#  Scenario: Create a new External Upsell offer[Rule:Total Cart Value(Different)][Discount:Percentage]
#   Given I am on the login page
#   When I enter "saad@cartpanda.com" in email field
#   And I enter "Vista123+@" in password field
#   And I click on Signin button
#   Then I should see Select store Page
#   When I click on "msaad" button
#   Then I should see Dashboard Page
#   And I click on One Click Upsell btn in sidebar
#   Then I should see the One Click Upsell heading
#   When I click on Upsell External button
#   When I click on the Create Upsell button
#   Then I should see Affiliate field
#   Then I fill the Name field with "Test Offer[Rule:Total Cart Value(Different)](Discount:Percentage)"
#   Then I enter the external page URL "https://exocu-staging.weebly.com" in the External page field
#   And I click on rule and select Total cart value
#   And I select operator "not-equal-to" 
#   And I enter the value "100" in the Value input
#   And I click on Save and Close btn
#   Then I click on the upsell offer "Test Offer[Rule:Total Cart Value(Different)](Discount:Percentage)"
#   And I click on plus icon and select add upsell
#   Then I fill the Name with "UP1"
#   Then I click on the No product
#   Then I enter the product "DROP SHIRT"
#   Then I select the product "DROP SHIRT" from the dropdown
#   And I click on Discount Type and select percentage from dropdown for Upsell offer
#   Then I click on discount value and enter Upsell discount value "3"
#   And I click on Save btn
#   And I clicked on Save and Close button
#   And I click on plus icon and select add upsell
#   Then I should see the Test Offer heading
#   Then I fill the Name with "UP2"
#   Then I click on the No product
#   Then I enter the product "SOCKS"
#   Then I select the product "SOCKS" from the dropdown
#    And I click on Discount Type and select percentage from dropdown for Upsell offer
#   Then I click on discount value and enter Upsell discount value "3"
#   Then I enter the external page URL "https://exocu-staging.weebly.com" in the Offer Page URL
#   And I click on Save btn
#   And I clicked on Save and Close button
#   Then I enable all upsell toggles
#   And I click on Back Button









#   Scenario: Create a new External Upsell offer[Rule:Total Cart Value(Greater Than)][Discount:Fixed]
#   Given I am on the login page
#   When I enter "saad@cartpanda.com" in email field
#   And I enter "Vista123+@" in password field
#   And I click on Signin button
#   Then I should see Select store Page
#   When I click on "msaad" button
#   Then I should see Dashboard Page
#   And I click on One Click Upsell btn in sidebar
#   Then I should see the One Click Upsell heading
#   When I click on Upsell External button
#   When I click on the Create Upsell button
#   Then I should see Affiliate field
#   Then I fill the Name field with "Test Offer[Rule:Total Cart Value(Greater Than)](Discount:Fixed)"
#   Then I enter the external page URL "https://exocu-staging.weebly.com" in the External page field
#   And I click on rule and select Total cart value
#   And I select operator "greater" 
#   And I enter the value "100" in the Value input
#   And I click on Save and Close btn
#   Then I click on the upsell offer "Test Offer[Rule:Total Cart Value(Greater Than)](Discount:Fixed)"
#   And I click on plus icon and select add upsell
#   Then I fill the Name with "UP1"
#   Then I click on the No product
#   Then I enter the product "DROP SHIRT"
#   Then I select the product "DROP SHIRT" from the dropdown
#   Then I click on discount value and enter Upsell discount value "3"
#   And I click on Save btn
#   And I clicked on Save and Close button
#   And I click on plus icon and select add upsell
#   Then I should see the Test Offer heading
#   Then I fill the Name with "UP2"
#   Then I click on the No product
#   Then I enter the product "SOCKS"
#   Then I select the product "SOCKS" from the dropdown
#   Then I click on discount value and enter Upsell discount value "3"
#   Then I enter the external page URL "https://exocu-staging.weebly.com" in the Offer Page URL
#   And I click on Save btn
#   And I clicked on Save and Close button
#   Then I enable all upsell toggles
#   And I click on Back Button
   





#  Scenario: Create a new External Upsell offer[Rule:Total Cart Value(Greater Than)][Discount:Percentage]
#   Given I am on the login page
#   When I enter "saad@cartpanda.com" in email field
#   And I enter "Vista123+@" in password field
#   And I click on Signin button
#   Then I should see Select store Page
#   When I click on "msaad" button
#   Then I should see Dashboard Page
#   And I click on One Click Upsell btn in sidebar
#   Then I should see the One Click Upsell heading
#   When I click on Upsell External button
#   When I click on the Create Upsell button
#   Then I should see Affiliate field
#   Then I fill the Name field with "Test Offer[Rule:Total Cart Value(Greater Than)](Discount:Percentage)"
#   Then I enter the external page URL "https://exocu-staging.weebly.com" in the External page field
#   And I click on rule and select Total cart value
#   And I select operator "greater"
#   And I enter the value "100" in the Value input
#   And I click on Save and Close btn
#   Then I click on the upsell offer "Test Offer[Rule:Total Cart Value(Greater Than)](Discount:Percentage)"
#   And I click on plus icon and select add upsell
#   Then I fill the Name with "UP1"
#   Then I click on the No product
#   Then I enter the product "DROP SHIRT"
#   Then I select the product "DROP SHIRT" from the dropdown
#   And I click on Discount Type and select percentage from dropdown for Upsell offer
#   Then I click on discount value and enter Upsell discount value "3"
#   And I click on Save btn
#   And I clicked on Save and Close button
#   And I click on plus icon and select add upsell
#   Then I should see the Test Offer heading
#   Then I fill the Name with "UP2"
#   Then I click on the No product
#   Then I enter the product "SOCKS"
#   Then I select the product "SOCKS" from the dropdown
#    And I click on Discount Type and select percentage from dropdown for Upsell offer
#   Then I click on discount value and enter Upsell discount value "3"
#   Then I enter the external page URL "https://exocu-staging.weebly.com" in the Offer Page URL
#   And I click on Save btn
#   And I clicked on Save and Close button
#   Then I enable all upsell toggles
#   And I click on Back Button



#   Scenario: Create a new External Upsell offer[Rule:Total Cart Value(Greater or Equal Than)][Discount:Fixed]
#   Given I am on the login page
#   When I enter "saad@cartpanda.com" in email field
#   And I enter "Vista123+@" in password field
#   And I click on Signin button
#   Then I should see Select store Page
#   When I click on "msaad" button
#   Then I should see Dashboard Page
#   And I click on One Click Upsell btn in sidebar
#   Then I should see the One Click Upsell heading
#   When I click on Upsell External button
#   When I click on the Create Upsell button
#   Then I should see Affiliate field
#   Then I fill the Name field with "Test Offer[Rule:Total Cart Value(Greater or Equal Than)](Discount:Fixed)"
#   Then I enter the external page URL "https://exocu-staging.weebly.com" in the External page field
#   And I click on rule and select Total cart value
#   And I select operator "greater-or-equal"
#   And I enter the value "100" in the Value input
#   And I click on Save and Close btn
#   Then I click on the upsell offer "Test Offer[Rule:Total Cart Value(Greater or Equal Than)](Discount:Fixed)"
#   And I click on plus icon and select add upsell
#   Then I fill the Name with "UP1"
#   Then I click on the No product
#   Then I enter the product "DROP SHIRT"
#   Then I select the product "DROP SHIRT" from the dropdown
#   Then I click on discount value and enter Upsell discount value "3"
#   And I click on Save btn
#   And I clicked on Save and Close button
#   And I click on plus icon and select add upsell
#   Then I should see the Test Offer heading
#   Then I fill the Name with "UP2"
#   Then I click on the No product
#   Then I enter the product "SOCKS"
#   Then I select the product "SOCKS" from the dropdown
#   Then I click on discount value and enter Upsell discount value "3"
#   Then I enter the external page URL "https://exocu-staging.weebly.com" in the Offer Page URL
#   And I click on Save btn
#   And I clicked on Save and Close button
#   Then I enable all upsell toggles
#   And I click on Back Button
   





#  Scenario: Create a new External Upsell offer[Rule:Total Cart Value(Greater or Equal Than)][Discount:Percentage]
#   Given I am on the login page
#   When I enter "saad@cartpanda.com" in email field
#   And I enter "Vista123+@" in password field
#   And I click on Signin button
#   Then I should see Select store Page
#   When I click on "msaad" button
#   Then I should see Dashboard Page
#   And I click on One Click Upsell btn in sidebar
#   Then I should see the One Click Upsell heading
#   When I click on Upsell External button
#   When I click on the Create Upsell button
#   Then I should see Affiliate field
#   Then I fill the Name field with "Test Offer[Rule:Total Cart Value(Greater or Equal Than)](Discount:Percentage)"
#   Then I enter the external page URL "https://exocu-staging.weebly.com" in the External page field
#   And I click on rule and select Total cart value
#   And I select operator "greater-or-equal"
#   And I enter the value "100" in the Value input
#   And I click on Save and Close btn
#   Then I click on the upsell offer "Test Offer[Rule:Total Cart Value(Greater or Equal Than)](Discount:Percentage)"
#   And I click on plus icon and select add upsell
#   Then I fill the Name with "UP1"
#   Then I click on the No product
#   Then I enter the product "DROP SHIRT"
#   Then I select the product "DROP SHIRT" from the dropdown
#   And I click on Discount Type and select percentage from dropdown for Upsell offer
#   Then I click on discount value and enter Upsell discount value "3"
#   And I click on Save btn
#   And I clicked on Save and Close button
#   And I click on plus icon and select add upsell
#   Then I should see the Test Offer heading
#   Then I fill the Name with "UP2"
#   Then I click on the No product
#   Then I enter the product "SOCKS"
#   Then I select the product "SOCKS" from the dropdown
#    And I click on Discount Type and select percentage from dropdown for Upsell offer
#   Then I click on discount value and enter Upsell discount value "3"
#   Then I enter the external page URL "https://exocu-staging.weebly.com" in the Offer Page URL
#   And I click on Save btn
#   And I clicked on Save and Close button
#   Then I enable all upsell toggles
#   And I click on Back Button






#   Scenario: Create a new External Upsell offer[Rule:Total Cart Value(Less Than)][Discount:Fixed]
#   Given I am on the login page
#   When I enter "saad@cartpanda.com" in email field
#   And I enter "Vista123+@" in password field
#   And I click on Signin button
#   Then I should see Select store Page
#   When I click on "msaad" button
#   Then I should see Dashboard Page
#   And I click on One Click Upsell btn in sidebar
#   Then I should see the One Click Upsell heading
#   When I click on Upsell External button
#   When I click on the Create Upsell button
#   Then I should see Affiliate field
#   Then I fill the Name field with "Test Offer[Rule:Total Cart Value(Less Than)](Discount:Fixed)"
#   Then I enter the external page URL "https://exocu-staging.weebly.com" in the External page field
#   And I click on rule and select Total cart value
#   And I select operator "less"
#   And I enter the value "100" in the Value input
#   And I click on Save and Close btn
#   Then I click on the upsell offer "Test Offer[Rule:Total Cart Value(Less Than)](Discount:Fixed)"
#   And I click on plus icon and select add upsell
#   Then I fill the Name with "UP1"
#   Then I click on the No product
#   Then I enter the product "DROP SHIRT"
#   Then I select the product "DROP SHIRT" from the dropdown
#   Then I click on discount value and enter Upsell discount value "3"
#   And I click on Save btn
#   And I clicked on Save and Close button
#   And I click on plus icon and select add upsell
#   Then I should see the Test Offer heading
#   Then I fill the Name with "UP2"
#   Then I click on the No product
#   Then I enter the product "SOCKS"
#   Then I select the product "SOCKS" from the dropdown
#   Then I click on discount value and enter Upsell discount value "3"
#   Then I enter the external page URL "https://exocu-staging.weebly.com" in the Offer Page URL
#   And I click on Save btn
#   And I clicked on Save and Close button
#   Then I enable all upsell toggles
#   And I click on Back Button
   





#  Scenario: Create a new External Upsell offer[Rule:Total Cart Value(Less Than)][Discount:Percentage]
#   Given I am on the login page
#   When I enter "saad@cartpanda.com" in email field
#   And I enter "Vista123+@" in password field
#   And I click on Signin button
#   Then I should see Select store Page
#   When I click on "msaad" button
#   Then I should see Dashboard Page
#   And I click on One Click Upsell btn in sidebar
#   Then I should see the One Click Upsell heading
#   When I click on Upsell External button
#   When I click on the Create Upsell button
#   Then I should see Affiliate field
#   Then I fill the Name field with "Test Offer[Rule:Total Cart Value(Less Than)](Discount:Percentage)"
#   Then I enter the external page URL "https://exocu-staging.weebly.com" in the External page field
#   And I click on rule and select Total cart value
#   And I select operator "less"
#   And I enter the value "100" in the Value input
#   And I click on Save and Close btn
#   Then I click on the upsell offer "Test Offer[Rule:Total Cart Value(Less Than)](Discount:Percentage)"
#   And I click on plus icon and select add upsell
#   Then I fill the Name with "UP1"
#   Then I click on the No product
#   Then I enter the product "DROP SHIRT"
#   Then I select the product "DROP SHIRT" from the dropdown
#   And I click on Discount Type and select percentage from dropdown for Upsell offer
#   Then I click on discount value and enter Upsell discount value "3"
#   And I click on Save btn
#   And I clicked on Save and Close button
#   And I click on plus icon and select add upsell
#   Then I should see the Test Offer heading
#   Then I fill the Name with "UP2"
#   Then I click on the No product
#   Then I enter the product "SOCKS"
#   Then I select the product "SOCKS" from the dropdown
#    And I click on Discount Type and select percentage from dropdown for Upsell offer
#   Then I click on discount value and enter Upsell discount value "3"
#   Then I enter the external page URL "https://exocu-staging.weebly.com" in the Offer Page URL
#   And I click on Save btn
#   And I clicked on Save and Close button
#   Then I enable all upsell toggles
#   And I click on Back Button















#External Upsell Affiliate



#  Scenario: Create a new External Upsell offer(Affiliate)[Rule:Total Cart Value(Equal)][Discount:Fixed]
#   Given I am on the login page
#   When I enter "saad@cartpanda.com" in email field
#   And I enter "Vista123+@" in password field
#   And I click on Signin button
#   Then I should see Select store Page
#   When I click on "msaad" button
#   Then I should see Dashboard Page
#   And I click on One Click Upsell btn in sidebar
#   Then I should see the One Click Upsell heading
#   When I click on Upsell External button
#   When I click on the Create Upsell button
#   Then I should see Affiliate field
#   Then I fill the Name field with "Test Offer(Affiliate)[Rule:Total Cart Value(Equal)](Discount:Fixed)"
#   Then I enter the external page URL "https://exocu-staging.weebly.com" in the External page field
#   Then I click on search Affiliate field and select "SaadTest"
#   And I click on rule and select Total cart value
#   And I select operator "equal-to"
#   And I enter the value "100" in the Value input
#   And I click on Save and Close btn
#   Then I click on the upsell offer "Test Offer(Affiliate)[Rule:Total Cart Value(Equal)](Discount:Fixed)"
#   And I click on plus icon and select add upsell
#   Then I fill the Name with "UP1"
#   Then I click on the No product
#   Then I enter the product "DROP SHIRT"
#   Then I select the product "DROP SHIRT" from the dropdown
#   Then I click on discount value and enter Upsell discount value "3"
#   And I click on Save btn
#   And I clicked on Save and Close button
#   And I click on plus icon and select add upsell
#   Then I should see the Test Offer heading
#   Then I fill the Name with "UP2"
#   Then I click on the No product
#   Then I enter the product "SOCKS"
#   Then I select the product "SOCKS" from the dropdown
#   Then I click on discount value and enter Upsell discount value "3"
#   Then I enter the external page URL "https://exocu-staging.weebly.com" in the Offer Page URL
#   And I click on Save btn
#   And I clicked on Save and Close button
#   Then I enable all upsell toggles
#   And I click on Back Button
   




#   Scenario: Create a new External Upsell offer(Affiliate)[Rule:Total Cart Value(Equal)][Discount:Percentage]
#   Given I am on the login page
#   When I enter "saad@cartpanda.com" in email field
#   And I enter "Vista123+@" in password field
#   And I click on Signin button
#   Then I should see Select store Page
#   When I click on "msaad" button
#   Then I should see Dashboard Page
#   And I click on One Click Upsell btn in sidebar
#   Then I should see the One Click Upsell heading
#   When I click on Upsell External button
#   When I click on the Create Upsell button
#   Then I should see Affiliate field
#   Then I fill the Name field with "Test Offer(Affiliate)[Rule:Total Cart Value(Equal)](Discount:Percentage)"
#   Then I enter the external page URL "https://exocu-staging.weebly.com" in the External page field
#   Then I click on search Affiliate field and select "SaadTest"
#   And I click on rule and select Total cart value
#   And I select operator "equal-to"
#   And I enter the value "100" in the Value input
#   And I click on Save and Close btn
#   Then I click on the upsell offer "Test Offer(Affiliate)[Rule:Total Cart Value(Equal)](Discount:Percentage)"
#   And I click on plus icon and select add upsell
#   Then I fill the Name with "UP1"
#   Then I click on the No product
#   Then I enter the product "DROP SHIRT"
#   Then I select the product "DROP SHIRT" from the dropdown
#   And I click on Discount Type and select percentage from dropdown for Upsell offer
#   Then I click on discount value and enter Upsell discount value "3"
#   And I click on Save btn
#   And I clicked on Save and Close button
#   And I click on plus icon and select add upsell
#   Then I should see the Test Offer heading
#   Then I fill the Name with "UP2"
#   Then I click on the No product
#   Then I enter the product "SOCKS"
#   Then I select the product "SOCKS" from the dropdown
#   Then I click on discount value and enter Upsell discount value "3"
#   And I click on Discount Type and select percentage from dropdown for Upsell offer
#   Then I enter the external page URL "https://exocu-staging.weebly.com" in the Offer Page URL
#   And I click on Save btn
#   And I clicked on Save and Close button
#   Then I enable all upsell toggles
#   And I click on Back Button


  
#   Scenario: Create a new External Upsell offer(Affiliate)[Rule:Total Cart Value(Different)][Discount:Fixed]
#   Given I am on the login page
#   When I enter "saad@cartpanda.com" in email field
#   And I enter "Vista123+@" in password field
#   And I click on Signin button
#   Then I should see Select store Page
#   When I click on "msaad" button
#   Then I should see Dashboard Page
#   And I click on One Click Upsell btn in sidebar
#   Then I should see the One Click Upsell heading
#   When I click on Upsell External button
#   When I click on the Create Upsell button
#   Then I should see Affiliate field
#   Then I fill the Name field with "Test Offer(Affiliate)[Rule:Total Cart Value(Different)](Discount:Fixed)"
#   Then I enter the external page URL "https://exocu-staging.weebly.com" in the External page field
#   Then I click on search Affiliate field and select "SaadTest"
#   And I click on rule and select Total cart value
#   And I select operator "not-equal-to" 
#   And I enter the value "100" in the Value input
#   And I click on Save and Close btn
#   Then I click on the upsell offer "Test Offer(Affiliate)[Rule:Total Cart Value(Different)](Discount:Fixed)"
#   And I click on plus icon and select add upsell
#   Then I fill the Name with "UP1"
#   Then I click on the No product
#   Then I enter the product "DROP SHIRT"
#   Then I select the product "DROP SHIRT" from the dropdown
#   Then I click on discount value and enter Upsell discount value "3"
#   And I click on Save btn
#   And I clicked on Save and Close button
#   And I click on plus icon and select add upsell
#   Then I should see the Test Offer heading
#   Then I fill the Name with "UP2"
#   Then I click on the No product
#   Then I enter the product "SOCKS"
#   Then I select the product "SOCKS" from the dropdown
#   Then I click on discount value and enter Upsell discount value "3"
#   Then I enter the external page URL "https://exocu-staging.weebly.com" in the Offer Page URL
#   And I click on Save btn
#   And I clicked on Save and Close button
#   Then I enable all upsell toggles
#   And I click on Back Button
   


#  Scenario: Create a new External Upsell offer(Affiliate)[Rule:Total Cart Value(Different)][Discount:Percentage]
#   Given I am on the login page
#   When I enter "saad@cartpanda.com" in email field
#   And I enter "Vista123+@" in password field
#   And I click on Signin button
#   Then I should see Select store Page
#   When I click on "msaad" button
#   Then I should see Dashboard Page
#   And I click on One Click Upsell btn in sidebar
#   Then I should see the One Click Upsell heading
#   When I click on Upsell External button
#   When I click on the Create Upsell button
#   Then I should see Affiliate field
#   Then I fill the Name field with "Test Offer(Affiliate)[Rule:Total Cart Value(Different)](Discount:Percentage)"
#   Then I enter the external page URL "https://exocu-staging.weebly.com" in the External page field
#   Then I click on search Affiliate field and select "SaadTest"
#   And I click on rule and select Total cart value
#   And I select operator "not-equal-to" 
#   And I enter the value "100" in the Value input
#   And I click on Save and Close btn
#   Then I click on the upsell offer "Test Offer(Affiliate)[Rule:Total Cart Value(Different)](Discount:Percentage)"
#   And I click on plus icon and select add upsell
#   Then I fill the Name with "UP1"
#   Then I click on the No product
#   Then I enter the product "DROP SHIRT"
#   Then I select the product "DROP SHIRT" from the dropdown
#   And I click on Discount Type and select percentage from dropdown for Upsell offer
#   Then I click on discount value and enter Upsell discount value "3"
#   And I click on Save btn
#   And I clicked on Save and Close button
#   And I click on plus icon and select add upsell
#   Then I should see the Test Offer heading
#   Then I fill the Name with "UP2"
#   Then I click on the No product
#   Then I enter the product "SOCKS"
#   Then I select the product "SOCKS" from the dropdown
#    And I click on Discount Type and select percentage from dropdown for Upsell offer
#   Then I click on discount value and enter Upsell discount value "3"
#   Then I enter the external page URL "https://exocu-staging.weebly.com" in the Offer Page URL
#   And I click on Save btn
#   And I clicked on Save and Close button
#   Then I enable all upsell toggles
#   And I click on Back Button









#   Scenario: Create a new External Upsell offer(Affiliate)[Rule:Total Cart Value(Greater Than)][Discount:Fixed]
#   Given I am on the login page
#   When I enter "saad@cartpanda.com" in email field
#   And I enter "Vista123+@" in password field
#   And I click on Signin button
#   Then I should see Select store Page
#   When I click on "msaad" button
#   Then I should see Dashboard Page
#   And I click on One Click Upsell btn in sidebar
#   Then I should see the One Click Upsell heading
#   When I click on Upsell External button
#   When I click on the Create Upsell button
#   Then I should see Affiliate field
#   Then I fill the Name field with "Test Offer(Affiliate)[Rule:Total Cart Value(Greater Than)](Discount:Fixed)"
#   Then I enter the external page URL "https://exocu-staging.weebly.com" in the External page field
# Then I click on search Affiliate field and select "SaadTest"
#   And I click on rule and select Total cart value
#   And I select operator "greater" 
#   And I enter the value "100" in the Value input
#   And I click on Save and Close btn
#   Then I click on the upsell offer "Test Offer(Affiliate)[Rule:Total Cart Value(Greater Than)](Discount:Fixed)"
#   And I click on plus icon and select add upsell
#   Then I fill the Name with "UP1"
#   Then I click on the No product
#   Then I enter the product "DROP SHIRT"
#   Then I select the product "DROP SHIRT" from the dropdown
#   Then I click on discount value and enter Upsell discount value "3"
#   And I click on Save btn
#   And I clicked on Save and Close button
#   And I click on plus icon and select add upsell
#   Then I should see the Test Offer heading
#   Then I fill the Name with "UP2"
#   Then I click on the No product
#   Then I enter the product "SOCKS"
#   Then I select the product "SOCKS" from the dropdown
#   Then I click on discount value and enter Upsell discount value "3"
#   Then I enter the external page URL "https://exocu-staging.weebly.com" in the Offer Page URL
#   And I click on Save btn
#   And I clicked on Save and Close button
#   Then I enable all upsell toggles
#   And I click on Back Button
   





#  Scenario: Create a new External Upsell offer(Affiliate)[Rule:Total Cart Value(Greater Than)][Discount:Percentage]
#   Given I am on the login page
#   When I enter "saad@cartpanda.com" in email field
#   And I enter "Vista123+@" in password field
#   And I click on Signin button
#   Then I should see Select store Page
#   When I click on "msaad" button
#   Then I should see Dashboard Page
#   And I click on One Click Upsell btn in sidebar
#   Then I should see the One Click Upsell heading
#   When I click on Upsell External button
#   When I click on the Create Upsell button
#   Then I should see Affiliate field
#   Then I fill the Name field with "Test Offer(Affiliate)[Rule:Total Cart Value(Greater Than)](Discount:Percentage)"
#   Then I enter the external page URL "https://exocu-staging.weebly.com" in the External page field
#   Then I click on search Affiliate field and select "SaadTest"
#   And I click on rule and select Total cart value
#   And I select operator "greater"
#   And I enter the value "100" in the Value input
#   And I click on Save and Close btn
#   Then I click on the upsell offer "Test Offer(Affiliate)[Rule:Total Cart Value(Greater Than)](Discount:Percentage)"
#   And I click on plus icon and select add upsell
#   Then I fill the Name with "UP1"
#   Then I click on the No product
#   Then I enter the product "DROP SHIRT"
#   Then I select the product "DROP SHIRT" from the dropdown
#   And I click on Discount Type and select percentage from dropdown for Upsell offer
#   Then I click on discount value and enter Upsell discount value "3"
#   And I click on Save btn
#   And I clicked on Save and Close button
#   And I click on plus icon and select add upsell
#   Then I should see the Test Offer heading
#   Then I fill the Name with "UP2"
#   Then I click on the No product
#   Then I enter the product "SOCKS"
#   Then I select the product "SOCKS" from the dropdown
#    And I click on Discount Type and select percentage from dropdown for Upsell offer
#   Then I click on discount value and enter Upsell discount value "3"
#   Then I enter the external page URL "https://exocu-staging.weebly.com" in the Offer Page URL
#   And I click on Save btn
#   And I clicked on Save and Close button
#   Then I enable all upsell toggles
#   And I click on Back Button



#   Scenario: Create a new External Upsell offer(Affiliate)[Rule:Total Cart Value(Greater or Equal Than)][Discount:Fixed]
#   Given I am on the login page
#   When I enter "saad@cartpanda.com" in email field
#   And I enter "Vista123+@" in password field
#   And I click on Signin button
#   Then I should see Select store Page
#   When I click on "msaad" button
#   Then I should see Dashboard Page
#   And I click on One Click Upsell btn in sidebar
#   Then I should see the One Click Upsell heading
#   When I click on Upsell External button
#   When I click on the Create Upsell button
#   Then I should see Affiliate field
#   Then I fill the Name field with "Test Offer(Affiliate)[Rule:Total Cart Value(Greater or Equal Than)](Discount:Fixed)"
#   Then I enter the external page URL "https://exocu-staging.weebly.com" in the External page field
#   Then I click on search Affiliate field and select "SaadTest"
#   And I click on rule and select Total cart value
#   And I select operator "greater-or-equal"
#   And I enter the value "100" in the Value input
#   And I click on Save and Close btn
#   Then I click on the upsell offer "Test Offer(Affiliate)[Rule:Total Cart Value(Greater or Equal Than)](Discount:Fixed)"
#   And I click on plus icon and select add upsell
#   Then I fill the Name with "UP1"
#   Then I click on the No product
#   Then I enter the product "DROP SHIRT"
#   Then I select the product "DROP SHIRT" from the dropdown
#   Then I click on discount value and enter Upsell discount value "3"
#   And I click on Save btn
#   And I clicked on Save and Close button
#   And I click on plus icon and select add upsell
#   Then I should see the Test Offer heading
#   Then I fill the Name with "UP2"
#   Then I click on the No product
#   Then I enter the product "SOCKS"
#   Then I select the product "SOCKS" from the dropdown
#   Then I click on discount value and enter Upsell discount value "3"
#   Then I enter the external page URL "https://exocu-staging.weebly.com" in the Offer Page URL
#   And I click on Save btn
#   And I clicked on Save and Close button
#   Then I enable all upsell toggles
#   And I click on Back Button
   





#  Scenario: Create a new External Upsell offer(Affiliate)[Rule:Total Cart Value(Greater or Equal Than)][Discount:Percentage]
#   Given I am on the login page
#   When I enter "saad@cartpanda.com" in email field
#   And I enter "Vista123+@" in password field
#   And I click on Signin button
#   Then I should see Select store Page
#   When I click on "msaad" button
#   Then I should see Dashboard Page
#   And I click on One Click Upsell btn in sidebar
#   Then I should see the One Click Upsell heading
#   When I click on Upsell External button
#   When I click on the Create Upsell button
#   Then I should see Affiliate field
#   Then I fill the Name field with "Test Offer(Affiliate)[Rule:Total Cart Value(Greater or Equal Than)](Discount:Percentage)"
#   Then I enter the external page URL "https://exocu-staging.weebly.com" in the External page field
#  Then I click on search Affiliate field and select "SaadTest"
#   And I click on rule and select Total cart value
#   And I select operator "greater-or-equal"
#   And I enter the value "100" in the Value input
#   And I click on Save and Close btn
#   Then I click on the upsell offer "Test Offer(Affiliate)[Rule:Total Cart Value(Greater or Equal Than)](Discount:Percentage)"
#   And I click on plus icon and select add upsell
#   Then I fill the Name with "UP1"
#   Then I click on the No product
#   Then I enter the product "DROP SHIRT"
#   Then I select the product "DROP SHIRT" from the dropdown
#   And I click on Discount Type and select percentage from dropdown for Upsell offer
#   Then I click on discount value and enter Upsell discount value "3"
#   And I click on Save btn
#   And I clicked on Save and Close button
#   And I click on plus icon and select add upsell
#   Then I should see the Test Offer heading
#   Then I fill the Name with "UP2"
#   Then I click on the No product
#   Then I enter the product "SOCKS"
#   Then I select the product "SOCKS" from the dropdown
#    And I click on Discount Type and select percentage from dropdown for Upsell offer
#   Then I click on discount value and enter Upsell discount value "3"
#   Then I enter the external page URL "https://exocu-staging.weebly.com" in the Offer Page URL
#   And I click on Save btn
#   And I clicked on Save and Close button
#   Then I enable all upsell toggles
#   And I click on Back Button






#   Scenario: Create a new External Upsell offer(Affiliate)[Rule:Total Cart Value(Less Than)][Discount:Fixed]
#   Given I am on the login page
#   When I enter "saad@cartpanda.com" in email field
#   And I enter "Vista123+@" in password field
#   And I click on Signin button
#   Then I should see Select store Page
#   When I click on "msaad" button
#   Then I should see Dashboard Page
#   And I click on One Click Upsell btn in sidebar
#   Then I should see the One Click Upsell heading
#   When I click on Upsell External button
#   When I click on the Create Upsell button
#   Then I should see Affiliate field
#   Then I fill the Name field with "Test Offer(Affiliate)[Rule:Total Cart Value(Less Than)](Discount:Fixed)"
#   Then I enter the external page URL "https://exocu-staging.weebly.com" in the External page field
#   Then I click on search Affiliate field and select "SaadTest"
#   And I click on rule and select Total cart value
#   And I select operator "less"
#   And I enter the value "100" in the Value input
#   And I click on Save and Close btn
# Then I click on the upsell offer "Test Offer(Affiliate)[Rule:Total Cart Value(Less Than)](Discount:Fixed)"
#   And I click on plus icon and select add upsell
#   Then I fill the Name with "UP1"
#   Then I click on the No product
#   Then I enter the product "DROP SHIRT"
#   Then I select the product "DROP SHIRT" from the dropdown
#   Then I click on discount value and enter Upsell discount value "3"
#   And I click on Save btn
#   And I clicked on Save and Close button
#   And I click on plus icon and select add upsell
#   Then I should see the Test Offer heading
#   Then I fill the Name with "UP2"
#   Then I click on the No product
#   Then I enter the product "SOCKS"
#   Then I select the product "SOCKS" from the dropdown
#   Then I click on discount value and enter Upsell discount value "3"
#   Then I enter the external page URL "https://exocu-staging.weebly.com" in the Offer Page URL
#   And I click on Save btn
#   And I clicked on Save and Close button
#   Then I enable all upsell toggles
#   And I click on Back Button
   





#  Scenario: Create a new External Upsell offer(Affiliate)[Rule:Total Cart Value(Less Than)][Discount:Percentage]
#   Given I am on the login page
#   When I enter "saad@cartpanda.com" in email field
#   And I enter "Vista123+@" in password field
#   And I click on Signin button
#   Then I should see Select store Page
#   When I click on "msaad" button
#   Then I should see Dashboard Page
#   And I click on One Click Upsell btn in sidebar
#   Then I should see the One Click Upsell heading
#   When I click on Upsell External button
#   When I click on the Create Upsell button
#   Then I should see Affiliate field
#   Then I fill the Name field with "Test Offer(Affiliate)[Rule:Total Cart Value(Less Than)](Discount:Percentage)"
#   Then I enter the external page URL "https://exocu-staging.weebly.com" in the External page field
#   Then I click on search Affiliate field and select "SaadTest"
#   And I click on rule and select Total cart value
#   And I select operator "less"
#   And I enter the value "100" in the Value input
#   And I click on Save and Close btn
#   Then I click on the upsell offer "Test Offer(Affiliate)[Rule:Total Cart Value(Less Than)](Discount:Percentage)"
#   And I click on plus icon and select add upsell
#   Then I fill the Name with "UP1"
#   Then I click on the No product
#   Then I enter the product "DROP SHIRT"
#   Then I select the product "DROP SHIRT" from the dropdown
#   And I click on Discount Type and select percentage from dropdown for Upsell offer
#   Then I click on discount value and enter Upsell discount value "3"
#   And I click on Save btn
#   And I clicked on Save and Close button
#   And I click on plus icon and select add upsell
#   Then I should see the Test Offer heading
#   Then I fill the Name with "UP2"
#   Then I click on the No product
#   Then I enter the product "SOCKS"
#   Then I select the product "SOCKS" from the dropdown
#    And I click on Discount Type and select percentage from dropdown for Upsell offer
#   Then I click on discount value and enter Upsell discount value "3"
#   Then I enter the external page URL "https://exocu-staging.weebly.com" in the Offer Page URL
#   And I click on Save btn
#   And I clicked on Save and Close button
#   Then I enable all upsell toggles
#   And I click on Back Button





@NewUpsellOffer(ProductIncart)

# Scenario: Create a new Upsell offer with Product In Cart(Equal to)(Discount:Fixed)
#   Given I am on the login page
#   When I enter "saad@cartpanda.com" in email field
#   And I enter "Vista123+@" in password field
#   And I click on Signin button
#   Then I should see Select store Page
#   When I click on "msaad" button
#   Then I should see Dashboard Page
#   Then I click on cross button from the Support Icon
#   And I click on One Click Upsell btn in sidebar
#   Then I should see the One Click Upsell heading
#   When I click on the Add Upsell button
#   Then I should see Affiliate field
#   Then I fill the Name field with "Test Offer(Product In Cart=Equal to)(Fixed)"
#   And I click on rule and select Product in cart
#   And I select operator "equal-to"
#   Then I enter the product "DROP SHIRT"
#   Then I select the product "DROP SHIRT" from the dropdown
#   And I click on Save btn
#   And I click on Save and Close btn
#   Then I should see the Test Offer heading
#   Then I click on Add new step button and select Add Upsell
#   Then I fill the Name with "UP1"
#   Then I click on the No product
#   Then I enter the product "DROP SHIRT"
#   Then I select the product "DROP SHIRT" from the dropdown
#   Then I click on discount value and enter Upsell discount value "3"
#   And I click on Save btn
#   And I clicked on Save and Close button
#   And I click on plus icon and select add upsell
#   Then I should see the Test Offer heading
#   Then I fill the Name with "UP2"
#   Then I click on the No product
#   Then I enter the product "SOCKS"
#   Then I select the product "SOCKS" from the dropdown
#   Then I click on discount value and enter Upsell discount value "3"
#   And I click on Save btn
#   And I clicked on Save and Close button
#   Then I enable all upsell toggles
#   And I click on Back Button
  



# Scenario: Create a new Upsell offer with Product In Cart(Equal to)(Discount:Percentage)
#   Given I am on the login page
#   When I enter "saad@cartpanda.com" in email field
#   And I enter "Vista123+@" in password field
#   And I click on Signin button
#   Then I should see Select store Page
#   When I click on "msaad" button
#   Then I should see Dashboard Page
#   Then I click on cross button from the Support Icon
#   And I click on One Click Upsell btn in sidebar
#   Then I should see the One Click Upsell heading
#   When I click on the Add Upsell button
#   Then I should see Affiliate field
#   Then I fill the Name field with "Test Offer(Product In Cart=Equal to)(Percentage)"
#   And I click on rule and select Product in cart
#   And I select operator "equal-to"
#   Then I enter the product "DROP SHIRT"
#   Then I select the product "DROP SHIRT" from the dropdown
#   And I click on Save btn
#   And I click on Save and Close btn
#   Then I should see the Test Offer heading
#   Then I click on Add new step button and select Add Upsell
#   Then I fill the Name with "UP1"
#   Then I click on the No product
#   Then I enter the product "DROP SHIRT"
#   Then I select the product "DROP SHIRT" from the dropdown
#   And I click on Discount Type and select percentage from dropdown for Upsell offer
#   Then I click on discount value and enter Upsell discount value "50"
#   And I click on Save btn
#   And I clicked on Save and Close button
#   And I click on plus icon and select add upsell
#   Then I should see the Test Offer heading
#   Then I fill the Name with "UP2"
#   Then I click on the No product
#   Then I enter the product "SOCKS"
#   Then I select the product "SOCKS" from the dropdown
#   And I click on Discount Type and select percentage from dropdown for Upsell offer
#   Then I click on discount value and enter Upsell discount value "50"
#   And I click on Save btn
#   And I clicked on Save and Close button
#   Then I enable all upsell toggles
#   And I click on Back Button


#   Scenario: Create a new Upsell offer with Product In Cart(Different)(Discount:Fixed)
#   Given I am on the login page
#   When I enter "saad@cartpanda.com" in email field
#   And I enter "Vista123+@" in password field
#   And I click on Signin button
#   Then I should see Select store Page
#   When I click on "msaad" button
#   Then I should see Dashboard Page
#   Then I click on cross button from the Support Icon
#   And I click on One Click Upsell btn in sidebar
#   Then I should see the One Click Upsell heading
#   When I click on the Add Upsell button
#   Then I should see Affiliate field
#   Then I fill the Name field with "Test Offer(Product In Cart=Different)(Fixed)"
#   And I click on rule and select Product in cart
#   And I select operator "not-equal-to"
#   Then I enter the product "DROP SHIRT"
#   Then I select the product "DROP SHIRT" from the dropdown
#   And I click on Save btn
#   And I click on Save and Close btn
#   Then I should see the Test Offer heading
#   Then I click on Add new step button and select Add Upsell
#   Then I fill the Name with "UP1"
#   Then I click on the No product
#   Then I enter the product "DROP SHIRT"
#   Then I select the product "DROP SHIRT" from the dropdown
#   Then I click on discount value and enter Upsell discount value "3"
#   And I click on Save btn
#   And I clicked on Save and Close button
#   And I click on plus icon and select add upsell
#   Then I should see the Test Offer heading
#   Then I fill the Name with "UP2"
#   Then I click on the No product
#   Then I enter the product "SOCKS"
#   Then I select the product "SOCKS" from the dropdown
#   Then I click on discount value and enter Upsell discount value "3"
#   And I click on Save btn
#   And I clicked on Save and Close button
#   Then I enable all upsell toggles
#   And I click on Back Button






#   Scenario: Create a new Upsell offer with Product In Cart(Different)(Discount:Percentage)
#   Given I am on the login page
#   When I enter "saad@cartpanda.com" in email field
#   And I enter "Vista123+@" in password field
#   And I click on Signin button
#   Then I should see Select store Page
#   When I click on "msaad" button
#   Then I should see Dashboard Page
#   Then I click on cross button from the Support Icon
#   And I click on One Click Upsell btn in sidebar
#   Then I should see the One Click Upsell heading
#   When I click on the Add Upsell button
#   Then I should see Affiliate field
#   Then I fill the Name field with "Test Offer(Product In Cart=Different)(Percentage)"
#   And I click on rule and select Product in cart
#   And I select operator "not-equal-to"
#   Then I enter the product "DROP SHIRT"
#   Then I select the product "DROP SHIRT" from the dropdown
#   And I click on Save btn
#   And I click on Save and Close btn
#   Then I should see the Test Offer heading
#   Then I click on Add new step button and select Add Upsell
#   Then I fill the Name with "UP1"
#   Then I click on the No product
#   Then I enter the product "DROP SHIRT"
#   Then I select the product "DROP SHIRT" from the dropdown
#   And I click on Discount Type and select percentage from dropdown for Upsell offer
#   Then I click on discount value and enter Upsell discount value "3"
#   And I click on Save btn
#   And I clicked on Save and Close button
#   And I click on plus icon and select add upsell
#   Then I should see the Test Offer heading
#   Then I fill the Name with "UP2"
#   Then I click on the No product
#   Then I enter the product "SOCKS"
#   Then I select the product "SOCKS" from the dropdown
#   And I click on Discount Type and select percentage from dropdown for Upsell offer
#   Then I click on discount value and enter Upsell discount value "3"
#   And I click on Save btn
#   And I clicked on Save and Close button
#   Then I enable all upsell toggles
#   And I click on Back Button






  @NewUpsellOfferforAffiliate(ProductInCart)



#   Scenario: Create a new Upsell offer for Affiliate with Product In Cart(Equal to)(Discount:Fixed)
#   Given I am on the login page
#   When I enter "saad@cartpanda.com" in email field
#   And I enter "Vista123+@" in password field
#   And I click on Signin button
#   Then I should see Select store Page
#   When I click on "msaad" button
#   Then I should see Dashboard Page
#   Then I click on cross button from the Support Icon
#   And I click on One Click Upsell btn in sidebar
#   Then I should see the One Click Upsell heading
#   When I click on the Add Upsell button
#   Then I should see Affiliate field
#   Then I fill the Name field with "Upsell Offer with Affiliate(Product In Cart=Equal to)(Fixed)"
#   Then I click on search Affiliate field and select "ZT STORE2"
#   And I click on rule and select Product in cart
#   And I select operator "equal-to"
#   Then I enter the product "DROP SHIRT"
#   Then I select the product "DROP SHIRT" from the dropdown
#   And I click on Save btn
#   And I click on Save and Close btn
#   Then I should see the Test Offer heading
#   Then I click on Add new step button and select Add Upsell
#   Then I fill the Name with "UP1"
#   Then I click on the No product
#   Then I enter the product "DROP SHIRT"
#   Then I select the product "DROP SHIRT" from the dropdown
#   Then I click on discount value and enter Upsell discount value "3"
#   And I click on Save btn
#   And I clicked on Save and Close button
#   And I click on plus icon and select add upsell
#   Then I should see the Test Offer heading
#   Then I fill the Name with "UP2"
#   Then I click on the No product
#   Then I enter the product "SOCKS"
#   Then I select the product "SOCKS" from the dropdown
#   Then I click on discount value and enter Upsell discount value "3"
#   And I click on Save btn
#   And I clicked on Save and Close button
#   Then I enable all upsell toggles
#   And I click on Back Button
  



# Scenario: Create a new Upsell offer for Affiliate with Product In Cart(Equal to)(Discount:Percentage)
#   Given I am on the login page
#   When I enter "saad@cartpanda.com" in email field
#   And I enter "Vista123+@" in password field
#   And I click on Signin button
#   Then I should see Select store Page
#   When I click on "msaad" button
#   Then I should see Dashboard Page
#   Then I click on cross button from the Support Icon
#   And I click on One Click Upsell btn in sidebar
#   Then I should see the One Click Upsell heading
#   When I click on the Add Upsell button
#   Then I should see Affiliate field
#   Then I fill the Name field with "Upsell Offer with Affiliate(Product In Cart=Equal to)(Percentage)"
#   Then I click on search Affiliate field and select "ZT STORE2"
#   And I click on rule and select Product in cart
#   And I select operator "equal-to"
#   Then I enter the product "DROP SHIRT"
#   Then I select the product "DROP SHIRT" from the dropdown
#   And I click on Save btn
#   And I click on Save and Close btn
#   Then I should see the Test Offer heading
#   Then I click on Add new step button and select Add Upsell
#   Then I fill the Name with "UP1"
#   Then I click on the No product
#   Then I enter the product "DROP SHIRT"
#   Then I select the product "DROP SHIRT" from the dropdown
#   And I click on Discount Type and select percentage from dropdown for Upsell offer
#   Then I click on discount value and enter Upsell discount value "50"
#   And I click on Save btn
#   And I clicked on Save and Close button
#   And I click on plus icon and select add upsell
#   Then I should see the Test Offer heading
#   Then I fill the Name with "UP2"
#   Then I click on the No product
#   Then I enter the product "SOCKS"
#   Then I select the product "SOCKS" from the dropdown
#   And I click on Discount Type and select percentage from dropdown for Upsell offer
#   Then I click on discount value and enter Upsell discount value "50"
#   And I click on Save btn
#   And I clicked on Save and Close button
#   Then I enable all upsell toggles
#   And I click on Back Button


#   Scenario: Create a new Upsell offer for Affiliate with Product In Cart(Different)(Discount:Fixed)
#   Given I am on the login page
#   When I enter "saad@cartpanda.com" in email field
#   And I enter "Vista123+@" in password field
#   And I click on Signin button
#   Then I should see Select store Page
#   When I click on "msaad" button
#   Then I should see Dashboard Page
#   Then I click on cross button from the Support Icon
#   And I click on One Click Upsell btn in sidebar
#   Then I should see the One Click Upsell heading
#   When I click on the Add Upsell button
#   Then I should see Affiliate field
#   Then I fill the Name field with "Upsell Offer with Affiliate(Product In Cart=Different)(Fixed)"
#   Then I click on search Affiliate field and select "ZT STORE2"
#   And I click on rule and select Product in cart
#   And I select operator "not-equal-to"
#   Then I enter the product "DROP SHIRT"
#   Then I select the product "DROP SHIRT" from the dropdown
#   And I click on Save btn
#   And I click on Save and Close btn
#   Then I should see the Test Offer heading
#   Then I click on Add new step button and select Add Upsell
#   Then I fill the Name with "UP1"
#   Then I click on the No product
#   Then I enter the product "DROP SHIRT"
#   Then I select the product "DROP SHIRT" from the dropdown
#   Then I click on discount value and enter Upsell discount value "3"
#   And I click on Save btn
#   And I clicked on Save and Close button
#   And I click on plus icon and select add upsell
#   Then I should see the Test Offer heading
#   Then I fill the Name with "UP2"
#   Then I click on the No product
#   Then I enter the product "SOCKS"
#   Then I select the product "SOCKS" from the dropdown
#   Then I click on discount value and enter Upsell discount value "3"
#   And I click on Save btn
#   And I clicked on Save and Close button
#   Then I enable all upsell toggles
#   And I click on Back Button






#   Scenario: Create a new Upsell offer for Affiliate with Product In Cart(Different)(Discount:Percentage)
#   Given I am on the login page
#   When I enter "saad@cartpanda.com" in email field
#   And I enter "Vista123+@" in password field
#   And I click on Signin button
#   Then I should see Select store Page
#   When I click on "msaad" button
#   Then I should see Dashboard Page
#   Then I click on cross button from the Support Icon
#   And I click on One Click Upsell btn in sidebar
#   Then I should see the One Click Upsell heading
#   When I click on the Add Upsell button
#   Then I should see Affiliate field
#   Then I fill the Name field with "Upsell Offer with Affiliate(Product In Cart=Different)(Percentage)"
#   Then I click on search Affiliate field and select "ZT STORE2"
#   And I click on rule and select Product in cart
#   And I select operator "not-equal-to"
#   Then I enter the product "DROP SHIRT"
#   Then I select the product "DROP SHIRT" from the dropdown
#   And I click on Save btn
#   And I click on Save and Close btn
#   Then I should see the Test Offer heading
#   Then I click on Add new step button and select Add Upsell
#   Then I fill the Name with "UP1"
#   Then I click on the No product
#   Then I enter the product "DROP SHIRT"
#   Then I select the product "DROP SHIRT" from the dropdown
#   And I click on Discount Type and select percentage from dropdown for Upsell offer
#   Then I click on discount value and enter Upsell discount value "3"
#   And I click on Save btn
#   And I clicked on Save and Close button
#   And I click on plus icon and select add upsell
#   Then I should see the Test Offer heading
#   Then I fill the Name with "UP2"
#   Then I click on the No product
#   Then I enter the product "SOCKS"
#   Then I select the product "SOCKS" from the dropdown
#   And I click on Discount Type and select percentage from dropdown for Upsell offer
#   Then I click on discount value and enter Upsell discount value "3"
#   And I click on Save btn
#   And I clicked on Save and Close button
#   Then I enable all upsell toggles
#   And I click on Back Button






  @NewUpsellOfferExternal(Affiliate)(ProductInCart)


# Scenario: Create a new External Upsell offer(Affiliate) with Product In Cart(Equal to)(Discount:Fixed)
#   Given I am on the login page
#   When I enter "saad@cartpanda.com" in email field
#   And I enter "Vista123+@" in password field
#   And I click on Signin button
#   Then I should see Select store Page
#   When I click on "msaad" button
#   Then I should see Dashboard Page
#   Then I click on cross button from the Support Icon
#   And I click on One Click Upsell btn in sidebar
#   Then I should see the One Click Upsell heading
#   When I click on Upsell External button
#   When I click on the Create Upsell button
#   Then I should see Affiliate field
#   Then I fill the Name field with "ExternalOffer(Affiliate)(Product In Cart=Equal to)(Fixed)"
#   Then I enter the external page URL "https://exocu-staging.weebly.com" in the External page field
#   Then I click on search Affiliate field and select "SaadTest"
#   And I click on rule and select Product in cart
#   And I select operator "equal-to"
#   Then I enter the product "DROP SHIRT"
#   Then I select the product "DROP SHIRT" from the dropdown
#   And I click on Save btn
#   And I click on Save and Close btn
#   Then I click on the upsell offer "ExternalOffer(Affiliate)(Product In Cart=Equal to)(Fixed)"
#   And I click on plus icon and select add upsell
#   Then I fill the Name with "UP1"
#   Then I click on the No product
#   Then I enter the product "DROP SHIRT"
#   Then I select the product "DROP SHIRT" from the dropdown
#   Then I click on discount value and enter Upsell discount value "3"
#   And I click on Save btn
#   And I clicked on Save and Close button
#   And I click on plus icon and select add upsell
#   Then I should see the Test Offer heading
#   Then I fill the Name with "UP2"
#   Then I click on the No product
#   Then I enter the product "SOCKS"
#   Then I select the product "SOCKS" from the dropdown
#   Then I click on discount value and enter Upsell discount value "3"
# Then I enter the external page URL "https://exocu-staging.weebly.com" in the Offer Page URL
#   And I click on Save btn
#   And I clicked on Save and Close button
#   Then I enable all upsell toggles
#   And I click on Back Button
  



# Scenario: Create a new External Upsell offer(Affiliate) with Product In Cart(Equal to)(Discount:Percentage)
#   Given I am on the login page
#   When I enter "saad@cartpanda.com" in email field
#   And I enter "Vista123+@" in password field
#   And I click on Signin button
#   Then I should see Select store Page
#   When I click on "msaad" button
#   Then I should see Dashboard Page
#   Then I click on cross button from the Support Icon
#   And I click on One Click Upsell btn in sidebar
#   Then I should see the One Click Upsell heading
#   When I click on Upsell External button
#   When I click on the Create Upsell button
#   Then I should see Affiliate field
#   Then I fill the Name field with "External Offer(Affiliate)(Product In Cart=Equal to)(Percentage)"
#   Then I enter the external page URL "https://exocu-staging.weebly.com" in the External page field
#   Then I click on search Affiliate field and select "SaadTest"
#   And I click on rule and select Product in cart
#   And I select operator "equal-to"
#   Then I enter the product "DROP SHIRT"
#   Then I select the product "DROP SHIRT" from the dropdown
#   And I click on Save btn
#   And I click on Save and Close btn
#   Then I click on the upsell offer "External Offer(Affiliate)(Product In Cart=Equal to)(Percentage)"
#   And I click on plus icon and select add upsell
#   Then I fill the Name with "UP1"
#   Then I click on the No product
#   Then I enter the product "DROP SHIRT"
#   Then I select the product "DROP SHIRT" from the dropdown
#   And I click on Discount Type and select percentage from dropdown for Upsell offer
#   Then I click on discount value and enter Upsell discount value "50"
#   And I click on Save btn
#   And I clicked on Save and Close button
#   And I click on plus icon and select add upsell
#   Then I should see the Test Offer heading
#   Then I fill the Name with "UP2"
#   Then I click on the No product
#   Then I enter the product "SOCKS"
#   Then I select the product "SOCKS" from the dropdown
#   And I click on Discount Type and select percentage from dropdown for Upsell offer
#  Then I click on discount value and enter Upsell discount value "50"
#  Then I enter the external page URL "https://exocu-staging.weebly.com" in the Offer Page URL
#   And I click on Save btn
#   And I clicked on Save and Close button
#   Then I enable all upsell toggles
#   And I click on Back Button


#   Scenario: Create a new External Upsell offer(Affiliate) with Product In Cart(Different)(Discount:Fixed)
#   Given I am on the login page
#   When I enter "saad@cartpanda.com" in email field
#   And I enter "Vista123+@" in password field
#   And I click on Signin button
#   Then I should see Select store Page
#   When I click on "msaad" button
#   Then I should see Dashboard Page
#   Then I click on cross button from the Support Icon
#   And I click on One Click Upsell btn in sidebar
#   Then I should see the One Click Upsell heading
#   When I click on Upsell External button
#   When I click on the Create Upsell button
#   Then I should see Affiliate field
#   Then I fill the Name field with "External Offer(Affiliate)(Product In Cart=Different)(Fixed)"
#   Then I enter the external page URL "https://exocu-staging.weebly.com" in the External page field
#   Then I click on search Affiliate field and select "SaadTest"
#   And I click on rule and select Product in cart
#   And I select operator "not-equal-to"
#   Then I enter the product "DROP SHIRT"
#   Then I select the product "DROP SHIRT" from the dropdown
#   And I click on Save btn
#   And I click on Save and Close btn
#   Then I click on the upsell offer "External Offer(Affiliate)(Product In Cart=Different)(Fixed)"
#   And I click on plus icon and select add upsell
#   Then I fill the Name with "UP1"
#   Then I click on the No product
#   Then I enter the product "DROP SHIRT"
#   Then I select the product "DROP SHIRT" from the dropdown
#   Then I click on discount value and enter Upsell discount value "3"
#   And I click on Save btn
#   And I clicked on Save and Close button
#   And I click on plus icon and select add upsell
#   Then I should see the Test Offer heading
#   Then I fill the Name with "UP2"
#   Then I click on the No product
#   Then I enter the product "SOCKS"
#   Then I select the product "SOCKS" from the dropdown
#   Then I click on discount value and enter Upsell discount value "3"
# Then I enter the external page URL "https://exocu-staging.weebly.com" in the Offer Page URL
#   And I click on Save btn
#   And I clicked on Save and Close button
#   Then I enable all upsell toggles
#   And I click on Back Button






#   Scenario: Create a new External Upsell offer(Affiliate) with Product In Cart(Different)(Discount:Percentage)
#   Given I am on the login page
#   When I enter "saad@cartpanda.com" in email field
#   And I enter "Vista123+@" in password field
#   And I click on Signin button
#   Then I should see Select store Page
#   When I click on "msaad" button
#   Then I should see Dashboard Page
  # Then I click on cross button from the Support Icon
#   And I click on One Click Upsell btn in sidebar
#   Then I should see the One Click Upsell heading
#   When I click on Upsell External button
#   When I click on the Create Upsell button
#   Then I should see Affiliate field
#   Then I fill the Name field with "External Offer(Affiliate)(Product In Cart=Different)(Percentage)"
# Then I enter the external page URL "https://exocu-staging.weebly.com" in the External page field
# Then I click on search Affiliate field and select "SaadTest"
#   And I click on rule and select Product in cart
#   And I select operator "not-equal-to"
#   Then I enter the product "DROP SHIRT"
#   Then I select the product "DROP SHIRT" from the dropdown
#   And I click on Save btn
#   And I click on Save and Close btn
#   Then I click on the upsell offer "External Offer(Affiliate)(Product In Cart=Different)(Percentage)"
#   And I click on plus icon and select add upsell
#   Then I fill the Name with "UP1"
#   Then I click on the No product
#   Then I enter the product "DROP SHIRT"
#   Then I select the product "DROP SHIRT" from the dropdown
#   And I click on Discount Type and select percentage from dropdown for Upsell offer
#   Then I click on discount value and enter Upsell discount value "3"
#   And I click on Save btn
#   And I clicked on Save and Close button
#   And I click on plus icon and select add upsell
#   Then I should see the Test Offer heading
#   Then I fill the Name with "UP2"
#   Then I click on the No product
#   Then I enter the product "SOCKS"
#   Then I select the product "SOCKS" from the dropdown
#   And I click on Discount Type and select percentage from dropdown for Upsell offer
#   Then I click on discount value and enter Upsell discount value "3"
# Then I enter the external page URL "https://exocu-staging.weebly.com" in the Offer Page URL
#   And I click on Save btn
#   And I clicked on Save and Close button
#   Then I enable all upsell toggles
#   And I click on Back Button




# Product collection in Cart 


# Scenario: Create a new Upsell offer [Product collection in Cart(Equal)]
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
#   Then I fill the Name field with "Test OfferProduct collection in Cart(Equal)"
#   And I click on rule and select Product Collection in cart
#   And I select operator "equal-to"
#   Then I enter the product collection "Testing"
#   And  I select the product collection "Testing" from the dropdown
#   And I click on Save and Close btn
#   Then I should see the Test Offer heading
#   Then I click on Add new step button and select Add Upsell
#   Then I fill the Name with "UP1"
#   Then I click on the No product
#   Then I enter the product "DROP SHIRT"
#   Then I select the product "DROP SHIRT" from the dropdown
#   And I click on Save btn
#   And I clicked on Save and Close button
#   And I click on plus icon and select add upsell
#   Then I should see the Test Offer heading
#   Then I fill the Name with "UP2"
#   Then I click on the No product
#   Then I enter the product "SOCKS"
#   Then I select the product "SOCKS" from the dropdown
#   And I click on Save btn
#   And I clicked on Save and Close button
#   Then I enable all upsell toggles
#   And I click on Back Button
   









# Scenario: Create a new Upsell offer [Product collection in Cart(Different)]
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
#   Then I fill the Name field with "Test OfferProduct collection in Cart(Different)"
#   And I click on rule and select Product Collection in cart
#   And I select operator "not-equal-to"
#   Then I enter the product collection "Testing"
#   And  I select the product collection "Testing" from the dropdown
#   And I click on Save and Close btn
#   Then I should see the Test Offer heading
#   Then I click on Add new step button and select Add Upsell
#   Then I fill the Name with "UP1"
#   Then I click on the No product
#   Then I enter the product "DROP SHIRT"
#   Then I select the product "DROP SHIRT" from the dropdown
#   And I click on Save btn
#   And I clicked on Save and Close button
#   And I click on plus icon and select add upsell
#   Then I should see the Test Offer heading
#   Then I fill the Name with "UP2"
#   Then I click on the No product
#   Then I enter the product "SOCKS"
#   Then I select the product "SOCKS" from the dropdown
#   And I click on Save btn
#   And I clicked on Save and Close button
#   Then I enable all upsell toggles
#   And I click on Back Button
   


#    Scenario: Create a new Upsell offer (Affiliate)[Product collection in Cart(Equal)]
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
#   Then I fill the Name field with "Test Offer (Affiliate)(Product collection in Cart(Equal))"
#    Then I click on search Affiliate field and select "Z TESTAFF"
#   And I click on rule and select Product Collection in cart
#   And I select operator "equal-to"
#   Then I enter the product collection "Testing"
#   And  I select the product collection "Testing" from the dropdown
#   And I click on Save and Close btn
#   Then I should see the Test Offer heading
#   Then I click on Add new step button and select Add Upsell
#   Then I fill the Name with "UP1"
#   Then I click on the No product
#   Then I enter the product "DROP SHIRT"
#   Then I select the product "DROP SHIRT" from the dropdown
#   And I click on Save btn
#   And I clicked on Save and Close button
#   And I click on plus icon and select add upsell
#   Then I should see the Test Offer heading
#   Then I fill the Name with "UP2"
#   Then I click on the No product
#   Then I enter the product "SOCKS"
#   Then I select the product "SOCKS" from the dropdown
#   And I click on Save btn
#   And I clicked on Save and Close button
#   Then I enable all upsell toggles
#   And I click on Back Button
   









Scenario: Create a new Upsell offer (Affiliate)[Product collection in Cart(Different)]
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
  Then I fill the Name field with "Test Offer (Affiliate)((Product collection in Cart(Different)"
  Then I click on search Affiliate field and select "Z TESTAFF"
  And I click on rule and select Product Collection in cart
  And I select operator "not-equal-to"
  Then I enter the product collection "Testing"
  And  I select the product collection "Testing" from the dropdown
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
  Then I enable all upsell toggles
  And I click on Back Button
   



# External Upsell with and without affiliate[Rule: Product collection in cart]


   
# Scenario: Create a new External Upsell offer [Product collection in Cart(Equal)]
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
#   Then I fill the Name field with "Test OfferProduct collection in Cart(Equal)"
#   And I click on rule and select Product Collection in cart
#   And I select operator "equal-to"
#   Then I enter the product collection "Testing"
#   And  I select the product collection "Testing" from the dropdown
#   And I click on Save and Close btn
#   Then I should see the Test Offer heading
#   Then I click on Add new step button and select Add Upsell
#   Then I fill the Name with "UP1"
#   Then I click on the No product
#   Then I enter the product "DROP SHIRT"
#   Then I select the product "DROP SHIRT" from the dropdown
#   And I click on Save btn
#   And I clicked on Save and Close button
#   And I click on plus icon and select add upsell
#   Then I should see the Test Offer heading
#   Then I fill the Name with "UP2"
#   Then I click on the No product
#   Then I enter the product "SOCKS"
#   Then I select the product "SOCKS" from the dropdown
#   And I click on Save btn
#   And I clicked on Save and Close button
#   Then I enable all upsell toggles
#   And I click on Back Button
   









# Scenario: Create a new External Upsell offer [Product collection in Cart(Different)]
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
#   Then I fill the Name field with "Test OfferProduct collection in Cart(Different)"
#   And I click on rule and select Product Collection in cart
#   And I select operator "not-equal-to"
#   Then I enter the product collection "Testing"
#   And  I select the product collection "Testing" from the dropdown
#   And I click on Save and Close btn
#   Then I should see the Test Offer heading
#   Then I click on Add new step button and select Add Upsell
#   Then I fill the Name with "UP1"
#   Then I click on the No product
#   Then I enter the product "DROP SHIRT"
#   Then I select the product "DROP SHIRT" from the dropdown
#   And I click on Save btn
#   And I clicked on Save and Close button
#   And I click on plus icon and select add upsell
#   Then I should see the Test Offer heading
#   Then I fill the Name with "UP2"
#   Then I click on the No product
#   Then I enter the product "SOCKS"
#   Then I select the product "SOCKS" from the dropdown
#   And I click on Save btn
#   And I clicked on Save and Close button
#   Then I enable all upsell toggles
#   And I click on Back Button
   


#    Scenario: Create a new External Upsell offer (Affiliate)[Product collection in Cart(Equal)]
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
#   Then I fill the Name field with "Test Offer (Affiliate)(Product collection in Cart(Equal))"
#    Then I click on search Affiliate field and select "Z TESTAFF"
#   And I click on rule and select Product Collection in cart
#   And I select operator "equal-to"
#   Then I enter the product collection "Testing"
#   And  I select the product collection "Testing" from the dropdown
#   And I click on Save and Close btn
#   Then I should see the Test Offer heading
#   Then I click on Add new step button and select Add Upsell
#   Then I fill the Name with "UP1"
#   Then I click on the No product
#   Then I enter the product "DROP SHIRT"
#   Then I select the product "DROP SHIRT" from the dropdown
#   And I click on Save btn
#   And I clicked on Save and Close button
#   And I click on plus icon and select add upsell
#   Then I should see the Test Offer heading
#   Then I fill the Name with "UP2"
#   Then I click on the No product
#   Then I enter the product "SOCKS"
#   Then I select the product "SOCKS" from the dropdown
#   And I click on Save btn
#   And I clicked on Save and Close button
#   Then I enable all upsell toggles
#   And I click on Back Button
   









Scenario: Create a new External Upsell offer (Affiliate)[Product collection in Cart(Different)]
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
  Then I fill the Name field with "Test Offer (Affiliate)((Product collection in Cart(Different)"
  Then I click on search Affiliate field and select "Z TESTAFF"
  And I click on rule and select Product Collection in cart
  And I select operator "not-equal-to"
  Then I enter the product collection "Testing"
  And  I select the product collection "Testing" from the dropdown
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
  Then I enable all upsell toggles
  And I click on Back Button
   