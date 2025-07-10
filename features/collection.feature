Feature: Collection Functionality
   Scenario: User add Smart_collection 
    Given I am on the login page
    When I enter "syedzubairalam123@gmail.com" in email field
    And I enter "Vista123+" in password field
    And I click on Signin button
    Then I should see Select store Page
    When I click on "ZubairTest" button    
    Then I should see Dashboard Page
    And  I click on Product btn in sidebar
    And I click on Collections
    Then I should see the Collections heading
    Then I click on Add Collection button
    Then I fill the collection form with the following data:
    | field         | value        |
    | title          | Test product|
    Then I click on the smart collection radio button
    When I click on the save collection buttion
    And  I click on edit collection btn in sidebar
    Then I should see all collections


    Scenario: User add Manual collections
     Given I am on the login page
    When I enter "syedzubairalam123@gmail.com" in email field
    And I enter "Vista123+" in password field
    And I click on Signin button
    Then I should see Select store Page
    When I click on "ZubairTest" button    
    Then I should see Dashboard Page
    And  I click on Product btn in sidebar
    And I click on Collections
    Then I should see the Collections heading
    Then I click on Add Collection button
    Then I fill the collection form with the following data:
    | field         | value        |
    | title         | Test product|
    Then I click on the manual collection radio button
    When I click on the save collection buttion
    And  I click on edit collection btn in sidebar
    Then I should see all collections



















