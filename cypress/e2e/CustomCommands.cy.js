describe('Custom Commands', ()=>
{
    it('Handling Links Direct Approch', ()=>
    {
        cy.visit("https://demo.nopcommerce.com/");
        cy.get("div[class='item-grid'] div:nth-child(2) div:nth-child(1) div:nth-child(2) h2:nth-child(1) a:nth-child(1)").click();

        //Validations
        cy.get(".product-name>h1").should('include.text', 'Apple MacBook');
        cy.get(".product-name>h1").contains('Apple MacBook');
        cy.get(".product-name>h1").invoke('text').should('eq', 'Apple MacBook Pro 13-inch');
        cy.get(".product-name>h1").invoke('text').then((text)=>
        {
            expect(text).to.equal('Apple MacBook Pro 13-inch');
        })

        cy.get(".product-name>h1").then(($ele)=>
        {
           let actualText= $ele.text();
           expect(actualText).to.equal('Apple MacBook Pro 13-inch');
           cy.wrap(actualText).should('eq', 'Apple MacBook Pro 13-inch');
        })


    })

    it('Handling Links By Using Custom Command', ()=>
    {
        cy.visit("https://demo.nopcommerce.com/");
        cy.clickLink('Apple MacBook Pro 13-inch');
        cy.get(".product-name>h1").should('include.text', 'Apple MacBook');

    })

    it.skip('Handling Links By Using Overwritten Command', ()=>
    {
        cy.visit("https://demo.nopcommerce.com/");
        cy.clickLink('Apple MacBook Pro 13-inch');
        cy.get(".product-name>h1").should('include.text', 'Apple MacBook');

    })

    it.only('Login to application using custom commands', ()=>
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.loginToApplication('Admin', 'admin123');   //Used Custom command to Login appliaction
    })

})