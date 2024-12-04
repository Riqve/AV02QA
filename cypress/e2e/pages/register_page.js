/// <reference types="cypress" />

class RegisterPage{

    accesHomepage() {
        cy.visit("https://oldi.sussytoons.com/")
        cy.wait(2000)
    }
    
    accessSingUp(){
        cy.contains('Sign up').click({force: true})
    }

    fillUsername(username) {
        cy.get('input[name="user_sign-up"]').type(username);
    }
    

    fillEmailAdress(emailAdress){ 
        cy.get('input[name="email_sign-up"]').clear().type(emailAdress);
    }

    fillPassword1(password1){ 
        cy.get('input[name="pass_sign-up"]').clear().type(password1);
    }

    fillPassword2(password2){ 
        cy.get('#password').clear().type(password2);
    }

    sendRegister(){
        cy.get('input[name="wp-submit"][value="Register"]').click();
    }
}
export default RegisterPage;
