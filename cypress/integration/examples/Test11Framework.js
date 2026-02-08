describe("End to End Ecommerce Test", () => {

  before(function () {
    // runs once before all tests
    cy.fixture("example").then(function (data) {
      this.data = data
    })
  })

  it("Submit Order", function () {   
    const productName = this.data.productName
    
   cypress.config('defaultCommandTimeout', 10000) //now this test cas only take 10 second 
   const homepage = new HomePage()
   homepage.goTo("https://rahulshettyacademy.com/loginpagePractise/#")
    
     
     homepage.login(this.data.username, this.data.password)
    
    cy.contains("Shop Name").should('be.visible')
    cy.get('app-card').should('have.length', 4)

    // dynamically selecting card
    cy.get('app-card').filter(`:contains("${productName}")`)
      .then($element => {
        cy.wrap($element).should('have.length', 1)
        cy.wrap($element).contains('button', 'Add').click()
      })

    // select by index
    cy.get('app-card').eq(0).contains('button', 'Add').click()

    // checkout
    cy.contains('a', 'Checkout').click()

    let sum = 0
    cy.get('tr td:nth-child(4) strong')
      .each($el => {
        const amount = Number($el.text().split(" ")[1].trim())
        sum = sum + amount
      })
      .then(function () {
        expect(sum).to.be.lessThan(200000)
      })

    cy.contains('button', 'Checkout').click()
    cy.get('#country').type('India')
    
    cy.get('.suggestions ul li a').click()

    cy.get('.btn-success').click()
    cy.get('.alert-success').should('contain', 'Success')
  })
})
