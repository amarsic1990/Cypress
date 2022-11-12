/// <reference types="cypress"/>

// get uzima jedan ili vise elemenata po selektoru ili aliasu
// naming test fileova je vrlo vazan

// prvi argument je opis svih testova u bloku
// u beforeEach i u each petlji nam ne ide zarez izmedu prvog i drugog argumenta
// na tagove ne stavljamo nista, prije class-e tocku
describe('Locators', () => {
  beforeEach(() => {
    cy.visit('/elements');
  });
  it('locating elements with get', () => {
    // get elements by tag name
    cy.get('button');
    cy.get('h3');
    cy.get('h2');

    // get all elements by class name
    // prije class stavljamo tocku
    cy.get('.btn-with-class');

    // get all elements woth specific classes
    // atribute stavljamo unutar uglatih zagrada UNESEMO IME ATRIBUTA I NJEGOVU VRIJEDNOST
    cy.get('[class="Elements-btn btn-with-class"]');
    cy.get('[class="Elements-btn btn-with-class more-btn-classes"]');

    // get elements by ID
    cy.get('[id="btn-with-id"]');
    cy.get('#btn-with-id');

    // get all elements by specific attribute
    cy.get('[type="submit"]');

    // get all elements by tag name AND class
    cy.get('button.Elements-btn');
    // get all elements by tag name AND class AND id
    cy.get('button.Elements-btn#btn-with-id');
    // get all elements by tag name AND class AND txpe attribute
    cy.get('button.Elements-btn[type="submit"]');

    // get all elements with specific data test id
    // najbolji nacin za query-at objekte
    cy.get('[data-cy="btn-id-1"]');
    cy.getByTestId('btn-id-1');
  });

  // contains uzima DOM element koji sadrzi neki tekst
  // u contains mozemo specificirati i selector i content
  // contains uzima samo jedan element
  it('Locating elements with contains', () => {
    // get element by text
    cy.contains('Unique Text');

    // get element by NO UNIQUE TEXT uzima prvog koji je matchan
    cy.contains('Not Unique Text');

    // with SELECTOR
    cy.contains('[type="submit"]', 'Not Unique Text');

    cy.get('[type="submit"]').contains('Not Unique Text');
  });

  // find uzima potomka od selectiranog elementa
  it.only('Locating elements with find', () => {
    cy.get('form').find('.btn-1');
    cy.get('form').find('.btn-2');
  });
});
