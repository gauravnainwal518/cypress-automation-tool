/// <reference types = "cypress" /> 

describe('this is third testSuit', function(){

  it('third test suit', function(){

  //checkboxes
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
    cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
    cy.get('input[type = "checkbox"]').check(['option2','option3'])


    //static dropdown 
    cy.get('select').select('option2').should('have.value','option2')

    //dynamic dropdown with validation using assertion
    cy.get('#autocomplete').type('ind')
    cy.get('.ui-menu-item div').each(($el, index, $list) => {
      if($el.text() === 'India'){
        cy.wrap ($el).click()
      }
    })

    //autocomplete validation
    cy.get('#autocomplete').should('have.value','India') 


//visible or not visible with validation using assertion
    cy.get('#displayed-text').should('be.visible')
    cy.get('#hide-textbox').click()
    cy.get('#displayed-text').should('not.be.visible')
    cy.get('#show-textbox').click()
    cy.get('#displayed-text').should('be.visible')


    //radio buttons with assertion
    cy.get('[value="radio2"]').check().should('be.checked')
  })
})