describe('Access login page', () => {
  it('successfully', () => {
    cy.accessLoginPage()
    cy.get('.login_logo').should('be.visible')
  })
})

describe('Login', () => {
  beforeEach(() => {
    cy.accessLoginPage()
  })

  it('successfully', () => {
    const options = { cacheSession: false }
    const user = Cypress.env('user_name'),
    const password = Cypress.env('password')

    cy.login(user, password, options)

    cy.get('.title').should('be.visible')
    cy.get('.app_logo').should('be.visible')
    cy.get('.shopping_cart_link').should('be.visible')
    cy.get('#react-burger-menu-btn').should('be.visible')
  })
})