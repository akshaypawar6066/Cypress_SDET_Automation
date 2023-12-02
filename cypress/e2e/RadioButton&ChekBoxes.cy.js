describe('CheckUiElements', () => {
    it.skip("Handling of radio Buttons", () => {
        cy.visit("/");
        cy.get("#dropdown-checkboxes-radiobuttons").invoke('removeAttr', 'target').click();
        cy.wait(2000);

        //Checking Visibility of radio Button
        cy.get("[value='green']").should('be.visible').and('not.be.checked');

        // cy.get("[value='green']").check();
        cy.get("[value='orange']").check();
    });

    it.skip('Handling CheckBoxes', () => {

        cy.visit("/");
        cy.get("#dropdown-checkboxes-radiobuttons").invoke('removeAttr', 'target').click();
        cy.wait(2000);

        //Checking visibility of checkboxes
        cy.get("[value='option-3']").should('be.visible').and('be.checked');
        cy.get("[value='option-4']").should('be.visible').and('not.be.checked');

        //Checking and uncheking the checkboxes
        cy.get("[value='option-3']").uncheck().should('not.be.checked');
        cy.wait(2000);
        cy.get("[value='option-4']").check().should('be.checked');

    });
    it.skip('Selection Of all the Checkboxes', () => {
        cy.visit("https://www.webdriveruniversity.com/");
        cy.get("#dropdown-checkboxes-radiobuttons").invoke('removeAttr', 'target').click();
        cy.wait(2000);

        cy.get("[type='checkbox']").check().should('be.checked');
        cy.wait(2000);
        cy.get("[type='checkbox']").uncheck().should('not.be.checked');
    });

    it('Selection First And Last CheckBox From List', () => {
        cy.visit("https://www.webdriveruniversity.com/");
        cy.get("#dropdown-checkboxes-radiobuttons").invoke('removeAttr', 'target').click();
        cy.wait(2000);


        cy.log("Unchecking default checkbox");
        cy.get("[value='option-3']").uncheck().should('not.be.checked');
        cy.get("[type='checkbox']").first().check().should('be.checked');
        cy.wait(2000);
        cy.get("[type='checkbox']").last().check().should('be.checked');
    });



})