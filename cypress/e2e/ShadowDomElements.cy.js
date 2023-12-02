describe('Handling Of shadowDome elements',()=>
{
    it('Shadow Dom elemnts--->1st Approach',()=>
    {//Using shadow() method
      
        cy.visit('http://watir.com/examples/shadow_dom.html');
       cy.get("#shadow_host").shadow().find('.info').invoke('text').then((text)=>
        {
            cy.log(text);
        })
    });

    it('Shadow Dom elemnts--->2nd Approach',()=>
    {
      //Using includeShadowDom:true while fimding element
        cy.visit('http://watir.com/examples/shadow_dom.html');
        cy.get(".info",{includeShadowDom:true}).invoke('text').then((text)=>
        {
            cy.log(text)
        })
       
       });

       it('Shadow Dom elemnts--->3rd Approach',()=>
    {
       //use includeShadowDom:true in cypress.cinfig.js file.
        cy.visit('http://watir.com/examples/shadow_dom.html');
       cy.get('.info').invoke('text').then((text)=>
        {
            cy.log(text);
        })

    });
    
})