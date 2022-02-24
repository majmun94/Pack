/// <reference types="Cypress" />
import 'cypress-iframe'

context('Assertions', () => {
    beforeEach(() => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    })

describe('My iframe test', () => {
 it('Third test case', () => {

    //get iframe
    cy.frameLoaded('#courses-iframe')

    //switch to iframe mode
    cy.iframe().find('a[href*="mentorship"]').eq(0).click()

    cy.iframe().find('h1[class*="pricing-title"]').should('have.length', 2)

 })
 it('Third test case', () => {

    //cy.get('.mouse-hover-content').invoke('show')
    cy.contains('Top').click({ force: true})
    cy.url().should('include', 'top')

 })
})
})
