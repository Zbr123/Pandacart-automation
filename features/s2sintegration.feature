Feature: S2S Functionality
   Feature: S2S Integration Functionality
  Scenario: User deactivates an existing integration
    Given I am on the login page
    When I enter "syedzubairalam123@gmail.com" in email field
    And I enter "Vista123+" in password field
    And I click on Signin button
    Then I should see Select store Page
    When I click on "ZubairTest" button
    Then I should see Dashboard Page
    When I click on "Admin" tab
    Then I should see Settings Page
    And I click on "Tracking and Scripting" option
    Then I should see Tracking and Scripting Page
    Then I click on "My Integration" button
    When I select the checkbox next to the existing integration
    Then I should see appearance of "Action" button
    And I click on "Action" button
    And I select "Deactivate" from the dropdown
    Then I should see a confirmation message "Integration deactivated successfully"
    And the integration status should be updated to "Inactive"