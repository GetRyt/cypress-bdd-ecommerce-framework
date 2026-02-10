class ConfirmPage {

    selectcountry() {

        return cy.selectcountry()

    }

    checkout() {

        cy.contains('input', 'Purchase').click()

    }

    confirmmessage() {

        return cy.get('.alert ')

    }

}

export default ConfirmPage