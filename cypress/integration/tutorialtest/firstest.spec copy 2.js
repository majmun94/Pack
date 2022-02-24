/// <reference types="Cypress" />

context('Assertions', () => {
    beforeEach(() => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    })

describe('My check boxes test', () => {
 it('Third test case', () => {

    //Checkboxes
    cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
    cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
    cy.get('input[type="checkbox"]').check(['option2','option3'])

    //Statit Dropdown
    cy.get('select').select('option2').should('have.value', 'option2')

    //Dynamic Dropdown
    cy.get('#autocomplete').type('ind')
    cy.get('.ui-menu-item div').each(($el, index, $list) => {
        if($el.text() === 'India' ){
            $el.click()
        }
    })
    cy.get('#autocomplete').should('have.value', 'India')

    //Visible/Invisible elements
    cy.get('#displayed-text').should('be.visible')
    cy.get('#hide-textbox').click()
    cy.get('#displayed-text').should('not.be.visible')
    cy.get('#show-textbox').click()
    cy.get('#displayed-text').should('be.visible')

    //Radio Button
    cy.get('input[value="radio2"]').check().should('be.checked')

    })
})
})
