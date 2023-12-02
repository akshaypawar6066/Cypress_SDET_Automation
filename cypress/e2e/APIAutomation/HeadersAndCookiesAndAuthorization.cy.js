describe('Headers and Authorization', () => {
    let AuthToken;
    let orderId;
    before('Hooks to Generate Authorization Token', () => {
       
        cy.request(
            {
                method: 'POST',
                url: 'https://simple-books-api.glitch.me/api-clients/',
                body: {
                    "clientName": "Test-Akshay",
                    "clientEmail": Math.random().toString(5).substring(2) + "@gmail.com"
                },
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then((response) => {
            AuthToken = response.body.accessToken;
            cy.log('Access token is:' + AuthToken);
        })
    });


    it('Submit Book Order', () => {
        cy.request(
            {
                method: 'POST',
                url: 'https://simple-books-api.glitch.me/orders/',
                body: {
                    "bookId": "6",
                    "customerName": "Akshay"
                },
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + AuthToken
                }
            }
        )
            .then((response) => {
                orderId = response.body.orderId;
                cy.log('Order Id is: ' + orderId);

                expect(response.status).to.equal(201);
                expect(response.body.created).to.equal(true);
            })
    });

    it('Get a Order', () => {
        cy.request(
            {
                method: 'GET',
                url: `https://simple-books-api.glitch.me/orders/${orderId}`,
                headers : {
                    'Authorization': 'Bearer ' +AuthToken
                },
                cookies: {
                    'cookieName':'MyCookie'
                }
            }
        )

            .then((response) => {
                expect(response.status).to.equal(200);
                expect(response.body.customerName).to.equal('Akshay');
                expect(response.body).have.property('bookId',6);
            })
    })
})