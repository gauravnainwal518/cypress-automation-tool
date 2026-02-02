//cypress - Specs

/// <reference types="cypress" />

describe('My first Test Suite', function()
{

it("My firstTest case", function(){

cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
  
cy.get('.search-keyword').type('ca')
cy.get('.search-keyword')
cy.wait(2000)
// visible method 
cy.get('.product:visible').should('have.length', 4)

//parent child chaining get and find methods and we select product based on index
cy.get('.products').as ('productLocator')
cy.get('@productLocator').find('.product').should('have.length', 4)
cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click()

//now we selecting text dynamically directly not selecting index 
//so we used each method

cy.get('@productLocator').find('.product').each(($el, index, $list) => {
 const textVeg =  $el.find('h4.product-name').text()
 if(textVeg.includes('Cashews')){
 cy.wrap($el).find('button').click()
 }
})
//assert if logo text is correctly displayed
cy.get('.brand').should('have.text','GREENKART')
 
//this is the print in logs
cy.get('.brand').then(function(logoelement)
 {
cy.log(logoelement.text())
 })

})
 
 

} )