/// <reference types="Cypress" />

context('Assertions', () => {
    beforeEach(() => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    })

describe('My hover mouse test', () => {
 it('Third test case', () => {

    //cy.get('.mouse-hover-content').invoke('show')
    cy.contains('Top').click({ force: true})
    cy.url().should('include', 'top')

 })
})
})
