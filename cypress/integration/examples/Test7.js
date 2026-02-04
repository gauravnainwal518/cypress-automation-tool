/// <reference types = 'cypress' />

describe("Handling child windows", function(){

  it("should have child windows", function(){

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    
    cy.get('#opentab').invoke('removeAttr','target').click() 
   // cy.get('#opentab').click() //if we didnot give above jquery function so its open on another tab 

    cy.origin("https://www.qaclickacademy.com/", ()=> {
   cy.get('#navbarSupportedContent a[href*= "about"]').click()
   cy.get('.mt-50 h2').should('contain', 'QAClick Academy') //assertion/validation
    })

   
  })
})