Cypress.Commands.add('accessLoginPage', () => {
    const accessLoginPage = () => {
        cy.visit('')
    }

    accessLoginPage()
})

Cypress.Commands.add('login', (
    user = Cypress.env('user_name'),
    password = Cypress.env('password'),
    { cacheSession = true } = {},
) => {
    const login = () => {
        cy.get('[data-test="username"]').type(user)
        cy.get('[data-test="password"]').type(password, { log: false })
        cy.get('[data-test="login-button"]').click()
    }

    const validate = () => {
        cy.visit('/')
        cy.location('pathname', { timeout: 1000 })
          .should('not.eq', '/users/sign_in')
      }

    const options = {
        cacheAcrossSpecs: true,
        validate,
    }

    if (cacheSession) {
        cy.session(user, login, options)
    } else {
        login()
    }
})

Cypress.Commands.add('logout', () => {
    const logout = () => {
        cy.get('#react-burger-menu-btn').click()
        cy.get('#logout_sidebar_link').click()
    }

    logout()
})