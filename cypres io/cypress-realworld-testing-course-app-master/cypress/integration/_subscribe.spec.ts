describe('Newsletter Subrcrobe Form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('allows users to subscribe t othe email list', () => {
    cy.getByData('email-input').type('ante@net.hr');
    cy.getByData('submit-button').click();
    // kada se nesta novo pojavi na web page-u trebamo napisati test 'should('exist')'
    cy.getByData('success-message').should('exist').contains('Success');
  });

  it('does NOT allow a invalid email address', () => {
    cy.getByData('email-input').type('ante');
    cy.getByData('submit-button').click();
    cy.getByData('success-message').should('not.exist');
  });

  it('does NOT allow already subscribed email addresses', () => {
    cy.getByData('email-input').type('john@example.com');
    cy.getByData('submit-button').click();
    cy.getByData('server-error-message')
      .should('exist')
      .contains('already exists. Please use a different email address.');
  });
});
