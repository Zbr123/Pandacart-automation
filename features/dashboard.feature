 Feature: Dashboard Functionality
   Scenario: User sees the dashboard 
    Given I am on the login page
    When I enter "syedzubairalam123@gmail.com" in email field
    And I enter "Vista123+" in password field
    And I click on Signin button
    Then I should see Select store Page
    When I click on "ZubairTest" button    
    Then I should see Dashboard Page
    Then I click on Product btn in sidebar
    Then I click on All Products
    Then I should see the Products heading
    Then I click on Add Product button
    Then I click on Physical product option
    Then I fill the product form with the following data:
  | field         | value        |
  | title         | Test Product1 |
  | price         | 12.00        |
  | compare_price | 12.00        |
  | sku           | TEST123      |
  | barcode       | 123456789    |

    Then I click on the Save product button
    Then I click on Product btn in sidebar
    Then I click on All Products
    Then I should see the Product Page heading
    Then I search for product "Test Product1"








