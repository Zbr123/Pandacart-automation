Feature: New Product Creation
   # Scenario: User creates a Digital product
   #  Given I am on the login page
   #  When I enter "saad@cartpanda.com" in email field
   #  And I enter "Vista123+@" in password field
   #  And I click on Signin button
   #  Then I should see Select store Page
   #  When I click on "msaad" button    
   #  Then I should see Dashboard Page
   #  Then I click on Product btn in sidebar
   #  Then I click on All Products
   #  Then I should see the Products heading
   #  Then I click on Add Product button
   #  Then I click on digital product option
   #  Then I fill the product form with the following data:
   #  | field         | value        |
   #  | title         | Test Product1|
   #  | access_inst   | Test          |
   #  | price       | 12.00        | 
   #  | compare_price | 12.00        |
  
   #  Then I upload the image
   #   Then I click on the Save product button
   #   Then I click on Product btn in sidebar
   #   Then I click on All Products



  # Scenario: User creates a Physical product
  #   Given I am on the login page
  #   When I enter "saad@cartpanda.com" in email field
  #   And I enter "Vista123+@" in password field
  #   And I click on Signin button
  #   Then I should see Select store Page
  #   When I click on "msaad" button    
  #   Then I should see Dashboard Page
  #   Then I click on Product btn in sidebar
  #   Then I click on All Products
  #   Then I should see the Products heading
  #   Then I click on Add Product button
  #   And I click on Physical product option
  #   Then I fill the product form with the following data:
  #   | field         | value        |
  #   | title         | Test Product1|
  #   | access_inst   | Test          |
  #   | price       | 12.00        | 
  #   | compare_price | 12.00        |
  
  #    Then I upload the image
  #    Then I click on the Save product button
  #    Then I click on Product btn in sidebar
  #    Then I click on All Products






#  Scenario: User creates a Physical product
#     Given I am on the login page
#     When I enter "saad@cartpanda.com" in email field
#     And I enter "Vista123+@" in password field
#     And I click on Signin button
#     Then I should see Select store Page
#     When I click on "msaad" button    
#     Then I should see Dashboard Page
#     Then I click on Product btn in sidebar
#     Then I click on All Products
#     Then I should see the Products heading
#     Then I click on Add Product button
#     And I click on Physical product option
#     Then I fill the product form with the following data:
#     | field         | value        |
#     | title         | Test Product1|
#     | price       | 12.00        | 
#     | compare_price | 12.00        |
  
#       Then I upload the image
#       Then I click on enable checkbox to fill the Markets Details 
#       Then I fill the required fields with following data 
#      | field         | value             |
#      | Sales Page    |https://example.com|
#      |   VSL         |https://example.com|
#      |Return Address |test               |
#      |Product purpose|testing purpose    |
#   And I select "Eagle Labs" from the supplier list 
#      Then I click on the Save product button
#      Then I click on Product btn in sidebar
#      Then I click on All Products




Scenario: User creates a Digital product #(Marketplace)
    Given I am on the login page
    When I enter "saad@cartpanda.com" in email field
    And I enter "Vista123+@" in password field
    And I click on Signin button
    Then I should see Select store Page
    When I click on "msaad" button    
    Then I should see Dashboard Page
    Then I click on Product btn in sidebar
    Then I click on All Products
    Then I should see the Products heading
    Then I click on Add Product button
    Then I click on digital product option
    Then I fill the product form with the following data:
    | field         | value        |
    | title         | Test Product1|
    | access_inst   | Test          |
    | price       | 12.00        | 
    | compare_price | 12.00        |
  
    Then I upload the image
    Then I click on enable checkbox to fill the Markets Details 
      Then I fill the required fields with following data 
     | field         | value             |
     | Sales Page    |https://example.com|
     |   VSL         |https://example.com|
     |Return Address |test               |
     |Product purpose|testing purpose    |
     Then I click on the Save product button
     Then I click on Product btn in sidebar
     Then I click on All Products