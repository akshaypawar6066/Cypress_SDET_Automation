import '@4tw/cypress-drag-drop';
describe("Mouse Actions", () => {
    //MouseOver And Click Operation
    it.skip('MouseOver', () => {
        cy.visit("https://demo.opencart.com/");

        //Before Mouseover Element should not be visible
        cy.xpath("//a[text()='Mac (1)']").should('not.be.visible');

        //MouseOver and click on WEbElement
        cy.xpath("//a[normalize-space()='Desktops']").trigger('mouseover').trigger('click');

        //After mouseover element should be visible
        cy.xpath("//a[text()='Mac (1)']").should('be.visible');

    });

    //Right Click--->Approach 1
    it.skip('Performing Right Click Operation->Using mouse Actions', () => {
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html");

        //Before Performing right click below element should not be visible
        cy.xpath("//span[text()='Copy']").should('not.be.visible');

        //Performing right click
        cy.get(".context-menu-one.btn.btn-neutral").trigger('contextmenu');

        //After right click element should be visible
        cy.xpath("//span[text()='Copy']").should('be.visible');

    });

    //Right Click Aprroach-2

    it.skip('Performing Right Click Operation->Directly using right click method', () => {
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html");

        //Before Performing right click below element should not be visible
        cy.xpath("//span[text()='Copy']").should('not.be.visible');

        //Performing right click
        cy.get(".context-menu-one.btn.btn-neutral").rightclick();

        //After right click element should be visible
        cy.xpath("//span[text()='Copy']").should('be.visible');
    });


    //DoubleClick --->Approach 1

    it.skip('Double Click using Mouse actions', () => {
        cy.visit("https://demo.guru99.com/test/simple_context_menu.html");
        //Before Performing Double click Alert will not be available

        //Performing Double click

        cy.get("[ondblclick='myFunction()']").trigger('dblclick');

        //After Double click alert should Contain below text

        cy.on('window:alert', (t) => {
            expect(t).to.include('You double clicked me.. Thank You..');
        })

    });
    //Double Click Approach 2
    it.skip('Double Click using Normal Method', () => {
        cy.visit("https://demo.guru99.com/test/simple_context_menu.html");

        //Before Performing Double click Alert will not be available

        //Performing Double click

        cy.get("[ondblclick='myFunction()']").dblclick();

        //After Double click alert should Contain below text

        cy.on('window:alert', (t) => {
            expect(t).to.include('You double clicked me.. Thank You..');
        })

    });

    //Drag And Drop element

    it.skip('DragAndDrop Mouse Action', () => {
        cy.visit("https://demo.guru99.com/test/drag_drop.html");
        cy.wait(2000);
        cy.get("#credit2").drag("#bank");
    });

    it('Scrolling the WebPage', () => {
        cy.visit("https://www.countries-ofthe-world.com/flags-of-the-world.html");

        //Scrolling upto the element  --->India falg
        cy.xpath("//td[text()='India']").scrollIntoView({ duration: 2000 });

        //Assertion
        cy.xpath("//td[text()='India']").should('be.visible');

        //Scrolling upto the element  --->Czechia falg
        cy.xpath("//td[text()='Czechia']").scrollIntoView({ duration: 2000 });

        //Assertion
        cy.xpath("//td[text()='Czechia']").should('be.visible');

        //Scrolling upto the end of the page
        cy.get("#footer").scrollIntoView({ duration: 2000 });

        //Assertion
        cy.get("#footer").should('be.visible');

    })


})