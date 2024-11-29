/// <reference types="cypress" />
import HomeElement from "../elements/home_elements"
import LoginElements from "../elements/login_elements"

const loginElements = new LoginElements
const homeElements = new HomeElement

const url = Cypress.config('baseUrl')

class LoginPage{

    accesHomepage() {
        cy.visit("url")
        cy.wait(5000)
    }

    acessLoginPage() {
        cy.contains(homeElements.btnEntrar()).click()
    }

    fillLoginInfo(email, password) {
        cy.get(loginElements.inputEmail()).type(email)
        cy.get(loginElements.inputPassword()).type(password)
    }

    subimitLogin() {
        cy.contains(loginElements.btnLogin()).click()
    }




} export default LoginPage