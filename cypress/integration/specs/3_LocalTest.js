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
  cy.viewport('macbook-15')
  cy.wait(200)
  cy.viewport('macbook-13')
  cy.wait(200)
  cy.viewport('macbook-11')
  cy.wait(200)
  cy.viewport('ipad-2')
  cy.wait(200)
  cy.viewport('ipad-mini')
  cy.wait(200)
  cy.viewport('iphone-6+')
  cy.wait(200)
  cy.viewport('iphone-6')
  cy.wait(200)
  cy.viewport('iphone-5')
  cy.wait(200)
  cy.viewport('iphone-4')
  cy.wait(200)
  cy.viewport('iphone-3')
  cy.wait(200)
  })



})