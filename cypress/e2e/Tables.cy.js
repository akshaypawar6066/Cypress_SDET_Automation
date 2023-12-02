
describe('Handling Of tables', () => {

    beforeEach('Login to Application', () => {
        cy.visit('https://demo.opencart.com/admin/index.php');
        cy.get("#input-username").type('demo');
        cy.get("#input-password").type('demo');
        cy.get("[type='submit']").click();
        cy.get('.btn-close').then((t) => {
            if (t.length) {
                t.click();
            }
            else {
                cy.log("Closing PopUp is not present...!")
            }
        })
        cy.get('#menu-customer>a').click();    //Customers men menu
        cy.get(".collapse.show>li:nth-child(1)").click(); //Customer sub menu
    })
    it('Check Number of rows and columns', () => {
        cy.get(".table.table-bordered.table-hover>tbody>tr").should('have.length', 10);
        cy.get(".table.table-bordered.table-hover>thead>tr>td").should('have.length', 7);
    });

    it('Check Cell Data for Specific Row and Columns', () => {

        cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(1)>td:nth-child(3)").should('have.text', 'ceo@wolfchip.com');
    });

    it('Read All the row and column data in the first page', () => {
        cy.get(".table.table-bordered.table-hover>tbody>tr").each(($row, index, $rows) => {
            cy.wrap($row).within(() => {
                cy.get('td').each(($col, index, $cols) => {
                    cy.log($col.text());
                })
            })
        })
    });

    it.only('Paginatiom table', () => {
        /*
           cy.get('.col-sm-6.text-end').invoke('text').then((text)=>
           {
               //Find Total no of pagess
              let RecodsText=text;
              let totalPages=RecodsText.substring(RecodsText.indexOf('(')+1, RecodsText.indexOf(' Pages'));
              cy.log("Total pages are:"+totalPages);
   
           })
           */

        //Get the data from the table with pagination
        let totalPages = 7;
        for (let p = 3; p <= totalPages; p++) {
            if (totalPages > 1) {
                cy.log('Current Acive page is:' + p);
                cy.get(".pagination>li:nth-child(" + p + ")").click();
                // cy.get(`.pagination>li:nth-child(${p})`)


                cy.wait(3000);
                cy.get(".table.table-bordered.table-hover>tbody>tr").each(($row, index, $rows) => {
                    cy.wrap($row).within(() => {
                        cy.get('td:nth-child(3)').each(($col, index, $cols) => {
                            cy.log($col.text())   //Will Capture email Address

                        })
                    })
                })

            }
        }



    })

})