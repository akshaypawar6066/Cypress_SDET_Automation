describe('Capture Screnshot And Videos', ()=>
{
    it('Capture Screenshot', ()=>
    {
        //By default cypress will catch screenshot when test failute
        //but to capture screenshot explicityly, we have command/method in cypress.

        cy.visit("https://demo.opencart.com/");
        cy.screenshot("HomePage_Scrrenshot")
        cy.wait(5000);
        cy.get("img[title='Your Store']").screenshot("Logo_Scrrenshot");
    })
})