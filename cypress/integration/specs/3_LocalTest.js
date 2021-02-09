/// <reference types="Cypress" />

context('Contact Us', () => {
  beforeEach(() => {
    cy.log("As a user, navigate to homepage")
    cy.visit('http://localhost/MAMP/?language=English')
    cy.log("Homepage should loaded")
   
  
    })

 it('Verify the page title for Become a customer', () => {
  cy.get('ul.navbar-nav > li.nav-item > a').should('have.length', 4)
  cy.title().should('contain', 'MAMP');
  })



})