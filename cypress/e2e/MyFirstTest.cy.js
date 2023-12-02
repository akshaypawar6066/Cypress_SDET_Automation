//import cypress from "cypress";

describe('My First Test', () => {
  it('VerifyTitle-PositiveTest', () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    cy.title().should('eq', 'OrangeHRM');

  })

  it('VerifyTitle-NegativeTest', () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    cy.title().should('eq', 'Orange');
    
  
  })


})