describe('cart', () => {
    beforeEach(() => {
        cy.accessLoginPage()
        cy.login()
    })

    it('successfully', () => {
        cy.get('.shopping_cart_link').click()
        cy.get('.app_logo').should('be.visible')
        cy.get('.title').should('be.visible')
        cy.get('.cart_quantity_label').should('be.visible')
        cy.get('[data-test="continue-shopping"]').should('be.visible').should('be.enabled')
        cy.get('[data-test="checkout"]').should('be.enabled')
        cy.get('.shopping_cart_link')
        cy.get('.cart_desc_label')
      })
})