/// <reference types = "cypress"/>

describe('habit dashboard', () => {
  beforeEach(() => {
    cy.visit('/habits');
  });
  it('should display modal when add button is clicked', () => {
    cy.get('.Habit-add-btn').click();
    cy.contains('Add a new habit').should('be.visible');
  });

  // umisto should should mozemo staviti and
  it('should display habit card when new habit is added', () => {
    cy.contains('Add').click();
    cy.get('input[placeholder="Habit"]').type('Ante kralju');
    cy.get('button').contains('Save Changes').click();
    cy.contains('Ante kralju')
      .should('be.visible')
      .and('have.class', 'HabitCard__habit-container');
  });

  it('should toggle icon when habit card is clicked', () => {
    cy.contains('Add').click();
    cy.get('input[placeholder="Habit"]').type('Ante kralju');
    cy.get('button').contains('Save Changes').click();
    cy.get('[src="/static/media/close.fa7e5ead.svg"]').should('be.visible');
    cy.contains('Ante kralju').click();
    cy.get('[src="/static/media/check.9e8832df.svg"]').should('be.visible');
  });
});
