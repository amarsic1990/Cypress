///<reference types="Cypress"/>

describe('4th test suite', () => {
  it('First TC', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    cy.get('#alertbtn').click();
    cy.get('[value="Confirm"]').click();
    // window:alert --> trigeramo ovaj event na alerte........
    cy.on('window:alert', str => {
      // MOCHA
      expect(str).to.equal(
        'Hello , share this practice page and share your knowledge'
      );
    });

    cy.on('window:confirm', str => {
      expect(str).to.equal('Hello , Are you sure you want to confirm?');
    });

    // sada zelimo uklobiti "target="_blank"" da nam novu web stranicu ne otvara u novom tabu
    // ovo cemo napraviti kroz cypress
    // CYPRESS MOŽE MANIPULIRATI DOMom
    // INVOKE --> PRIZIVAMO/DOZIVAMO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // JQUERY ima funkciju removeAttr
    cy.get('#opentab').invoke('removeAttr', 'target').click();

    cy.url().should('include', 'rahul');

    /**
     * IDEMO NAZAD NA WEB PAGE KOJI JE BIO OTVOREN PRIJE
     */
    cy.go('back');

    //////////////////////////////
  });
});
