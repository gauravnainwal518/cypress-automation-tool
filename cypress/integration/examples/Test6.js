/// <reference types = 'cypress' /> 

describe("Sixth Test - Mouse Hover Handling", () => {

  it("should handle mouse hover and click hidden element", () => {

    // Visit the practice automation website
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

    // The 'Top' link is inside a hidden hover menu.
    // Method 1 (using jQuery): make the hidden element visible
    // cy.get('div.mouse-hover-content').invoke('show')

    // Method 2: directly click the hidden element using force: true
    // This bypasses Cypress visibility checks
    cy.contains('Top').click({ force: true })

    // Validate that the URL now includes 'top'
    cy.url().should('include', 'top')
  })
})
