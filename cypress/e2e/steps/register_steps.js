/// <reference types="cypress" />
import RegisterPage from "../pages/register_page";
const registerPage = new RegisterPage

Given(/^I access the home page of the application for register$/, () => {
	registerPage.accesHomepage()

    registerPage.accessSingUp()
});

When(/^I input my username "([^"]*)"$/, (username) => {
    console.log(username); 
    registerPage.fillUsername(username); 
});

When(/^I input my emailAdress "([^"]*)"$/, (emailAdress) => {
    console.log(emailAdress); 

    registerPage.fillEmailAdress(emailAdress); 
});

When(/^I input my password1 "([^"]*)"$/, (password1) => {
    console.log(password1); 

    registerPage.fillPassword1(password1); 
});

When(/^I input my password2 "([^"]*)"$/, (password2) => {
    console.log(password2); 

    registerPage.fillPassword2(password2); 
});

When(/^I click the buton sing Up$/, () => {
	registerPage.sendRegister()
});


Then(/^The following message should be displayed "([^"]*)"$/, (mensage) => {
    console.log(mensage); 

    
    cy.contains(mensage).should('be.visible');
});

