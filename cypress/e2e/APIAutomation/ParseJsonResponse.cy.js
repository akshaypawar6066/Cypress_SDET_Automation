describe('Parsing the Json Response', ()=>
{
    it('Parsing simple Json Response',()=>
    {
        cy.request(
            {
             method: 'GET',
             url:'https://fakestoreapi.com/products'
            }
        )
        .then((response)=>
        {
            expect(response.status).to.eq(200);
            expect(response.body[0].title).to.eq('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops');
            expect(response.body[0].rating.rate).to.equal(3.9);
            expect(response.body[0].rating.count).to.equal(120);
            expect(response.body[19].price).to.equal(12.99);

        })
    });

    it('Log Price of every Product from the response', ()=>
    {
        let totalPrice=0;
        cy.request(
            {
             method: 'GET',
             url:'https://fakestoreapi.com/products'
            }
        )
        .then((response)=>
        {
           
            //Here we can use forEach() method of array
          for(let i=0;i<response.body.length;i++)
          {
            cy.log(`Id is--->${response.body[i].id}: and price is:--->${response.body[i].price}`)
            totalPrice=totalPrice+response.body[i].price;
          }
          expect(parseInt(totalPrice)).to.eq(3240);

          cy.log("Total Price of the Book is :" + totalPrice)
        })
    })
})