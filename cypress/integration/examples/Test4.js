/// <reference types = 'cypress' />


describe("this is fourth test suit", function(){

  it('fourth test suit',function(){

cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

//alert and confirm
cy.get('#alertbtn').click()

cy.get('#confirmbtn').click()
//now we are validating this browser events with cy.on
cy.on('window:alert', (str) => {
expect(str).to.equal("Hello , share this practice page and share your knowledge")
})
cy.on('window:confirm', (str) => {
expect(str).to.equal("Hello , Are you sure you want to confirm?")
})

  })
  
})