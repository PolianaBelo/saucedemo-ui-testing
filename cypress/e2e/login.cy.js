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
    cy.login()
    cy.get('.title').should('be.visible')
    cy.get('.app_logo').should('be.visible')
    cy.get('.shopping_cart_link').should('be.visible')
    cy.get('#react-burger-menu-btn').should('be.visible')
  })
})