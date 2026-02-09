Feature: End to end Ecommerce validation
  @Regression
  Scenario: Ecommerce product delivery
    Given I am on Ecommerce Page
    When I login to the application
    And I add items to Cart and checkout
    And Validate the total price limit
    Then Select the country submit and verify Thankyou

  @Smoke
  Scenario Outline: Ecommerce product delivery cucumber driven
    Given I am on Ecommerce Page
    When I login to the application portal
      | username           | password          |
      | rahulshettyacademy | Learning@830$3mK2 |
    And I add items to Cart and checkout
    And Validate the total price limit
    Then Select the country submit and verify Thankyou

