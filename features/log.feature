Feature: Login Functionality
  Scenario: User logs in successfully
    Given I am on the login page
    When I enter "syedzubairalam123@gmail.com" in email field
    And I enter "Vista123+" in password field
    And I click on Signin button
    Then I should see Select store Page
    When I click on "ZubairTest" button    
    Then I should see Dashboard Page
    # When I click On Profile button
    # And I click on Logout button
    # Then I should see log into your account text


  # Scenario: Error message appears when adding a product without a title
  #   Given I am on the login page
  #   When I enter "syedzubairalam123@gmail.com" in email field
  #   And I enter "Vista123+" in password field
  #   And I click on Signin button
  #   Then I should see Dashboard Page
  #   When I click on add product button
  #   And I enter "20" in price field
  #   And I enter "10" in compare price field
  #   And I click on save product button
  #   Then I should see sku field is required text
  #   When I click On Profile button
  #   And I click on Logout button
  #   Then I should see log into your account text


  # Scenario: Error message display when user click on validate button without adding a Script
  #   Given I am on the login page
  #   When I enter "syedzubairalam123@gmail.com" in email field
  #   And I enter "Vista123+" in password field
  #   And I click on Signin button
  #   Then I should see Dashboard Page
  #   When I click on add product button
  #   And I enter "dryfit" in title field
  #   And I enter "20" in price field
  #   And I enter "10" in compare price field
  #   And I click on Check box button
  #   And I enter "https://www.daraz.pk/products/" in Sales page field
  #   And I enter "https://www.daraz.pk/products/" in VSL field
  #   And I select "Eagle Labs" from the supplier dropdown
  #   Then the selected supplier should be "Eagle Labs"
  #   And I enter "wearing" in product purpose field
  #   And I enter "st123" in return address field
  #   And I click on save product button
  #   Then I should see Compliance script text
  #   When I click on Validate button
  #   Then I should see script missing alert text





