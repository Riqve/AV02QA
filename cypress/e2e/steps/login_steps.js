/// <reference types="cypress" />
import LoginPage from "../pages/login_page";
const loginPage = new LoginPage


Given(/^I access the home page of the application$/, () => {
	loginPage.accesHomepage()

    loginPage.acessLoginPage()
});

When(/^I input my email "([^"]*)"$/, (email) => {
	console.log(email);

    loginPage.fillLoginEmail(email)
	
});


When(/^and my password "([^"]*)"$/, (password) => {
	console.log(password);
   
    loginPage.fillLoginPassword(password)

});


When(/^Click in the buton$/, () => {
    loginPage.subimitLogin()

});

Then(/^The following message should be displayed "([^"]*)"$/, (mensage) => {
	console.log(mensage);
});
