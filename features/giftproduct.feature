Feature: Gift Cards Product
# Scenario: Create a new Gift card product
#   Given I am on the login page
#   When I enter "saad@cartpanda.com" in email field
#   And I enter "Vista123+@" in password field
#   And I click on Signin button
#   Then I should see Select store Page
#   When I click on "msaad" button
#   Then I should see Dashboard Page
#   Then I click on Product btn in sidebar
#   And  I click on Gift cards from the products section 
#   Then I should see Gift Cards Heading 
#   And I click on Add Gift Card product
#   Then I enter product name "Gift Card Product"
#   And I click on enable minimum quantity checkbox
#   And I enter the quantity in the minimum input
#   And I click on enable maximum quantity checkbox
#   And I enter the quantity in the maximum input
#   Then I enter ammount in first denominations input box 
#   And I click on save products button



#   Scenario: Create a new Gift card product with Gift Card Image 
#   Given I am on the login page
#   When I enter "saad@cartpanda.com" in email field
#   And I enter "Vista123+@" in password field
#   And I click on Signin button
#   Then I should see Select store Page
#   When I click on "msaad" button
#   Then I should see Dashboard Page
#   Then I click on Product btn in sidebar
#   And  I click on Gift cards from the products section 
#   Then I should see Gift Cards Heading 
#   And I click on Add Gift Card product
#   Then I enter product name "Gift Card Product"
#   Then I upload the Image for the Gift Card 
#   And I click on enable minimum quantity checkbox
#   And I enter the quantity in the minimum input
#   And I click on enable maximum quantity checkbox
#   And I enter the quantity in the maximum input
#   Then I enter ammount in first denominations input box 
#   And I click on save products button




#  Scenario: Create a new Gift card product with Gift Card Image(Multiple Denominations)
#   Given I am on the login page
#   When I enter "saad@cartpanda.com" in email field
#   And I enter "Vista123+@" in password field
#   And I click on Signin button
#   Then I should see Select store Page
#   When I click on "msaad" button
#   Then I should see Dashboard Page
#   Then I click on Product btn in sidebar
#   And  I click on Gift cards from the products section 
#   Then I should see Gift Cards Heading 
#   And I click on Add Gift Card product
#   Then I enter product name "Gift Card Product"
  Then I upload the Image for the Gift Card 
#   And I click on enable minimum quantity checkbox
#   And I enter the quantity in the minimum input
#   And I click on enable maximum quantity checkbox
#   And I enter the quantity in the maximum input
#   Then I enter ammount in multiple denominations input box 
#   And I click on save products button



#  Scenario: Create a new Gift card product with Gift Card Image(Converting from Digital to Physical)
#   Given I am on the login page
#   When I enter "saad@cartpanda.com" in email field
#   And I enter "Vista123+@" in password field
#   And I click on Signin button
#   Then I should see Select store Page
#   When I click on "msaad" button
#   Then I should see Dashboard Page
#   Then I click on Product btn in sidebar
#   And  I click on Gift cards from the products section 
#   Then I should see Gift Cards Heading 
#   And I click on Add Gift Card product
#   Then I enter product name "Gift Card Product(Converted to Physical)"
#   Then I upload the Image for the Gift Card 
#   And I click on enable minimum quantity checkbox
#   And I enter the quantity in the minimum input
#   And I click on enable maximum quantity checkbox
#   And I enter the quantity in the maximum input
#   Then I enter ammount in multiple denominations input box 
#   And I click on save products button
#   Then I click on Actions button
#   And I select Convert To Physical from the dropdown 


