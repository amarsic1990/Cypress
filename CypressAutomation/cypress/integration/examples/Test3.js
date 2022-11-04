/// <reference types="Cypress" />

describe('3rd Test suite', () => {
  it('First test case', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    //cy.wait(2000);

    // za check boxe koristimo check metodu
    // RADIO BOTTUNS SU ISTI KA I CHECK BOXOVI
    // be.cheked --> da provjerimo je li chekirana
    // should koristimo za asercije
    // kada koristimo vise shoulda umisto da ga pisemo vise puta mozemo koristiti "and"
    cy.get('#checkBoxOption1')
      .check()
      .should('be.checked')
      .and('have.value', 'option1');
    cy.get('#checkBoxOption1').uncheck().should('not.be.checked');

    // chekiranje vise check boxova
    cy.get('input[type="checkbox"]').check(['option2', 'option3']);

    // prvo stavljamo ime TAGA pa UGLATE ZAGRADE a u uglatim zagradama ATRIBUT I NJEGOVU VRIJEDNOST
    // tagname[attribute=vakue]
    cy.get('input[type="checkbox"]').as('checkBoxes');

    cy.get('@checkBoxes').each($cb => {
      cy.wrap($cb).click();
    });

    /**
     * STATIC DROPDOWN
     */
    // za bilo koji static dropdown SELECT JE TAG
    // ako je select dropdown cypress nam expose-a metodu select u koju mozemo staviti option name ili attribute value
    cy.get('select').select('option2').should('have.value', 'option2');

    /**
     * DYNAMIC DROPDOWN
     */
    // s type metodom upisujemo
    // EACH UDARAMO NA LISTOM ELEMENATA NE NA ELEMENTOM IZNAD U DOMu!!!!!!!!!
    // s SPACEOM PUTUJEMO OD PARENTA DO CHILDA
    cy.get('#autocomplete')
      .type('ind')
      .get('.ui-menu-item div')
      .each($county => {
        if ($county.text() === 'India') {
          cy.wrap($county).click();
          console.log($county.text());
        }
      });

    cy.get('#autocomplete').should('have.value', 'India');

    /**
     * VISIBLE & UNVISIBLE ELEMENTS
     */

    cy.get('#displayed-text').should('be.visible');
    cy.get('#hide-textbox').click();
    cy.get('#displayed-text').should('not.be.visible');
    cy.get('#show-textbox').click();
    cy.get('#displayed-text').should('be.visible');

    /**
     * RADIO BOTTUNS
     */
    // kad trazim atribute mogu i bez TAGA
    // kada trazimo atribute stavljamo ih u uglate zagrade
    cy.get('[value="radio2"]').check();

    /////////////////////////////////////////////
  });
});

/**
 * ALERTS & POPUPS
 */
// cypress ce automatski kliknuti na popup???????
