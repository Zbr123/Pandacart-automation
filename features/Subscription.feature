Feature: Subscription Plan Creation
Scenario: Create a new Subscription Plan successfully
  Given I am on the login page
  When I enter "saad@cartpanda.com" in email field
  And I enter "Vista123+@" in password field
  And I click on Signin button
  Then I should see Select store Page
  When I click on "msaad" button
  Then I should see Dashboard Page
  And I click on Subscription btn in sidebar
  Then I should see Subscriptions heading
  And I select a Subscriptions plans
  Then I click on Add new button
  And I click on Plan name input box
  Then I enter "TEST" in the input box
  And I click on Select products button
  And I select Drop Shirt from the list 
  And I select Shorts from list 
  And I click on Save button
  Then I click on order frequency box
  And I select the frequency from the dropdown
  And I enter "SUB1" in plan name
  And I click on Savebtn
  And I click on ok button
  



  Scenario: Create a new Subscription Plan with Discount Offer(Percent off %)
  Given I am on the login page
  When I enter "saad@cartpanda.com" in email field
  And I enter "Vista123+@" in password field
  And I click on Signin button
  Then I should see Select store Page
  When I click on "msaad" button
  Then I should see Dashboard Page
  And I click on Subscription btn in sidebar
  Then I should see Subscriptions heading
  And I select a Subscriptions plans
  Then I click on Add new button
  And I click on Plan name input box
  Then I enter "TEST" in the input box
  And I click on Select products button
  And I select Drop Shirt from the list 
  And I select Shorts from list 
  And I click on Save button
  Then I click on order frequency box
  And I select the frequency from the dropdown
  And I enter "SUB1" in plan name
  And I click on discount offer checkbox
  Then I click on Discount offer input box  
  And I enter the the discount ammount
  And I click on Discount type
  And I click on Savebtn
  And I click on ok button
  
 

Scenario: Create a new Subscription Plan with Discount Offer(Amount off)
  Given I am on the login page
  When I enter "saad@cartpanda.com" in email field
  And I enter "Vista123+@" in password field
  And I click on Signin button
  Then I should see Select store Page
  When I click on "msaad" button
  Then I should see Dashboard Page
  And I click on Subscription btn in sidebar
  Then I should see Subscriptions heading
  And I select a Subscriptions plans
  Then I click on Add new button
  And I click on Plan name input box
  Then I enter "TEST" in the input box
  And I click on Select products button
  And I select Drop Shirt from the list 
  And I select Shorts from list 
  And I click on Save button
  Then I click on order frequency box
  And I select the frequency from the dropdown
  And I enter "SUB1" in plan name
  And I click on discount offer checkbox
  Then I click on Discount offer input box  
  And I enter the the discount ammount
  And I select amount off from the dropdown
  And I click on Savebtn
  Then I click on ok button