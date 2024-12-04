/// <reference types="cypress" />
import HomeElement from "../elements/home_elements"
import LoginElements from "../elements/login_elements"

const loginElements = new LoginElements
const homeElements = new HomeElement

const url = Cypress.config('baseUrl')

class LoginPage{

    accesHomepage() {
        cy.visit("https://oldi.sussytoons.com/", { failOnStatusCode: false })
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
          })   
        cy.wait(5000)
    }

    acessLoginPage() {
        cy.contains(homeElements.btnEntrar()).click({ force: true });
    }

    fillLoginEmail(email) {
        cy.get(loginElements.inputEmail()).type(email)
    }
    
    fillLoginPassword(password){
        cy.get(loginElements.inputPassword()).clear().type(password)
    }

    subimitLogin() {
        cy.get(loginElements.btnLogin()).click({ force: true })
    }




} export default LoginPage