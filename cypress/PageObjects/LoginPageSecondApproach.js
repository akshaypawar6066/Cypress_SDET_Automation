class Login{

    txtUsername="input[placeholder='Username']";
    textPassword="input[placeholder='Password']";
    btnSubmit="button[type='submit']";
    labelMessage="//h6[normalize-space()='Dashboard']"; 
 
    setUsername(username)
    {
        cy.get(this.txtUsername).type(username);

    }

    setPassword(password)
    {
        cy.get(this.textPassword).type(password);
    }

    clickOnLogin()
    {
        cy.get(this.btnSubmit).click();
    }


    verifyLogin()
    {
        if(cy.xpath(this.labelMessage).should('have.text','Dashboard'))
        {
            cy.log("Able to Login the application successfully.")
        }
        else{
            cy.log("Not able to login the application succeesfully.")
        }
    }
}

export default Login;