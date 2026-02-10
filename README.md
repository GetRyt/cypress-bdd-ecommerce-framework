# Cypress BDD Automation Framework -- E-Commerce Application

## Project Overview

This project is an End-to-End Test Automation Framework developed using
**Cypress** with **BDD (Behavior Driven Development)** approach for an
E-Commerce web application.

The framework automates major user workflows such as login, product
selection, cart validation, checkout, and purchase confirmation. It
follows industry best practices like **Page Object Model** and **Data
Driven Testing** using Scenario Outline and JSON fixtures.

------------------------------------------------------------------------

## Tech Stack

-   Cypress
-   JavaScript
-   Cucumber (BDD)
-   Page Object Model (POM)
-   Mocha & Chai (Assertions)
-   JSON Fixtures (Test Data)

------------------------------------------------------------------------

## Project Structure

    cypress
     ┣ e2e
     ┃ ┗ Ecommerce.feature  
     ┃ ┗ Ecommerce  
     ┃    ┣ EcommerceStep.js
     ┃    ┗ hook.js
     ┣ fixtures
     ┃ ┗ example.json
     ┣ support
     ┃ ┗ PageObject
     ┃    ┣ LoginPage.js
     ┃    ┣ HomePage.js
     ┃    ┣ CheckoutPage.js
     ┃    ┗ ConfirmPage.js
     ┣ cucumberReports
     ┗ videos

------------------------------------------------------------------------

## Features Implemented

### BDD Framework

-   Test scenarios written in **Gherkin syntax**
-   Step definitions implemented using Cypress + Cucumber

### Page Object Model

-   Reusable page classes for better maintainability
-   Clear separation of test logic and UI locators

### End-to-End Automation

Automated workflows include:

-   User Login
-   Product Selection
-   Cart Validation
-   Checkout Process
-   Purchase Confirmation

### Data Driven Testing

#### Scenario Outline

-   Supports multiple test data sets from feature file

#### JSON Fixtures

-   External test data stored in JSON files
-   Loaded using Cypress fixtures

### Reporting

-   Generates Cucumber HTML Reports
-   Captures screenshots on test failure
-   Stores execution videos automatically

------------------------------------------------------------------------

## Sample Test Scenario

``` gherkin
Scenario: Successful product purchase
Given I open the ecommerce login page
When I login with valid credentials
And I add products to the cart
And I proceed to checkout
Then the total price should be less than 200000
When I complete the purchase
Then the purchase should be successful
```

------------------------------------------------------------------------

## Scenario Outline Example

``` gherkin
Scenario Outline: Successful purchase with data
Given I open the ecommerce login page
When I login with valid credentials from feature file
| username | password |
| rahulshettyacademy | Learning@803$mk2 |
```

------------------------------------------------------------------------

## Installation & Setup

### Clone Repository

``` bash
git clone <your-repo-url>
cd <project-folder>
```

### Install Dependencies

``` bash
npm install
```

### Open Cypress Test Runner

``` bash
npx cypress open
```

### Run Tests in Headless Mode

``` bash
npx cypress run
```

------------------------------------------------------------------------

## Reports

Cucumber reports are generated inside:

    cypress/cucumberReports

Open `index.html` to view execution results.

------------------------------------------------------------------------

## Test Artifacts

-   Execution Videos stored in:

    cypress/videos

-   Screenshots captured automatically on failures

------------------------------------------------------------------------

## Best Practices Followed

-   Modular Framework Design
-   Page Object Model Implementation
-   BDD Test Scenarios for readability
-   External Test Data Management
-   Reusable Step Definitions

------------------------------------------------------------------------

## Future Enhancements

-   API Testing Integration
-   CI/CD Pipeline Integration
-   Parallel Test Execution
-   Cross Browser Testing

------------------------------------------------------------------------

## Author

**S Sudarsan**

📧 Email: sudarshanl27102001@gmail.com\
🔗 GitHub: https://github.com/GetRyt\
🔗 LinkedIn: https://www.linkedin.com/in/s-sudarsan-589774289

------------------------------------------------------------------------

## If you found this useful

Please consider giving the repository a star!
