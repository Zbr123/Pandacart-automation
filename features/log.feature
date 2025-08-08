Feature: Login Functionality
  Scenario: User logs in successfully
    Given I am on the login page
    When I enter "syedzubairalam123@gmail.com" in email field
    And I enter "Vista123+" in password field
    And I click on Signin button
    Then I should see Select store Page
    When I click on "ZubairTest" button    
    Then I should see Dashboard Page