import HomePage from "./HomePage"

class LoginPage {

    goto(url) {

        cy.visit(url)

    }

    login(username, password) {

        cy.get('#username').type(username)
        cy.get('#password').type(password)
        cy.get('#signInBtn').click()
        return new HomePage()

    }

}

export default LoginPage