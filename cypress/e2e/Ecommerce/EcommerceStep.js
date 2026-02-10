import { Given, When, Then }
    from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../support/PageObject/LoginPage";
const loginpage = new LoginPage()

Given('I open the ecommerce login page', function () {
    loginpage.goto('https://rahulshettyacademy.com/loginpagePractise/')
});

When('I login with valid credentials', function () {
    this.homepage = loginpage.login(this.data.username, this.data.password)
});

When('I login with valid credentials from feature file', function (data) {
    this.homepage = loginpage.login(data.rawTable[1][0], data.rawTable[1][1])
});

When('I add products to the cart', function () {
    this.homepage.pagecheck()
    this.homepage.selectproduct(this.data.productName)
});

When('I proceed to checkout', function () {
    this.checkout = this.homepage.checkout()
});

Then('the total price should be less than 200000', function () {
    this.checkout.pricecheck().then((sum) => {
        expect(sum).to.be.lessThan(200000)
    })
});

When('I complete the purchase', function () {
    this.confirmpage = this.checkout.checkout()
    this.confirmpage.selectcountry().should('have.value', 'India')
    this.confirmpage.checkout()
});

Then('the purchase should be successful', function () {
    this.confirmpage.confirmmessage().should('contain', 'Success');
});
