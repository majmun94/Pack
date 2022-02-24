/// <reference types="Cypress" />
import 'cypress-iframe'

context('Assertions', () => {
    before(() => {
    cy.visit('https://rahulshettyacademy.com/angularpractice/')
    cy.fixture('test').then(function(data){
       this.data = data //this.data is global variable, but 'data' is not so we need to assigned it to globabl one
       

    })
    })

describe('json test', () => {
 it('Third test case', function(){
   cy.log(this.data.gender)
   cy.get('input[name="name"]:nth-child(2)').type(this.data.name)
   cy.get('select').select(this.data.gender)
   cy.get('select').should('have.value', this.data.gender)
   cy.get(':nth-child(4) > .ng-untouched').should('have.value', this.data.name)
   cy.get('input[name="name"]:nth-child(2)').should('have.attr', 'minlength','2')
   cy.get('#inlineRadio3').should('be.disabled')

 })
 
})
describe('my command test', () => {
  it('Third test case', function(){
    cy.visit('https://rahulshettyacademy.com/angularpractice/shop')
    cy.selectProduct('Nokia')



})})})
