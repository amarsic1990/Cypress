/// <reference types="cypress"/>

describe('Accomplishment Dashboard', () => {
  beforeEach(() => {
    cy.visit('/accomplishments');
  });
  it('should showcase error if information is missing', () => {
    cy.getByTestId('accomplishment-title-input').type(
      'idemooooooooooooooooooooo'
    );
    cy.get('[placeholder="My accomplishment..."]').type(
      'anteeeeeeerrrrrrrrrrrrrrrrrrrrrrrreeeee'
    );
    cy.get('.Accomplishment-btn').click();
    cy.get('.Accomplishment-error-container')
      .should('be.visible')
      .and('contain', 'Complete the items above to continue');
  });

  it('should display validation component if all information is input', () => {
    cy.getByTestId('accomplishment-title-input').type('idemoooooo');
    cy.get('[placeholder="My accomplishment..."]').type('anteeeeeeeeeee');
    cy.getByTestId('accomplishment-checkbox').check();
    cy.get('.Accomplishment-btn').click();
    cy.get('h1').should(
      'contain',
      'This Accomplisment was Successfully Submitted'
    );
  });

  it('should return back to accomplishment dashboard with empty input when "Go back" button is clicked', () => {
    cy.getByTestId('accomplishment-title-input').type('idemoooooo');
    cy.get('[placeholder="My accomplishment..."]').type('anteeeeeeeeeee');
    cy.getByTestId('accomplishment-checkbox').check();
    cy.get('.Accomplishment-btn').click();
    cy.get('button').contains('Go Back').click();
    cy.get('h2').should('contain', 'Accomplishment');
    cy.get('.Accomplishment-input').should('be.empty');
    // ili
    cy.get('.Accomplishment-input').should('have.value', '');
    cy.get('.Accomplishment-textarea').should('be.empty');
    // ili
    cy.get('.Accomplishment-textarea').should('have.value', '');
    cy.getByTestId('accomplishment-checkbox').should('not.be.checked');
  });
});
