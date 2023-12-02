//before----->It will execute once before starting all the tests(all the it blocks)
//after------>It will execute once after execution of all the it blocks
//beforeEach--->before execution of each it block
//afterEach--->after execution of each block





describe('Test Suite for Hooks', () => {

    //Before exectuion of all the it blocks--->Login to application(Once)
    before(() => {
        cy.log("Lauching the application...!!!");
    })

    //After exectuion of all the it blocks--->Logout from application(Once)
    after(() => {
        cy.log("Closing the application...!!!");
    })



    beforeEach(() => {
        cy.log("Login to applicatiom....!!!")
    })

    afterEach(() => {
        cy.log("Logout from applicatiom....!!!")
    })

    it('Basic Searching', () => {
        cy.log("******Basic Searching...****")
    })

    it('Advance Search', () => {
        cy.log("******Advance Searching...****")
    })

    it.skip('Product Saerching', () => {
        cy.log("******Product Searching...****")
    })
})