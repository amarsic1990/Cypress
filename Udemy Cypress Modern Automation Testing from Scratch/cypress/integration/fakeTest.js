describe('Mock test suite', function () {
  it('first test', function () {
    cy.visit('https://rahulshettyacademy.com/angularAppdemo/');

    cy.intercept(
      {
        // MOCKamo HTTP response
        method: 'GET',
        url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
      },
      {
        statusCode: 200,
        body: [
          { book_name: 'null', isbn: 'SPY40', aisle: '2529857' },
          // { book_name: 'null', isbn: 'SPY40', aisle: '2529857' },
        ],
      }
    ).as('bookRetrievals');
    cy.get('button[routerlink="/library"]').click();
    cy.wait('@bookRetrievals').should(({ request, response }) => {
      cy.get('tr').should('have.length', response.body.length + 1);
    });

    cy.get('p').should('have.text', 'Oops only 1 Book available');

    // length of response array = rows of the table
  });
});
