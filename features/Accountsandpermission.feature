Feature: Accounts and permissions 

# Scenario: Add a staff account and give it all permissions
# Given I am on the login page
#     When I enter "syedzubairalam123@gmail.com" in email field
#     And I enter "Vista123+" in password field
#     And I click on Signin button
#     Then I should see Select store Page
#     When I click on "ZubairTest" button
#     Then I should see Dashboard Page
#     When I click on "Admin" tab,
#     Then I should see Settings Page.
#     And I click on the accounts and permissions
#     Then I should see the account nd permission page
#     And Click on the add staff account
#     Then I Should see the staff account page
#     And  I click and enter the email "saad@cartpanda.com"
#     And I click On the staff member will have full permission check box
#     And Then I click on the save button 
#     Then I should see the staff invitaion sent message

Scenario: Delete a staff account
Given I am on the login page
    When I enter "syedzubairalam123@gmail.com" in email field
    And I enter "Vista123+" in password field
    And I click on Signin button
    Then I should see Select store Page
    When I click on "ZubairTest" button
    Then I should see Dashboard Page
    When I click on "Admin" tab,
    Then I should see Settings Page.
    And I click on the accounts and permissions
    Then I should see the account nd permission page
    And I click on the edit account button
    Then I Should see the edit staff account page
    And Then I click on the delete button
    Then I should see the staff accounts.

