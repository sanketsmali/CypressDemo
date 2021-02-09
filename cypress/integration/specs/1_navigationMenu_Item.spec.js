/// <reference types="Cypress" />

context('Homepage', () => {
  beforeEach(() => {
    cy.log("As a user, navigate to homepage")
    cy.visit('https://www.creative-assembly.com/')
    cy.log("Homepage should loaded")
    cy.get('.cc-compliance > .button').click()
  })

  it('Verify navigation menu items count', () => {
    cy.log("Navigation menu should have 3 items")
    cy.get('#block-toprightmenu-2 > .menu > > a').should('have.length', 3)
  
  })



})