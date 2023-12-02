describe('Child Tab Handling', () => {
    it('Child Tab Handling by removing target Attribute', () => {
        cy.visit("https://the-internet.herokuapp.com/windows");
        cy.get("[class='example'] a").invoke('removeAttr', 'target').click();

        cy.url().should('eq', 'https://the-internet.herokuapp.com/windows/new');
        cy.title().should('eq', 'New Window');

        cy.get(".example>h3").should('have.text', "New Window");
        cy.get(".example>h3").invoke('text').should('eq', 'New Window');
        cy.get(".example>h3").invoke('text').then((text) => {
            expect(text).to.equal('New Window');
        });

        cy.get(".example>h3").then((t) => {
            let actualText = t.text();
            expect(actualText).to.equal('New Window');
        })

        cy.get(".example>h3").contains('New Window');
        cy.wait(5000);

        cy.go('back');
        cy.wait(2000);
        cy.url().should('eq', 'https://the-internet.herokuapp.com/windows');
        cy.title().should('eq', 'The Internet');

        cy.go('forward');
    });


    it('Child Tab Handling by Catching href attribute and visit to new url', () => {
        cy.visit("https://the-internet.herokuapp.com/windows");

        cy.url().should('eq', 'https://the-internet.herokuapp.com/windows');
        cy.title().should('eq', 'The Internet');


        cy.get(".example>a").then((t) => {
            let newUrl = t.prop('href');
            let target=t.prop('target');
            cy.log(newUrl);
            cy.log(target);
            cy.visit(newUrl);
        });
        cy.url().should('eq', 'https://the-internet.herokuapp.com/windows/new');
        cy.title().should('eq', 'New Window');

    });
})