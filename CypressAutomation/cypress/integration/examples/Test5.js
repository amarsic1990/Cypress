describe('web tables', () => {
  it('web tablice prvi test', () => {
    /**
     * WEB TABLES
     */
    // scenario / test case provjerit da li je ta i ta cijena za neki course/tecaj
    // INDEX se  upetlji  UPDATEa
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
      const text = $el.text();

      if (text.includes('Python')) {
        cy.get('tr td:nth-child(2)')
          .eq(index)
          .next()
          .then(price => {
            const priceText = price.text();
            expect(priceText).to.equal('25');
          });
      }
    });
  });
});
