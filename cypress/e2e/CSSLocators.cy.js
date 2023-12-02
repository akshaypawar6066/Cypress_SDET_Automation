
describe('CSSLocators', () => {
    it('CSS Locators', () => {

        cy.visit("http://www.automationpractice.pl/index.php");
        cy.get("input#search_query_top").type("T-Shirts");       //cy.get()--->For CSS Locators.
        cy.get("button.button-search").click();
       // cy.get("span.lighter").contains("T-Shirts");
       cy.get("span.lighter").invoke('text').should('include', "T-Shirts");   //Assertion

       /*
       cy.get("span.lighter").invoke('text').then((text)=>
       {
        //expect(text).to.include("T-Shirts");
        //cy.wrap(text).should('include', 'T-Shirts');
       })
       */
    })
})