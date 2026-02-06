/// <reference types = 'cypress' /> 

describe("this is my sixth test ", ()=>{
  it("this is my sixth testsuit", ()=>{
  //handling mousehover on invisible elements 

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    //cy.get('div.mouse-hover-content').invoke('show'); //first method using jquery show ()
    cy.contains('Top').click({force: true}) //second method is {force: true} for clicking only 
    cy.url().should('include', 'top')
  })
})