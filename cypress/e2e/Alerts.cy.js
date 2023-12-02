//1.JavaScript alert--->Having some text and 'OK' Button
//2.JavaScript Confirm alert--->Having some text and an 'OK' and 'Cancel' Buttons
//3.JavaScript Promp--->Having some text and text box for user input along with 'OK' and 'cancel' Buttons
//4.uthentication alert---> For Authentication Purpose


describe("Alert Handling in JS", () => {

    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

    })

    //1.JavaScript alert--->Having some text and 'OK' Button
    it.skip('Javascript alert', () => {
        cy.get("[onclick='jsAlert()']").click();

        cy.on('window:alert', (t) => {
            expect(t).to.include("I am a JS Alert");   //To check expected text present on alert
        })


        //Alert window automatically closed by cypress
        cy.get("#result").should('have.text', 'You successfully clicked an alert');

    });
    it.skip('JavaScript Confirm Alert', () => {
        //2.JavaScript Confirm alert--->Having some text and an 'OK' and 'Cancel' Buttons
        //--->Cypress by default close alert window using 'Ok' Button.
        //-->To close window using 'Cancel' Button, we need to raise another event 
        cy.get("[onclick='jsConfirm()']").click();   //Alert window automatically closed by cypress using 'Ok' Button.
        cy.on('window:confirm', (t) => {
            expect(t).to.equal('I am a JS Confirm') ;  //To check expected text present on alert
        })

        cy.get("#result").should('have.text', 'You clicked: Ok');
    });

    it('JavaScript Confirm Alert using Cancel button', () => {
        cy.get("[onclick='jsConfirm()']").click(); 
        cy.on('window:confirm', (t) => {
            expect(t).to.equal('I am a JS Confirm') ;  
        })

        //Closing alert window using 'Cancel' Button
        cy.on('window:confirm',()=>
        {
            return false;
        })

     //Validating message after selecting 'Cancel' Button
        cy.get("#result").should('have.text', 'You clicked: Cancel');
    })

    it.skip('JavaScriptPrompt Alert using Ok Button', () => {

        //3.JavaScript promt alert

        //Before opening alert, we need to pass message to the alert.

        //One event for providing value in input box of alert
        cy.window().then((win)=>
        {
            cy.stub(win, 'prompt').returns("Welcome Bro...!!!");
        });

        //Cypress will close pop-up automatically with 'Ok' button
        cy.get("[onclick='jsPrompt()']").click(); 
     

       cy.get("#result").should('have.text', 'You entered: Welcome Bro...!!!');

    });

    it('JavaScriptPrompt Alert using Cancel Button', () => {

        //3.JavaScript promt alert

        //Before opening alert, we need to pass message to the alert.

        //One event for providing value in input box of alert
        cy.window().then((win)=>
        {
            cy.stub(win, 'prompt').returns("Test");
        });

        cy.get("[onclick='jsPrompt()']").click(); 
        cy.wait(2000);

        cy.on('window:prompt', (t) => {
            expect(t).to.equal('I am a JS prompt');
        })


        //Cypress will close pop-up automatically with 'Ok' button, but I want to select 'Cancel' Button.
        cy.on('window:prompt', ()=>false);

       cy.get("#result").should('have.text', 'You entered: Test');


    });

    it.skip('Authenticated alert--->Pass Authentication while launching url', ()=>
    {
     //4.Authentication alert---> For Authentication Purpose

     //Approach:1  --->Pass Authentication while launching the website
      cy.visit("https://the-internet.herokuapp.com/basic_auth",{auth:{username:"admin", password:"admin"}});

      cy.get(".example p").should('include.text', "Congratulations");

    });

    it.skip('Authenticated alert--->Pass Authentication in url', ()=>
    {
     //4.Authentication alert---> For Authentication Purpose

     //Approach:2  --->Pass Authentication in url
      cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth");
      cy.get(".example p").should('contain.text', "Congratulations");
      cy.get(".example p").invoke('text').should('contain','Congratulations');
      cy.get(".example p").contains('Congratulations');

    })

})