// USER JOURNEY --> korak po korak journey koji korisnik radi kako bi dosao do cilja
// // e commerce user journey
//   1. pronac proizvod
//   2. dodat ga u kosaricu
//   3. unijet shipping podatke
//   4. unijet podatke o kartici
//   5. platiti
// s jednim testom taknemo sve (UI, API, DB)

describe('User Journey', () => {
  it('a user can find a course on the home page and complete the courses lessons', () => {
    cy.visit('http://localhost:3000');
    cy.getByData('course-0').find('a').contains('Get started').click();
    cy.location('pathname').should('eq', '/testing-your-first-application');
    cy.getByData('next-lesson-button').click();
    cy.location('pathname').should(
      'eq',
      '/testing-your-first-application/app-install-and-overview'
    );
    cy.getByData('challenge-answer-0').check();
    cy.getByData('next-lesson-button').should('exist').click();
    cy.location('pathname').should(
      'eq',
      '/testing-your-first-application/installing-cypress-and-writing-our-first-test'
    );
    cy.getByData('challenge-answer-0').check();
    cy.getByData('next-lesson-button').click();
    cy.wait(2000);
    cy.location('pathname').should(
      'eq',
      '/testing-your-first-application/setting-up-data-before-each-test'
    );
    cy.getByData('challenge-answer-0').check();
    cy.getByData('next-lesson-button').should('exist').click();

    cy.location('pathname').should('eq', '/');
  });
});
