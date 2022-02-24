/// <reference types="Cypress" />

context('Assertions', () => {
    beforeEach(() => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    })

describe('My alerts and pop-ups test', () => {
 it('Third test case', () => {

    cy.get('#alertbtn').click()
    cy.get('input[value="Confirm"]').click()


    //Trigering browser event on browser!
    cy.on('window:alert', (str) => {
        //Assertions here a depending on Mocha
        expect(str).to.equal('Hello , share this practice page and share your knowledge')

    })
    cy.on('window:confirm', (str) => {
        expect(str).to.equal('Hello , Are you sure you want to confirm?')

    })

    cy.get('#opentab').invoke('removeAttr', 'target').click()
    cy.wait(2000)
    cy.url().should('eq', 'https://www.rahulshettyacademy.com/#/index')
    cy.go('back')




    })
})
})
