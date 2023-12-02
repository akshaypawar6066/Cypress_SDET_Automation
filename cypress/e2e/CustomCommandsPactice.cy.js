describe('Uses of Resusable Commands', () => {
    let data;
    before('Hooks for ReadingData from fixtures', () => 
    {
        cy.log("Reading Data from the fixture file.")
        cy.fixture('LetsShopFixture').then((testData)=>
        {
             data=testData;
        })
    })

    beforeEach('LoginToApplication', () => {
        cy.visit('https://rahulshettyacademy.com/client');
        cy.login(data.email, data.password);
    })


    it('Login with custom commands', () => {
        cy.url().should('include', 'dashboard/dash');
        cy.title().should('eq', "Let's Shop");
    });

    it('Validate size of the available products', () => {
        cy.getSizeOfAvailableProducts("div[class='container'] div[class='row']>div img").then((length) => {
            let actualLength = length;
            let expectedLength = 9;
            assert.equal(actualLength, expectedLength);

        })
    });

    it('validate text present on the webelement', () => {
        cy.getTextPresentOnElement("//button[normalize-space()='Sign Out']").then((text) => {
            let actualTextext = text;
            expect(actualTextext).to.equal(' Sign Out ');
          


        })
    })

})