describe('Access login page', () => {
  it('successfully', () => {
    cy.accessLoginPage()
    cy.get('.login_logo').should('be.visible')
  })
})

describe('Login', () => {
  it('successfully', () => {
    cy.login()
  })
})