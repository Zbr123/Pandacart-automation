Feature: New bump offer.
Scenario: User create new bump offer(Rule:Always available)
    Given I am on the login page
    When I enter "saad@cartpanda.com" in email field
    And I enter "Vista123+@" in password field
    And I click on Signin button
    Then I should see Select store Page
    And I click on "msaad" button
    Then I should see Dashboard Page
    And I click on the order bump on the side bar
    Then I should see the order bump screen
    And I click on the new order bmp button
    Then I should see the rules screen
    And I click on the input box to turn on active
    And I click on the field and enter "BUMPOFFER(No discount)" in the field
    And click on thee Ordersave button
    Then I should see the product headings
    And I click on the Add rule button
    And I click on the save rules button
    And Then I click on the search
    Then I should see the add product heading.
    And then enter product name "DROP SHIRT"
    And  click on the product in the drop down.
    And click on the select button
    And Then clicks on the view product save button
    And Then click on the order bump sae button
    Then I click on the back button
    And I should see the orderbumps heading.



    Scenario: User create new bump offer with discount(Percentage)
    Given I am on the login page
    When I enter "saad@cartpanda.com" in email field
    And I enter "Vista123+@" in password field
    And I click on Signin button
    Then I should see Select store Page
    And I click on "msaad" button
    Then I should see Dashboard Page
    And I click on the order bump on the side bar
    Then I should see the order bump screen
    And I click on the new order bmp button
    Then I should see the rules screen
    And I click on the input box to turn on active
    And I click on the field and enter "DISCOUNTBUMPOFFER(percentage)" in the field
    And click on thee Ordersave button
    Then I should see the product headings
    And I click on the Add rule button
    And I click on the save rules button
    And Then I click on the search
    Then I should see the add product heading.
    And then enter product name "DROP SHIRT"
    And  click on the product in the drop down.
    And click on the select button
    And I click on Discount input box and enter discount
    And Then clicks on the view product save button
    And Then click on the order bump sae button
    Then I click on the back button
    And I should see the orderbumps heading.




    Scenario: User create new bump offer with discount(Fixed)
    Given I am on the login page
    When I enter "saad@cartpanda.com" in email field
    And I enter "Vista123+@" in password field
    And I click on Signin button
    Then I should see Select store Page
    And I click on "msaad" button
    Then I should see Dashboard Page
    And I click on the order bump on the side bar
    Then I should see the order bump screen
    And I click on the new order bmp button
    Then I should see the rules screen
    And I click on the input box to turn on active
    And I click on the field and enter "DISCOUNTBUMPOFFER(fixed)" in the field
    And click on thee Ordersave button
    Then I should see the product headings
    And I click on the Add rule button
    And I click on the save rules button
    And Then I click on the search
    Then I should see the add product heading.
    And then enter product name "DROP SHIRT"
    And  click on the product in the drop down.
    And click on the select button
    Then I click on Fixed checkbox
    And I click on Discount input box and enter discount
    And Then clicks on the view product save button
    And Then click on the order bump sae button
    Then I click on the back button
    And I should see the orderbumps heading.




    Scenario: User create new bump offer[Rule:Total in cart(Equal to)]
    Given I am on the login page
    When I enter "saad@cartpanda.com" in email field
    And I enter "Vista123+@" in password field
    And I click on Signin button
    Then I should see Select store Page
    And I click on "msaad" button
    Then I should see Dashboard Page
    And I click on the order bump on the side bar
    Then I should see the order bump screen
    And I click on the new order bmp button
    Then I should see the rules screen
    And I click on the input box to turn on active
    And I click on the field and enter "BUMPOFFER[Rule:Total in cart(Equal to)]" in the field
    And click on thee Ordersave button
    Then I should see the product headings
    And I click on the Add rule button
    And I click on Action tab and select Total in cart from the dropdown
    Then I click on rule and select equal to from the dropdown
    And I click on Value input box and enter the value 
    And I click on the save rules button
    And Then I click on the search
    Then I should see the add product heading.
    And then enter product name "DROP SHIRT"
    And  click on the product in the drop down.
    And click on the select button
    And Then clicks on the view product save button
    And Then click on the order bump sae button
    Then I click on the back button
    And I should see the orderbumps heading.



    Scenario: User create new bump offer[Rule:Total in cart(Not Equal to)]
    Given I am on the login page
    When I enter "saad@cartpanda.com" in email field
    And I enter "Vista123+@" in password field
    And I click on Signin button
    Then I should see Select store Page
    And I click on "msaad" button
    Then I should see Dashboard Page
    And I click on the order bump on the side bar
    Then I should see the order bump screen
    And I click on the new order bmp button
    Then I should see the rules screen
    And I click on the input box to turn on active
    And I click on the field and enter "BUMPOFFER[Rule:Total in cart(Not Equal to)]" in the field
    And click on thee Ordersave button
    Then I should see the product headings
    And I click on the Add rule button
    And I click on Action tab and select Total in cart from the dropdown
    Then I click on rule and select not equal to from the dropdown
    And I click on Value input box and enter the value 
    And I click on the save rules button
    And Then I click on the search
    Then I should see the add product heading.
    And then enter product name "DROP SHIRT"
    And  click on the product in the drop down.
    And click on the select button
    And Then clicks on the view product save button
    And Then click on the order bump sae button
    Then I click on the back button
    And I should see the orderbumps heading.


