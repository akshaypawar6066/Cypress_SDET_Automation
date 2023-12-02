describe('Ways of sending data to the requesr=t', ()=>
{
    let fixData;
    before('Hook To get request body from fixture file', ()=>
    {
        cy.fixture("PostAddTourist.json").then((data)=>
        {
           fixData=data;
        });
    })
   
    it('Sending payload with hard coded data', ()=>
    {
        const requestBody = {
            "tourist_name":"Akshay",
            "tourist_email":`demoUser${Math.random()*1000}@gmail.com`,
            "tourist_location":"Delhi"
        }

        cy.request(
            {
                method: 'POST',
                url:'http://restapi.adequateshop.com/api/Tourist',
                body : requestBody,
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then((response)=>
        {
            expect(response.body.tourist_name).to.equal(requestBody.tourist_name);
            expect(response.status).to.equal(201);
            expect(response.statusText).to.equal('Created');
        })
    });

    it('send Body using Fixture file data', ()=>
    {
       


        cy.request(
            {
                method: 'POST',
                url:'http://restapi.adequateshop.com/api/Tourist',
                body : fixData,
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then((response)=>
        {
    
            expect(response.body.tourist_name).to.equal(fixData.tourist_name);
            cy.log("Tourist Name is:"+response.body.tourist_name)
            
            expect(response.body.tourist_email).to.equal(fixData.tourist_email);
            cy.log("Tourist email is:"+response.body.tourist_email)

            expect(response.body.tourist_location).to.equal(fixData.tourist_location);
            cy.log("Tourist locatiion is:"+response.body.tourist_location)

            expect(response.status).to.equal(201);
            expect(response.statusText).to.equal('Created');
        })
    })
})