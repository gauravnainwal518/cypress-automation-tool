/// <reference types='cypress' />

describe("mocking http request", function () {
  it("mocking the http request", function () {

    cy.visit("https://rahulshettyacademy.com/angularAppdemo/");

    cy.intercept(
      {
        method: 'GET',
        url: '**/Library/GetBook.php?AuthorName=shetty',
      },
      {
        statusCode: 200,
        body: [
          {
            book_name: "RestAssured with Java",
            isbn: "RSU",
            aisle: "2301"
          }
        ]
      }
    ).as('bookretrievals');

    cy.get('button.btn.btn-primary').click();

    cy.wait('@bookretrievals')
      .its('response.body')
      .then((body) => {
        cy.get('tr').should('have.length', body.length + 1);
      });

    cy.get('p')
      .should('have.text', 'Sorry we have only one book available');
  });
});