Scenario: User create new bump offer[Rule:Total in cart(Greater than)]
    Given I am on the login page
    When I enter "saad@cartpanda.com" in email field
    And I enter "Vista123+@" in password field
    And I click on Signin button
    Then I should see Select store Page
    And I click on "msaad" button
    Then I should see Dashboard Page
    And I click on the order bump on the side bar
    Then I should see the order bump screen
    And I click on the new order bmp button
    Then I should see the rules screen
    And I click on the input box to turn on active
    And I click on the field and enter "BUMPOFFER[Rule:Total in cart(Greater than)]" in the field
    And click on thee Ordersave button
    Then I should see the product headings
    And I click on the Add rule button
    And I click on Action tab and select Total in cart from the dropdown
    Then I click on rule and select greater than to from the dropdown
    And I click on Value input box and enter the value 
    And I click on the save rules button
    And Then I click on the search
    Then I should see the add product heading.
    And then enter product name "DROP SHIRT"
    And  click on the product in the drop down.
    And click on the select button
    And Then clicks on the view product save button
    And Then click on the order bump sae button
    Then I click on the back button
    And I should see the orderbumps heading.


Scenario: User create new bump offer[Rule:Total in cart(Less than)]
    Given I am on the login page
    When I enter "saad@cartpanda.com" in email field
    And I enter "Vista123+@" in password field
    And I click on Signin button
    Then I should see Select store Page
    And I click on "msaad" button
    Then I should see Dashboard Page
    And I click on the order bump on the side bar
    Then I should see the order bump screen
    And I click on the new order bmp button
    Then I should see the rules screen
    And I click on the input box to turn on active
    And I click on the field and enter "BUMPOFFER[Rule:Total in cart(Less than)]" in the field
    And click on thee Ordersave button
    Then I should see the product headings
    And I click on the Add rule button
    And I click on Action tab and select Total in cart from the dropdown
    Then I click on rule and select less than from the dropdown
    And I click on Value input box and enter the value 
    And I click on the save rules button
    And Then I click on the search
    Then I should see the add product heading.
    And then enter product name "DROP SHIRT"
    And  click on the product in the drop down.
    And click on the select button
    And Then clicks on the view product save button
    And Then click on the order bump sae button
    Then I click on the back button
    And I should see the orderbumps heading.



 Scenario: User create new bump offer[Rule:Total in cart(Greater or Equal to)]
    Given I am on the login page
    When I enter "saad@cartpanda.com" in email field
    And I enter "Vista123+@" in password field
    And I click on Signin button
    Then I should see Select store Page
    And I click on "msaad" button
    Then I should see Dashboard Page
    And I click on the order bump on the side bar
    Then I should see the order bump screen
    And I click on the new order bmp button
    Then I should see the rules screen
    And I click on the input box to turn on active
    And I click on the field and enter "BUMPOFFER[Rule:Total in cart(Greater or Equal to)]" in the field
    And click on thee Ordersave button
    Then I should see the product headings
    And I click on the Add rule button
    And I click on Action tab and select Total in cart from the dropdown
    Then I click on rule and select Greater or Equal to from the dropdown
    And I click on Value input box and enter the value 
    And I click on the save rules button
    And Then I click on the search
    Then I should see the add product heading.
    And then enter product name "DROP SHIRT"
    And  click on the product in the drop down.
    And click on the select button
    And Then clicks on the view product save button
    And Then click on the order bump sae button
    Then I click on the back button
    And I should see the orderbumps heading.



 Scenario: User create new bump offer[Rule:Total in cart(Less or Equal to)]
    Given I am on the login page
    When I enter "saad@cartpanda.com" in email field
    And I enter "Vista123+@" in password field
    And I click on Signin button
    Then I should see Select store Page
    And I click on "msaad" button
    Then I should see Dashboard Page
    And I click on the order bump on the side bar
    Then I should see the order bump screen
    And I click on the new order bmp button
    Then I should see the rules screen
    And I click on the input box to turn on active
    And I click on the field and enter "BUMPOFFER[Rule:Total in cart(Less or Equal to)]" in the field
    And click on thee Ordersave button
    Then I should see the product headings
    And I click on the Add rule button
    And I click on Action tab and select Total in cart from the dropdown
    Then I click on rule and select Less or Equal to from the dropdown
    And I click on Value input box and enter the value 
    And I click on the save rules button
    And Then I click on the search
    Then I should see the add product heading.
    And then enter product name "DROP SHIRT"
    And  click on the product in the drop down.
    And click on the select button
    And Then clicks on the view product save button
    And Then click on the order bump sae button
    Then I click on the back button
    And I should see the orderbumps heading.



  Scenario: User create new bump offer[Rule:Total in cart(Between values)]
    Given I am on the login page
    When I enter "saad@cartpanda.com" in email field
    And I enter "Vista123+@" in password field
    And I click on Signin button
    Then I should see Select store Page
    And I click on "msaad" button
    Then I should see Dashboard Page
    And I click on the order bump on the side bar
    Then I should see the order bump screen
    And I click on the new order bmp button
    Then I should see the rules screen
    And I click on the input box to turn on active
    And I click on the field and enter "BUMPOFFER[Rule:Total in cart(Between values)]" in the field
    And click on thee Ordersave button
    Then I should see the product headings
    And I click on the Add rule button
    And I click on Action tab and select Total in cart from the dropdown
    Then I click on rule and select Between values from the dropdown
    And I click on min Value input box and enter the value 
    And I click on max Value input box and enter the value 
    And I click on the save rules button
    And Then I click on the search
    Then I should see the add product heading.
    And then enter product name "DROP SHIRT"
    And  click on the product in the drop down.
    And click on the select button
    And Then clicks on the view product save button
    And Then click on the order bump sae button
    Then I click on the back button
    And I should see the orderbumps heading.










  Scenario: User create new bump offer[Rule:Cart items(Equal to all)]
    Given I am on the login page
    When I enter "saad@cartpanda.com" in email field
    And I enter "Vista123+@" in password field
    And I click on Signin button
    Then I should see Select store Page
    And I click on "msaad" button
    Then I should see Dashboard Page
    And I click on the order bump on the side bar
    Then I should see the order bump screen
    And I click on the new order bmp button
    Then I should see the rules screen
    And I click on the input box to turn on active
    And I click on the field and enter "BUMPOFFER[Rule:Cart items(Equal to all)]" in the field
    And click on thee Ordersave button
    Then I should see the product headings
    And I click on the Add rule button
    And I click on Action tab and select Cart Items from the dropdown
    Then I click on rule and select Equal to all from the dropdown
    And  I click on the search for rules
    And then enter product name "DROP SHIRT"
    And  click on the product in the drop down.
    And click on the select button
    And I click on the save rules button
    And Then I click on the search
    Then I should see the add product heading.
    And then enter product name "DROP SHIRT"
    And  click on the product in the drop down.
    And click on the select button
    And Then clicks on the view product save button
    And Then click on the order bump sae button
    Then I click on the back button
    And I should see the orderbumps heading.



  Scenario: User create new bump offer[Rule:Cart items(Not Equal to all)]
    Given I am on the login page
    When I enter "saad@cartpanda.com" in email field
    And I enter "Vista123+@" in password field
    And I click on Signin button
    Then I should see Select store Page
    And I click on "msaad" button
    Then I should see Dashboard Page
    And I click on the order bump on the side bar
    Then I should see the order bump screen
    And I click on the new order bmp button
    Then I should see the rules screen
    And I click on the input box to turn on active
    And I click on the field and enter "BUMPOFFER[Rule:Cart items(Not Equal to all)]" in the field
    And click on thee Ordersave button
    Then I should see the product headings
    And I click on the Add rule button
    And I click on Action tab and select Cart Items from the dropdown
    Then I click on rule and select Not Equal to all from the dropdown
    And  I click on the search for rules
    And then enter product name "DROP SHIRT"
    And  click on the product in the drop down.
    And click on the select button
    And I click on the save rules button
    And Then I click on the search
    Then I should see the add product heading.
    And then enter product name "DROP SHIRT"
    And  click on the product in the drop down.
    And click on the select button
    And Then clicks on the view product save button
    And Then click on the order bump sae button
    Then I click on the back button
    And I should see the orderbumps heading.































































