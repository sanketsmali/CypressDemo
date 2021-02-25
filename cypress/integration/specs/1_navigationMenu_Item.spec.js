/// <reference types="Cypress" />

const sizes = ['iphone-6', 'ipad-2', [1024, 768]]

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

  describe('Integration test with visual testing', function() {
    it('Loads the homepage', function() {
      // Load the page or perform any other interactions with the app.
      cy.visit('https://www.creative-assembly.com/');
      cy.wait(200)
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
  
     
    });
  });



})