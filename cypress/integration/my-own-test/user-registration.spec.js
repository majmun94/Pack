/// <reference types="cypress" />

context('Assertions', () => {
    beforeEach(() => {
    cy.visit('https://qa-task-web.ministryofprogramming.com/')
    })


describe('Search Assertion', () => {
 it.only('Sign Up', () => {
    cy.get('*[class^="e1jqfdaz0 css-o6pyxp e1n1lbzj0"]')
    .first()
    .should('have.text','Sign Up')
})
})

describe('Nav Assertion', () => {
 it('Navigation', () => {
    cy.get('[class="Header_nav__2eril"]')
    .children()
    .should('contain','Live')
    .and('contain','On-Demand')
    .should('have.text','Tasting Kits')
    .contains('Wines')
    .contains('Curious')
    .should('be.visible')
})
})
 
})