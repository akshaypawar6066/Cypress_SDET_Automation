class Login{
 
    setUsername(username)
    {
        cy.get("input[placeholder='Username']").type(username);

    }

    setPassword(password)
    {
        cy.get("input[placeholder='Password']").type(password);
    }

    clickOnLogin()
    {
        cy.get("button[type='submit']").click();
    }


    verifyLogin()
    {
        if(cy.xpath("//h6[normalize-space()='Dashboard']").should('have.text','Dashboard'))
        {
            cy.log("Able to Login the application successfully.")
        }
        else{
            cy.log("Not able to login the application succeesfully.")
        }
    }
}

export default Login;