/// <reference types="Cypress" />

context('Contact Us', () => {
  beforeEach(() => {
    cy.log("As a user, navigate to homepage")
    cy.visit('https://www.creative-assembly.com/')
    cy.log("Homepage should loaded")
    cy.get('.cc-compliance > .button').click()
  
    })

 it('Verify the page title for Become a customer', () => {
  cy.log("Search for Game - A TOTAL WAR SAGA: TROY")
  cy.get(':nth-child(3) > .is-active').click
  cy.get('.game-section__nav-item > p').contains('A TOTAL WAR SAGA: TROY').click()
  })



})