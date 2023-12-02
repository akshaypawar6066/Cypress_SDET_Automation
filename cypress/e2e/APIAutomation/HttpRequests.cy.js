
describe('Handling All HTP Requests', ()=>
{
    it('Get Call', ()=>
    {
        cy.request(
            {
                method: 'GET',
                url:'https://jsonplaceholder.typicode.com/posts/1'
            }
        )
        .then((Response)=>
        {
            expect(Response.status).to.eq(200);
        })
    });

    it('Post call', ()=>
    {
        cy.request(
        {
            method: 'POST',
            url:'https://jsonplaceholder.typicode.com/posts/',
            body: {
                "title":"Test Post",
                "body": "This is Post call",
                "userId":1
            },
           
            Headers: {
              'Content-Type': 'application/json'
            }
           
        })
        .then((response)=>
        {
            expect(response.status).to.eq(201);
        })
    });

    it('Put call', ()=>
    {
        cy.request(
            {
                method: 'PUT',
                url:'https://jsonplaceholder.typicode.com/posts/1',
                body: {
                    title:'Test Post-Updated',
                    body: 'This is Put call',
                    userId:1,
                    id:1
                },
               
                Headers: {
                  'Content-Type': 'application/json'
                }
            }
        )
        .then((response)=>
        {
            expect(response.status).to.eq(200);
        })
       
    });

    it('Delete call', ()=>
    {
        cy.request(
            {
                method:'DELETE',
                url:'https://jsonplaceholder.typicode.com/posts/1'
            }
        ).then((response)=>
        {
            expect(response.status).to.equal(200);
        })
    })
})