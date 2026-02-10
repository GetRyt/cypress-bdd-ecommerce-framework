import CheckoutPage from "./CheckoutPage"


class HomePage {

    pagecheck() {

        return cy.contains('Shop Name')

    }

    selectproduct(productName) {

        cy.get('[class="card h-100"]').filter(`:contains("${productName}")`).contains('button', 'Add').click()
        cy.get('[class="card h-100"]').eq(1).contains('button', 'Add').click()

    }

    checkout() {

        cy.contains('a', 'Checkout').click()
        return new CheckoutPage()

    }

}

export default HomePage