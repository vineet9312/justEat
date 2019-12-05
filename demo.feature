Feature: I am going to validate Calculator App

@calculatortesting
Scenario: Calculator Add functionality testing

Given I want food in "AR51 1AA"
When I search for restaurants
Then I should see some restaurants in "AR51 1AA"


Scenario: choosin from different cuisines

Given i am looking for "halal" meat in various category
When search for the "halal" meat
Then multiple options for selected cusine



Scenario: bookin the order

Given out of options available
When i chose the morocan kebab restaurant
Then book the order for the lunch









