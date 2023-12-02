// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

//Custom command to get Iframe
Cypress.Commands.add('getIframe', (iframeLocator) => {
    return cy.get(iframeLocator)
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap);
})


//Custom command to click on link using label
Cypress.Commands.add('clickLink', (labelOfLink) => {
    cy.get('a').contains(labelOfLink).click();
})


//Overwrite existing commands
//contains() --->It will check expectedText is present in the element or not(Case Sensitive)
//We will use contains() method to treat in-case sensitive

//Command for common feature--->If we have common featute/Common Code--->Create custom command
//Login is common before every scenario
//Custom comamnd for login

Cypress.Commands.add('loginToApplication', (username, password) => {
    cy.get("input[name='username']").type(username, { delay: 100 });
    cy.get("input[name='password']").type(password, { delay: 200 });
    cy.get("[type='submit']").click();


    if (cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')) {
        cy.log("Able to login Application Successfully.");
    }

    else {
        cy.log("Not able to login Application Successfully.")
    }

});

Cypress.Commands.add('login', (email, password) => {
    cy.get('#userEmail').type(email);
    cy.get('#userPassword').type(password);
    cy.get('#login').click();
})

Cypress.Commands.add('getSizeOfAvailableProducts', (locatorForProducts) => {
    return cy.get(locatorForProducts).its('length');
});

Cypress.Commands.add('getTextPresentOnElement', (locator) => {
    return cy.xpath(locator).invoke('text');

})


