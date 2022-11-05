describe('Handling mouse hover', () => {
  it('Mouse hover TC', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    // pripazit kada imamo hover sta selectamo
    // SHOW METODA MORA BITI APLAJANA NA NEPOSREDNOG RODITELJA HIDDEN ELEMENTA
    // uz pomoc INVOKE funkcije koristimo JQUERY
    cy.get('.mouse-hover-content').invoke('show');
    cy.contains('Top').click({ force: true });
    cy.url().should('include', 'top');
  });
});
