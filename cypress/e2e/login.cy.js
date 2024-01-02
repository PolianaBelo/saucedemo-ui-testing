describe('Login', () => {
  it('successfully', () => {
    cy.login()
    cy.get('.login_logo').should('be.visible')
  })
})