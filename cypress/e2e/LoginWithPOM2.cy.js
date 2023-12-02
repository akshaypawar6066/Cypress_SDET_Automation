import Login from "../PageObjects/LoginPageSecondApproach.js"
describe('Page Object Model Demo', ()=>
{
    let userData;
before('Hooks For GettingData from fixtures', ()=>
{
    cy.fixture('orangeHrmFixture.json').then((data)=>
    {
         userData=data;
    })
})
        it('LoginTest-With-POM Second_Approach', ()=>
        {
           cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
           let login=new Login();

           login.setUsername("Admin");
           login.setPassword("admin123");
           login.clickOnLogin();
           login.verifyLogin();

        });

        it('LoginTest-With-POM Using Fixture', ()=>
        {
           cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
           let login=new Login();
           
           login.setUsername(userData.username);
           login.setPassword(userData.password);
           login.clickOnLogin();
           login.verifyLogin();

        })

})