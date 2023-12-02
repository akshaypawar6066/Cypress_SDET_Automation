describe('Handling of Dropdowns', () => {
    it('Dropdown wih select tag', () => {
        cy.visit("https://www.webdriveruniversity.com/");
        cy.get("#dropdown-checkboxes-radiobuttons").invoke('removeAttr', 'target').click();

        //Handling dropdown having select tag
        //Selcet by text
        //Select by index
        //Select by value


        cy.get("#dropdowm-menu-1").select("python");   //By Text
        cy.get("#dropdowm-menu-2").select(3);          //By index
        cy.get("#dropdowm-menu-3").select("css").should('have.value', 'css')     //By value

    });

    //Handling Of Bootstarp Dropdown(Dropdown without select tag)
    it('Handling of Bootstarp Dropdown', () => {
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/");

        //Clicking on the dropdown
        cy.get("#select2-billing_country-container").click();
        cy.get(".select2-search__field").type("Japan").type('{enter}');
        cy.get("#select2-billing_country-container").should('have.text', 'Japan');

    });
    it('AutoSuggest dropdown', () => {
        cy.visit("https://www.google.com/");
        cy.get("#APjFqb").type("Delhi");
        cy.get("ul[role='listbox'] li").contains('delhi earthquake').click();
    })

    it.only('Dynamic Dropdown', () => {
        cy.visit("https://www.google.com/");
        cy.get("#APjFqb").type("Mumbai");
        cy.wait(2000);
        cy.get(".wM6W7d>span").should('have.length', 12);
        cy.get(".wM6W7d>span").each(($el, index, $list)=>
        {
           if($el.text()=='mumbai news')
           {
           cy.wrap($el).click();
           }
        });
        cy.get('#APjFqb').should('have.value','mumbai news');
    })

})