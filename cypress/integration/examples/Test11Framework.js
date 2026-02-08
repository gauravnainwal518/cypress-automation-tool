describe("End to End Ecommerce Test",()=>{
  it("Submit Order", ()=>{
    const productName = "Nokia Edge"
    cy.visit("https://rahulshettyacademy.com/loginpagePractise/#")
    cy.get("#username").type("rahulshettyacademy")
    cy.get("#password").type("Learning@830$3mK2")
    cy.contains("Sign In").click()
    cy.contains("Shop Name").should('be.visible')
    cy.get('app-card').should('have.length',4)

    //dynamically selecting the third card
    cy.get('app-card').filter(`:contains("${productName}")`)
    .then($element=>{
      cy.wrap($element).should('have.length', 1)
      cy.wrap($element).contains('button','Add').click()
    })
    //based on the index selecting the card
    cy.get('app-card').eq(0).contains('button','Add').click()
    //now click on checkout 
    cy.contains('a','Checkout').click()
    let sum = 0
    cy.get('tr td:nth-child(4) strong')
    .each($el=>{
    const amount =  Number($el.text().split(" ")[1].trim())
    sum = sum + amount
    }).then(function(){
      expect(sum).to.be.lessThan(200000)
    })
    cy.contains('button','Checkout').click()
    cy.get('#country').type('India')
    cy.wait(8000)
    cy.get('.suggestions ul li a').click()
    
    cy.get('.btn-success').click()
    cy.get('.alert-success').should('contain','Success')
  })
})