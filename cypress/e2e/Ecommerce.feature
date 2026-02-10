Feature: E2E Ecommerce purchase flow

    @smoke
    Scenario: Successful product purchase
        Given I open the ecommerce login page
        When I login with valid credentials
        And I add products to the cart
        And I proceed to checkout
        Then the total price should be less than 200000
        When I complete the purchase
        Then the purchase should be successful

    @regression @sanity
    Scenario Outline: Successful product purchase with data driven from feature file
        Given I open the ecommerce login page
        When I login with valid credentials from feature file
        |   username            |   password             |
        |   rahulshettyacademy  |   Learning@830$3mK2    |
        And I add products to the cart
        And I proceed to checkout
        Then the total price should be less than 200000
        When I complete the purchase
        Then the purchase should be successful