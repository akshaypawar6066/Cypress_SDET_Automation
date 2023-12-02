describe('Fixtur Demo Test', () => {

    let loginDataFromHooks;;
    before('Hook For Getting data from Fixtures files', () => {
        cy.fixture('orangeHrmFixture.json').then((data) => {
            loginDataFromHooks = data;
        })
    })


    //Direct Access
    it('Accessing Data Directly from fixtures Within Test', () => {
        let loginData;
        cy.fixture('orangeHrmFixture.json').then((data) => {
            loginData = data;
            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
            cy.get("input[name='username']").type(loginDataFromHooks.username);
            cy.get("input[name='password']").type(loginDataFromHooks.password);
            cy.get("button[type='submit']").click();
            //Assertion After login
            cy.xpath("//span[text()='Admin']").should('have.text', loginDataFromHooks.expectedText);
        })
    });

    //Get Data from Hooks---(before())----->
    it('Accessing data through the hooks for multiple tests', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get("input[name='username']").type(loginDataFromHooks.username);
        cy.get("input[name='password']").type(loginDataFromHooks.password);
        cy.get("button[type='submit']").click();
        //Assertion After login
        cy.xpath("//span[text()='Admin']").should('have.text', loginDataFromHooks.expectedText);
    })
})