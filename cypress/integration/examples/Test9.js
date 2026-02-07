/// <reference types='cypress' />
/// <reference types='cypress-iframe' />

import 'cypress-iframe'

describe('Frames test', () => {
  it('this is iframe test suite', () => {

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

    // Load iframe
    cy.frameLoaded('#courses-iframe')

    // Work inside iframe
    cy.iframe('#courses-iframe')
      .find("a[href*='mentorship']")
      .eq(0)
      .click()

    // Assertion (optional but recommended)
    cy.url().should('include', 'mentorship')
  })
})
