describe('Data Driven Testing', () => {
    it('Data Driven Testing', () => {
        cy.fixture('DataDrivenTestData.json').then((data) => {
            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
            data.forEach((userData) => {
                cy.get("input[name='username']").type(userData.username);
                cy.get("input[name='password']").type(userData.password);
                cy.get("button[type='submit']").click();

                if (userData.username == 'Admin' && userData.password == 'admin123') {
                    cy.xpath("//span[text()='Admin']").should('have.text', userData.expectedText);
                    cy.wait(2000);
                    cy.get(".oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon").click();
                    cy.wait(1000);
                    cy.xpath("//a[text()='Logout']").click();
                    cy.wait(8000);
                }
                else {

                    cy.get("[class='oxd-text oxd-text--p oxd-alert-content-text']").should('have.text', userData.expectedText);
                }

            })

        })
    });

    it('Data Driven Testing In Random Sequence Of Data', () => {
        cy.fixture('DataDrivenTestDataInRandomSequence.json').then((data) => {
            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
            data.forEach((userData) => {
                cy.get("input[name='username']").type(userData.username);
                cy.get("input[name='password']").type(userData.password);
                cy.get("button[type='submit']").click();

                if (userData.username == 'Admin' && userData.password == 'admin123') {
                    cy.xpath("//span[text()='Admin']").should('have.text', userData.expectedText);
                    cy.wait(2000);
                    cy.get(".oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon").click();
                    cy.wait(1000);
                    cy.xpath("//a[text()='Logout']").click();
                    cy.wait(8000);
                }
                else {

                    cy.get("[class='oxd-text oxd-text--p oxd-alert-content-text']").should('have.text', userData.expectedText);
                }

            })

        })
    })
})
