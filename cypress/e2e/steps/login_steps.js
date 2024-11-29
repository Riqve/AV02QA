/// <reference types="cypress" />
import LoginPage from "../pages/login_page";
const loginPage = new LoginPage


Given(/^I access the home page of the application$/, () => {
	loginPage.accesHomepage()
});

When(/^I input my email "([^"]*)" and my password "([^"]*)"$/, (email, password) => {
	console.log(email, password);
    loginPage.acessLoginPage()

    loginPage.fillLoginInfo(email, password)
	
});

When(/^Click in the buton$/, () => {
    loginPage.subimitLogin()

});

Then(/^I have my acess "([^"]*)"$/, (mensage) => {
	console.log(mensage);
});