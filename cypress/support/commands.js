Cypress.Commands.add('accessLoginPage', () => {
        const accessLoginPage = () => {
            cy.visit('')
        }

        accessLoginPage()
    })

Cypress.Commands.add('login', (
    user = Cypress.env('user_name'),
    password = Cypress.env('password')
    ) => {//aqui login variavel eh uma funcao arrow
        const login = () => {
            cy.accessLoginPage()
            cy.get('[data-test="username"]').type(user)
            cy.get('[data-test="password"]').type(password, { log: false})
            cy.get('[data-test="login-button"]').click()
        }

        login()
    })
