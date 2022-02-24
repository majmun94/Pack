/// <reference types="Cypress" />

context('Assertions', () => {
    beforeEach(() => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    })

describe('My second test', () => {
 it('Second test case', () => {
    //making alias of .products element
     cy.get('.products').as('productLocator')
     cy.get('.search-keyword').type('ca')
     cy.wait(2000)
     cy.get('@productLocator').find('.product').each(($el, index, $list) => {
         const productName = $el.find('h4.product-name').text()
         if(productName.includes('Cashews')){
             $el.find('button').click()
         }
     })
     cy.get('.cart-icon > img').click()
     cy.contains('PROCEED TO CHECKOUT').click()
     cy.contains('Place Order').click()
    })

})
})
