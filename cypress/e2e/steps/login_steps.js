/// <reference types="cypress" />
import LoginPage from "../pages/login_page";
const loginPage = new LoginPage


Given(/^I access the home page of the application$/, () => {
	loginPage.accesHomepage()

    loginPage.acessLoginPage()
});

When(/^I input my email "([^"]*)" and my password "([^"]*)"$/, (email, password) => {
	console.log(email, password);

    loginPage.fillLoginInfo(email, password)
	
});

When(/^Click in the buton$/, () => {
    loginPage.subimitLogin()

});

Then(/^The following message should be displayed "([^"]*)"$/, (mensage) => {
	console.log(mensage);
});
