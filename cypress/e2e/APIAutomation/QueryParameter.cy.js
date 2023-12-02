describe('API Testing', ()=>
{
    it('Passing Query Parameters first approach', ()=>
    {
        cy.request(
            {
                method: 'GET',
                url:'https://reqres.in/api/users',
                qs: {
                    'page':2
                }
            }
        ).then((response)=>
        {
            expect(response.status).to.eq(200);
            expect(response.statusText).to.equal('OK');

            //To check data value against any property
            expect(response.body.page).to.eq(2);
            //To check length of data
            expect(response.body.data).have.length(6);
            //To check any property with its data vaue
            expect(response.body).have.property('total_pages',2);

            //To check specific values inside the array of jsons. (here data array)
             expect(response.body.data[0]).have.property('id',7);
             expect(response.body.data[3]).have.property('first_name')
             expect(response.body.data[3]).have.property('first_name','Byron');

        
        });
    });

    const queryParam={page:2}


    it('Passing Query Parameters second approach', ()=>
    {
        cy.request(
            {
                method: 'GET',
                url:'https://reqres.in/api/users',
                qs: queryParam
            }
        ).then((response)=>
        {
            expect(response.status).to.eq(200);
            expect(response.statusText).to.equal('OK');

            //To check data value against any property
            expect(response.body.page).to.eq(2);
            //To check length of data
            expect(response.body.data).have.length(6);
            //To check any property with its data vaue
            expect(response.body).have.property('total_pages',2);

            //To check specific values inside the array of jsons. (here data array)
             expect(response.body.data[0]).have.property('id',7);
             expect(response.body.data[3]).have.property('first_name')
             expect(response.body.data[3]).have.property('first_name','Byron');

        
        });
    })
})