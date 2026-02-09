import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import HomePage from "../../../../support/pageObjects/HomePage"

const homePage = new HomePage()

Given('I am on Ecommerce Page', function () {
  homePage.goTo(Cypress.env('url') + "/loginpagePractise/")
})

When('I login to the application', function () {
  this.productPage = homePage.login(this.data.username, this.data.password)

  this.productPage.pageValidation()
  this.productPage.getCardCount().should('have.length', 4)
})

When('I add items to Cart and checkout', function () {
  const productName = this.data.productName

  this.productPage.selectProduct(productName)
  this.productPage.selectFirstProduct()
  this.cartPage = this.productPage.goToCart()
})

When('Validate the total price limit', function () {
  this.cartPage.sumOfProducts().then((sum) => {
    expect(sum).to.be.lessThan(200000)
  })
})

Then('Select the country submit and verify Thankyou', function () {
  const confirmationPage = this.cartPage.checkoutItems()

  confirmationPage.submitFormDetails()
  confirmationPage.getAlertMessage().should('contain', 'Success')
})
