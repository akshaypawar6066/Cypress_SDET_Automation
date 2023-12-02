///Implicit Assertions--->(shoud & thehn).
describe('Assertions Demo', () => {
    it('Implicit Assertions', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com");

        /*

        /////should    & and/////

        //To check expected text is contaning in Actual one or not
        // cy.url().should('include', 'orangehrmlive.com');
        // cy.url().should('contain', 'orangehrmlive.com');

        //To check Expected text is matching with actual text.
        // cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        //Here no need to write cy.url() multiple times
        //cy.url().should('include', 'orangehrmlive.com').should('contain', 'orangehrmlive.com').should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        //Here should keyword is also we are using multiple times instaed of that we can use and keyword.
        cy.url().should('include', 'orangehrmlive.com')
            .and('contain', 'orangehrmlive.com')
            .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        //We can have negative assertions like this
        //    cy.url().should('not.include', 'Greenehrmlive.com')
        //    .and('not.contain', 'orangehrmlive.com')
        //    .and('not.eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        cy.title().should('include', 'Orange')
            .and('eq', 'OrangeHRM')
            .and('contain', "HRM");
 
            //To check webelement is visible or not
            
        cy.get('div.orangehrm-login-branding >img').should('be.visible')
        .and('exist');

        //TO capture all the links from the webpage and validate
        cy.xpath("//a").should('have.length', 5);

       cy.get("[name='username']").type("Admin");   //Provide a value into a input box
        
       cy.get("[name='username']").should('have.value', 'Admin'); //Value check

  */

       cy.get("input[name='username']").type("Admin");  
       cy.get("input[name='password']").type("admin123"); 
       cy.xpath("//button[text()=' Login ']").click();


    cy.xpath("//span[text()='Admin']").should('have.text', 'Admin');
    cy.xpath("//span[text()='Admin']").should('be.visible');

   
})
it.only('Explicit Assertions', () => {
    cy.visit("https://opensource-demo.orangehrmlive.com");
    
    cy.get("input[name='username']").type("Admin");  
    cy.get("input[name='password']").type("admin123"); 
    cy.xpath("//button[text()=' Login ']").click();

    let expectedName="Harry Collings";

// cy.get("p.oxd-userdropdown-name").then((x)=>
// {
//     let actName=x.text();
//     //BDD Style
//     expect(actName).to.equal(expectedName);
//   //  expect(actName).to.not.equal(expectedName);

//     //TDD Style
//     assert.equal(actName, expectedName);
//    // assert.notEqual(actName, expectedName);
// })

cy.get("p.oxd-userdropdown-name").invoke('text').then((text)=>
{
    let actualText=text;
   expect(actualText).to.equal(expectedName);
   assert.equal(text, expectedName);
});







})

});