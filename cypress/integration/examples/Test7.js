/// <reference types = 'cypress' />

describe("Handling child windows", function(){

  it("should have child windows", function(){

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    // This test removes target="_blank" so the link opens in the same tab.
// It simulates real user behavior by clicking the link and validating the new page.

    
    cy.get('#opentab').invoke('removeAttr','target').click() 
   // cy.get('#opentab').click() //if we didnot give above jquery function so its open on another tab 

    cy.origin("https://www.qaclickacademy.com/", ()=> {
   cy.get('#navbarSupportedContent a[href*= "about"]').click()
   cy.get('.mt-50 h2').should('contain', 'QAClick Academy') //assertion/validation
    })

   
  })
})