#  Scenario: User create new bump offer[Rule:Cart items(Equal to aNY)]
#     Given I am on the login page
#     When I enter "saad@cartpanda.com" in email field
#     And I enter "Vista123+@" in password field
#     And I click on Signin button
#     Then I should see Select store Page
#     And I click on "msaad" button
#     Then I should see Dashboard Page
#     And I click on the order bump on the side bar
#     Then I should see the order bump screen
#     And I click on the new order bmp button
#     Then I should see the rules screen
#     And I click on the input box to turn on active
#     And I click on the field and enter "BUMPOFFER[Rule:Cart items(Equal to aNY)]" in the field
#     And click on thee Ordersave button
#     Then I should see the product headings
#     And I click on the Add rule button
#     And I click on Action tab and select Cart Items from the dropdown
#     Then I click on rule and select Equal to any from the dropdown
#     And  I click on the search for rules
#     And then enter product name "DROP SHIRT"
#     And  click on the product in the drop down.
#     And click on the select button
#     And I click on the save rules button
#     And Then I click on the search
#     Then I should see the add product heading.
#     And then enter product name "DROP SHIRT"
#     And  click on the product in the drop down.
#     And click on the select button
#     And Then clicks on the view product save button
#     And Then click on the order bump sae button
#     Then I click on the back button
#     And I should see the orderbumps heading.



