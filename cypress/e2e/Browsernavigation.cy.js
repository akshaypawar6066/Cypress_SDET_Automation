describe('Browser Navigations',()=>
{
    it('Handling Of Browser Navigations', ()=>
    {
        cy.visit('https://demo.opencart.com/');
        cy.title().should('eq', 'Your Store');

        cy.get('.nav.navbar-nav>li:nth-child(7)>a').click();   //On Camera page
        cy.title().should('eq', 'Cameras');

       //Browser Navigations

       //1.To Move back to the previous page
       cy.go('back');              //On Home page
       cy.title().should('eq', 'Your Store');

       //2.To Move forward to next page
       cy.go('forward');    //On Camera page
       cy.title().should('eq', 'Cameras');

   

       //3.To refresh the page that is loaded in browser
       cy.reload();     // Reload/Refresh the page
       cy.title().should('eq', 'Cameras');

       cy.wait(3000);

       //Alternative of 'back' and 'forward'
      
    cy.go(-1);  //To Go back
    cy.title().should('eq', 'Your Store');
  
    cy.go(1)   //To Go forward
    cy.title().should('eq', 'Cameras');



    })
}) 