/// <reference types="Cypress" />

context('Contact Us', () => {
  beforeEach(() => {
    cy.log("As a user, navigate to homepage")
    cy.visit('https://www.creative-assembly.com/')
    cy.log("Homepage should loaded")
    cy.get('.cc-compliance > .button').click()
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

 it('Verify the page title for Become a customer', () => {
  cy.log("Search for Game - A TOTAL WAR SAGA: TROY")
  cy.get(':nth-child(3) > .is-active').click
  cy.get('.game-section__nav-item > p').contains('A TOTAL WAR SAGA: TROY').click()
  })



})