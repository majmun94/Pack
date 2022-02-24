/// <reference types="Cypress" />
import 'cypress-iframe'

context('Assertions', () => {
    beforeEach(() => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    })

describe('My get attr and open new tab test', () => {
 it('Third test case', () => {

    // This down can't be done if we are visiting 3rd party websites. Subdomains are okay.
    cy.get('#opentab').then(function(el) {
        const url = el.prop('href')
        cy.visit(url)
    })

 })
})
})
