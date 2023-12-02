describe('XpathLoatorsTest', () => {
    it('FindNoOfProducts', () => {
        cy.visit("http://www.automationpractice.pl/index.php");
        cy.xpath("//a[@title='Women']").click();   //For Xpath Locators
        cy.xpath("//ul[@class='product_list grid row']/li").should('have.length', 7)
        
    })

    it('ChainedXpath', ()=>
    {
        cy.visit("http://www.automationpractice.pl/index.php");
        cy.xpath("//a[@title='Women']").click();   //For Xpath Locators
        cy.xpath("//ul[@class='product_list grid row']").xpath("./li").should('have.length', 7)
    })
})