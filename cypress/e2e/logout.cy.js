describe('Logout', () => {
    beforeEach(() => {
      cy.accessLoginPage()
      cy.login()
    })
  
    it('successfully', () => {
      cy.logout()
    })
  })