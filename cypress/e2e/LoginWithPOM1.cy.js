import Login from "../PageObjects/LoginPage.js" ;
describe('Page Object Model Demo', ()=>
{
    //General Approach
    it('LoginTest-GeneralApproach', ()=>
    {
         cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
         cy.get("input[placeholder='Username']").type("Admin");
         cy.get("input[placeholder='Password']").type("admin123");
         cy.get("button[type='submit']").click();

         cy.xpath("//h6[normalize-space()='Dashboard']").should('have.text','Dashboard')

        });

        //Pom approach-1
        it('LoginTest-POM_Approach1', ()=>
        {
           cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
           let login=new Login();

           login.setUsername("Admin");
           login.setPassword("admin123");
           login.clickOnLogin();
           login.verifyLogin();

        });

       

})