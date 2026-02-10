import ConfirmPage from "./ConfirmPage"

class CheckoutPage {

    pricecheck() {

        let sum = 0
        return cy.get('tr td:nth-child(4) strong').each((price) => {
            const amount = Number(price.text().split(" ")[1].trim())
            sum = sum + amount
        }).then(() => {
            return sum
        })

    }

    checkout() {
        cy.contains('button', 'Checkout').click()
        return new ConfirmPage()
    }

}

export default CheckoutPage