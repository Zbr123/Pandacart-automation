Feature: Customers Creation
# Scenario: Create a New Customer
#   Given I am on the login page
#   When I enter "saad@cartpanda.com" in email field
#   And I enter "Vista123+@" in password field
#   And I click on Signin button
#   Then I should see Select store Page
#   When I click on "msaad" button
#   Then I should see Dashboard Page
#   And I click on Customer btn in sidebar
#   Then I click on Add Customers button
#   Then I fill the form with following details:
#       | field               | value              |
#       | contact first name  | John               |
#       | contact last name   | Doe                |
#       | email               | john.doe@test.com  |
#       | contact phone       | 5511999999999      |
#       | address first name  | John               |
#       | address last name   | Doe                |
#       | company             | Cartpanda          |
#       | cpf                 | 12345678900        |
#       | address line 1      | Street 123         |
#       | address line 2      | Apt 10             |
#       | city                | Sao Paulo          |
#       | state               | SP                 |
#       | zip                 | 01000              |
#       | address phone       | 5511888888888      |
#       | notes               | Smoke test user    |
#       | tags                | VIP, test          |

#     And I save the customer






  Scenario: Create a New Customer(Brazil address) with  only Customer accepts e-mail marketing checkbox enabled
  Given I am on the login page
  When I enter "saad@cartpanda.com" in email field
  And I enter "Vista123+@" in password field
  And I click on Signin button
  Then I should see Select store Page
  When I click on "msaad" button
  Then I should see Dashboard Page
  And I click on Customer btn in sidebar
  Then I click on Add Customers button
  Then I click on the Customer accepts email checkbox
  Then I fill the form with following details:
      | field               | value              |
      | contact first name  | John               |
      | contact last name   | Doe                |
      | email               | john.doe@test.com  |
      | contact phone       | 5511999999999      |
      | address first name  | John               |
      | address last name   | Doe                |
      | company             | Cartpanda          |
      | cpf                 | 12345678900        |
      | address line 1      | Street 123         |
      | address line 2      | Apt 10             |
      | city                | Sao Paulo          |
      | state               | SP                 |
      | zip                 | 01000              |
      | address phone       | 5511888888888      |
      | notes               | Smoke test user    |
      | tags                | VIP, test          |

    And I save the customer





 Scenario: Create a New Customer(Brazil address) with only Customer is tax exempt checkbox enabled
  Given I am on the login page
  When I enter "saad@cartpanda.com" in email field
  And I enter "Vista123+@" in password field
  And I click on Signin button
  Then I should see Select store Page
  When I click on "msaad" button
  Then I should see Dashboard Page
  And I click on Customer btn in sidebar
  Then I click on Add Customers button
  Then I click on the Customer is tax exempt checkbox 
  Then I fill the form with following details:
      | field               | value              |
      | contact first name  | John               |
      | contact last name   | Doe                |
      | email               | john.doe@test.com  |
      | contact phone       | 5511999999999      |
      | address first name  | John               |
      | address last name   | Doe                |
      | company             | Cartpanda          |
      | cpf                 | 12345678900        |
      | address line 1      | Street 123         |
      | address line 2      | Apt 10             |
      | city                | Sao Paulo          |
      | state               | SP                 |
      | zip                 | 01000              |
      | address phone       | 5511888888888      |
      | notes               | Smoke test user    |
      | tags                | VIP, test          |

    And I save the customer







  Scenario: Create a New Customer(Brazil address) with Customer is tax exempt and Customer accepts e-mail marketing checkbox enabled
  Given I am on the login page
  When I enter "saad@cartpanda.com" in email field
  And I enter "Vista123+@" in password field
  And I click on Signin button
  Then I should see Select store Page
  When I click on "msaad" button
  Then I should see Dashboard Page
  And I click on Customer btn in sidebar
  Then I click on Add Customers button
  Then I click on the Customer accepts email checkbox
  Then I click on the Customer is tax exempt checkbox 
  Then I fill the form with following details:
      | field               | value              |
      | contact first name  | John               |
      | contact last name   | Doe                |
      | email               | john.doe@test.com  |
      | contact phone       | 5511999999999      |
      | address first name  | John               |
      | address last name   | Doe                |
      | company             | Cartpanda          |
      | cpf                 | 12345678900        |
      | address line 1      | Street 123         |
      | address line 2      | Apt 10             |
      | city                | Sao Paulo          |
      | state               | SP                 |
      | zip                 | 01000              |
      | address phone       | 5511888888888      |
      | notes               | Smoke test user    |
      | tags                | VIP, test          |

    And I save the customer