#  Scenario: User create new bump offer[Rule:Cart items(Not Equal to aNY)]
#     Given I am on the login page
#     When I enter "saad@cartpanda.com" in email field
#     And I enter "Vista123+@" in password field
#     And I click on Signin button
#     Then I should see Select store Page
#     And I click on "msaad" button
#     Then I should see Dashboard Page
#     And I click on the order bump on the side bar
#     Then I should see the order bump screen
#     And I click on the new order bmp button
#     Then I should see the rules screen
#     And I click on the input box to turn on active
#     And I click on the field and enter "BUMPOFFER[Rule:Cart items(Not Equal to aNY)]" in the field
#     And click on thee Ordersave button
#     Then I should see the product headings
#     And I click on the Add rule button
#     And I click on Action tab and select Cart Items from the dropdown
#     Then I click on rule and select Not Equal to any from the dropdown
#     And  I click on the search for rules
#     And then enter product name "DROP SHIRT"
#     And  click on the product in the drop down.
#     And click on the select button
#     And I click on the save rules button
#     And Then I click on the search
#     Then I should see the add product heading.
#     And then enter product name "DROP SHIRT"
#     And  click on the product in the drop down.
#     And click on the select button
#     And Then clicks on the view product save button
#     And Then click on the order bump sae button
#     Then I click on the back button
#     And I should see the orderbumps heading.
