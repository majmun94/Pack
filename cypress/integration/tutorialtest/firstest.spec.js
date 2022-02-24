/// <reference types="Cypress" />

context('Assertions', () => {
    beforeEach(() => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    })

describe('My first test', () => {
 it('First test case', () => {
     cy.get('.search-keyword').type('ca')
     cy.wait(2000)
     cy.get('.product:visible').should('have.length', 4)
    //making alias of .products element
     cy.get('.products').as('productLocator')

     cy.get('@productLocator').find('.product').should('have.length', 4)

     cy.get('@productLocator').find('.product').eq('2').contains('ADD TO CART').click()

     // first .find('.product') is Cypress find method, but second $el.find('h4.product-name').text() is jQuery method
     cy.get('.products').find('.product').each(($el, index, $list) => {
         cy.log($el)
         cy.log(index)
         cy.log($list)
        const textVeg = $el.find('h4.product-name').text()
        if(textVeg.includes('Cashews'))
            {
                $el.find('button').click()
            }
     })

     //Handling promises in our way if we want to add it into variable
     cy.get('.brand').then(function(logoelement){
         cy.log(logoelement)
         cy.log(logoelement.text())
     })

     cy.get('.brand').should('have.text', 'GREENKART')
     
 })
})

})