/// <reference types="cypress" />

context('Assertions', () => {
    beforeEach(() => {
    cy.visit('https://vivant.eco/')
    })

describe('Logo Assertion', () => {
 it('Logo', () => {
     cy.get('[data-testid="logo"]')
     .should('be.visible')
 })
})

describe('Search Assertion', () => {
 it('Search', () => {
    cy.get('[id="search"]')
    .should('be.visible')
})
})

describe('Nav Assertion', () => {
 it.only('Navigation', () => {
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