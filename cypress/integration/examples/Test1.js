//cypress - Specs

//// <reference types = "Cypress"/>
describe('My first Test Suite', function()
{

it("My firstTest case", function(){

cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
  
cy.get('.search-keyword').type('ca')
})
cy.get('.product')

} )