#  Scenario: Create a new Gift card product with Gift Card Image(Markets:Filling Form)
#   Given I am on the login page
#   When I enter "saad@cartpanda.com" in email field
#   And I enter "Vista123+@" in password field
#   And I click on Signin button
#   Then I should see Select store Page
#   When I click on "msaad" button
#   Then I should see Dashboard Page
#   Then I click on Product btn in sidebar
#   And  I click on Gift cards from the products section 
#   Then I should see Gift Cards Heading 
#   And I click on Add Gift Card product
#   Then I enter product name "Gift Card Product"
#   Then I upload the Image for the Gift Card 
#   Then I click on enable checkbox to fill the Markets Details 
#   Then I fill the required fields with following data 
#      | field         | value             |
#      | Sales Page    |https://example.com|
#      |   VSL         |https://example.com|
#      |Return Address |test               |
#      |Product purpose|testing purpose    |
#   And I select "Eagle Labs" from the supplier list 
#   And I click on enable minimum quantity checkbox
#   And I enter the quantity in the minimum input
#   And I click on enable maximum quantity checkbox
#   And I enter the quantity in the maximum input
#   Then I enter ammount in multiple denominations input box 
#   And I click on save products button
  
  

#    Scenario: Create a new Gift card product with Gift Card Image(Markets:Copy from another product)
#   Given I am on the login page
#   When I enter "saad@cartpanda.com" in email field
#   And I enter "Vista123+@" in password field
#   And I click on Signin button
#   Then I should see Select store Page
#   When I click on "msaad" button
#   Then I should see Dashboard Page
#   Then I click on Product btn in sidebar
#   And  I click on Gift cards from the products section 
#   Then I should see Gift Cards Heading 
#   And I click on Add Gift Card product
#   Then I enter product name "Gift Card Product"
#   Then I upload the Image for the Gift Card 
#   Then I click on enable checkbox to fill the Markets Details 
#   Then I click on copy from another product
#   Then I click on the product tile and search "Drop shirt" 
#   Then I select the "DROP SHIRT" from the dropdown and click on Select button
#   Then I fill the required fields with following data 
#    | field         | value             |
#      |Return Address |test               |
#   And I click on enable minimum quantity checkbox
#   And I enter the quantity in the minimum input
#   And I click on enable maximum quantity checkbox
#   And I enter the quantity in the maximum input
#   Then I enter ammount in multiple denominations input box 
#   And I click on save products button
  
  


Scenario: Issue Gift Cards 
  Given I am on the login page
  When I enter "saad@cartpanda.com" in email field
  And I enter "Vista123+@" in password field
  And I click on Signin button
  Then I should see Select store Page
  When I click on "msaad" button
  Then I should see Dashboard Page
  Then I click on Product btn in sidebar
  And  I click on Gift cards from the products section 
  Then I should see Gift Cards Heading 
  And I click on Issue Gift Card
  Then I click on Initial Value Input box and enter "100" 
  Then I click on the customer field and enter "saadtest@cartpanda.com" and select it from the dropdown
  Then I click on save button 






  Scenario: Issue Gift Cards with expiration date(Change the Gift Card Name)
  Given I am on the login page
  When I enter "saad@cartpanda.com" in email field
  And I enter "Vista123+@" in password field
  And I click on Signin button
  Then I should see Select store Page
  When I click on "msaad" button
  Then I should see Dashboard Page
  Then I click on Product btn in sidebar
  And  I click on Gift cards from the products section 
  Then I should see Gift Cards Heading 
  And I click on Issue Gift Card
  Then I click on Code input box and remove the default code and enter "TEST GIFT CARD"
  Then I click on Initial Value Input box and enter "100" 
  Then I click on the customer field and enter "saadtest@cartpanda.com" and select it from the dropdown
  Then I click on set expiration date checkbox
  And I click on the date input box
  Then I click on save button 






  Scenario: Issue Gift Cards with expiration date 
  Given I am on the login page
  When I enter "saad@cartpanda.com" in email field
  And I enter "Vista123+@" in password field
  And I click on Signin button
  Then I should see Select store Page
  When I click on "msaad" button
  Then I should see Dashboard Page
  Then I click on Product btn in sidebar
  And  I click on Gift cards from the products section 
  Then I should see Gift Cards Heading 
  And I click on Issue Gift Card
  Then I click on Initial Value Input box and enter "100" 
  Then I click on the customer field and enter "saadtest@cartpanda.com" and select it from the dropdown
  Then I click on set expiration date checkbox
  And I click on the date input box
  Then I click on save button 