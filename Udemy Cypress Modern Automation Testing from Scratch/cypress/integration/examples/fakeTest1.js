describe('Mock test suite', function () {
  it('first test', function () {
    cy.visit('https://rahulshettyacademy.com/angularAppdemo/');
    // mockamo request
    cy.intercept(
      'GET',
      'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
      req => {
        req.url =
          'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra';

        req.continue(res => {
          // modificirali smo request dobili response i zelimo verificirati jesmo li dobili gresku
          expect(res.statusCode).to.equal(404);
        });
      }
    ).as('dummyurl');

    cy.get('button[routerlink="/library"]').click();
    cy.wait('@dummyurl');
  });
});
