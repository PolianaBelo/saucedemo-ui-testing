
Cypress.Commands.add('login', (
    user = 'teste',
    password = '123'
    ) => {//aqui login variavel eh uma funcao arrow
        const login = () => {
            cy.visit('')
        }

        login()
    })
