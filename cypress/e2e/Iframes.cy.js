import 'cypress-iframe';
describe('Iframe Handling', () => {
    it('Approach 1-Directly Handled', () => {
        cy.visit("https://the-internet.herokuapp.com/iframe");

        let iframe = cy.get("#mce_0_ifr")
            .its('0.contentDocument.body')
            .should('be.visible')
            .then(cy.wrap);

        iframe.clear().type('Welcome...!!!');
        iframe.type("Hello Akshay.!!! {ctrl+a}");
        cy.get("[title='Bold']").click();

    });

    it('Approach 2-Using Custom command', () => {
        cy.visit("https://the-internet.herokuapp.com/iframe");

        let iframe = cy.getIframe("#mce_0_ifr");


        iframe.clear().type('This Iframe is handled using custom command!!! {ctrl+a}');
        cy.get("[title='Bold']").click();

    })

    it('Approach 3-Using Cypress-Iframe plugin', () => {
        cy.visit("https://the-internet.herokuapp.com/iframe");
        cy.frameLoaded("#mce_0_ifr");   //Load the iframe
        cy.iframe("#mce_0_ifr").clear().type("Handling the Iframe using Cypress-Iframe Plugin {ctrl+a}");   //Interacting With Iframe
        cy.get("[title='Bold']").click();

    })
})