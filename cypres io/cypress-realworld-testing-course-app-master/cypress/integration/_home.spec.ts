describe('home page', () => {
  // callback funkcija je drugi argument
  // IT je u biti test

  // before each hook -- SE ZOVE PRIJE NEGO SE SVAKI TEST POKRENE
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  /**
   * CONTEXT
   */
  context('hero section', () => {
    it('the h1 contains the correct text', () => {
      // po best practises na web page-u imamo samo jedan h1
      // get uzima jedan ili vise DOM elemenata po selektoru ili aliasu
      cy.get('h1').contains('Testing Next.js Applications with Cypress');

      cy.get('h1')
        .should('exist')
        .contains('Testing Next.js Applications with Cypress'); // h1 passamo u should i contains metodu --> CONTAINS RADI ASSERTION

      cy.get('[data-test="hero-heading"]').contains(
        'Testing Next.js Applications with Cypress'
      );
    });

    // it.only --> pokreni samo ovaj test.... only mozemo staviti na vise od jednog testa!!!!!!!!
    it('the features on the homepage are correct', () => {
      cy.get('dt').eq(0).contains('4 Courses'); // contains is case sensitive
      cy.get('dt').eq(1).contains('25+ Lessons');
      cy.get('dt').eq(2).contains('Free and Open Source');

      /**
       * CUSTOM COMMANDE
       * dodajemo u support --> commands.ts fileu
       */
      // cy.getByData("hero-heading") -->getByData: ime custom commande, hero-heading: vrijednost data-test atributa
      // Cypress.Commands.add("getbyData", (selector) => { return cy.get('data-test=${selector}]')})
      // getByData : ime custom commande
      // selector: value of the data-test atributa

      cy.getByData('hero-heading');
    });
  });

  context('Courses section', () => {
    it('Course: Testing your First Next.js Application', () => {
      // s findom pronalazimo childen elemente
      cy.getByData('course-0').find('a').contains('Get started').click();
      // pathname --> je URL aplikacije
      // eq - se ođe odnosi na equal
      // We are using the location API to get the “pathname” which is the URL of our application.
      // Then we write our assertion to make sure that it equals the correct URL or path.
      cy.location('pathname').should('eq', '/testing-your-first-application');
    });

    it('Course: Testing Foundations', () => {
      cy.getByData('course-1').find('a').contains('Get started').click();
      cy.location('pathname').should('eq', '/testing-foundations');
    });
    it('Cypress Fundamentals', () => {
      cy.getByData('course-2').find('a').contains('Get started').click();
      cy.location('pathname').should('eq', '/cypress-fundamentals');
    });
  });
});
