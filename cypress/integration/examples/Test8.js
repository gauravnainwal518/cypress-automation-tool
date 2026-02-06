/// <reference types = 'cypress' />

describe("Handling child windows", function(){

  it("should have child windows", function(){

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    // This test handles a new tab by extracting the link's href value.
// Instead of clicking, Cypress directly visits the URL and continues the test.

    cy.get('#opentab').then(function(el){
    const url = el.prop('href')
    cy.visit(url) //qaclickacademy.com
    cy.origin(url, ()=>{
      cy.get("div.sub-menu-bar a[href*= 'about']").click()
    })
  })
  })
})