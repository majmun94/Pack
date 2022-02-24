/// <reference types="Cypress" />

context('Assertions', () => {
    beforeEach(() => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    })

describe('My table test', () => {
 it('Third test case', () => {

    cy.get('#product').find('tr td:nth-child(2)').each(($el, index, $list) => {
        const text = $el.text()
        if(text.includes('Python')){
            cy.get('#product').find('tr td:nth-child(2)').eq(index).next().then(function(price){
               const priceText = price.text()
               expect(priceText).to.equal('25')
            })
        }
    })

    })
})
})
