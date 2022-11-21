/// <reference  types = "cypress"/>

import HomePage from '../../support/pageObjects/HomePage';

describe('test', function () {
  it('test', function () {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
    cy.get('.search-keyword').type('ca');

    cy.get('.product:visible').should('have.length', 4);

    cy.get('.products').as('productLocator');
    cy.get('@productLocator').find('.product').should('have.length', 4);

    cy.get('@productLocator').find('.product').eq(0).contains('ADD TO CART');
    //.click();

    cy.get('@productLocator')
      .find('.product')
      .eq(1)
      .contains('ADD TO CART')
      //.click()
      .then(() => {
        console.log('aaafdagsdshgsdgfdhtdgfgvygsfdgb');
      });

    cy.get('@productLocator')
      .find('.product')
      .each(($el, index, $list) => {
        cy.wrap($el).contains('ADD TO CART').click();
      });
    cy.then(() => {
      console.log('logiranje na kraju');
    });
  });

  // druga web stranica za napavit automatizaciju
  it('second TC', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    cy.get('#checkBoxOption1')
      .check()
      .should('be.checked')
      .and('have.value', 'option1');

    cy.get('#checkBoxOption1').uncheck().should('not.be.checked');

    // chekiranje vise chekboxova odjednom
    // vise value-a value chekiramo????????????????????????
    cy.get('input[type="checkbox"]').check(['option2', 'option3']);

    cy.get('select').select('option3').should('have.value', 'option3');

    // dynamic liste
    cy.get('#autocomplete')
      .type('ind')
      .get('#ui-id-1')
      .find('.ui-menu-item')
      .each(($el, index, $list) => {
        if ($el.text() === 'India') {
          cy.wrap($el).click();
        }
      });
    cy.get('#autocomplete').should('have.value', 'India');
  });

  it('uklanjanje atributa', function () {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    cy.get('#alertbtn').click(); // cypress po difoltu ne prikazuje alerte
    cy.get('[value="Confirm"]').click();

    cy.on('window:alert', str => {
      // MOCHA
      expect(str).to.equal(
        'Hello , share this practice page and share your knowledge'
      );
    });

    cy.get('#opentab').invoke('removeAttr', 'target').click();
    cy.go('back');
  });

  it('web tablice', function () {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    // uzimamo table row-ove zatim iz table data ntog cilda (STUPAC) u ovom slucaju drugi
    cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
      const text = $el.text();

      if (text.includes('Python')) {
        cy.get('tr td:nth-child(2')
          .eq(index)
          .next()
          .then(price => {
            const priceText = price.text();
            expect(priceText).to.be.equal('25');
          });
      }
    });
  });

  it.only('mouse hover', function () {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    // ne getamo botun koji hoveramo vec klasu iznad kontenta.....
    // pripazit kada imamo hover sta selectamo
    // SHOW METODA MORA BITI APLAJANA NA NEPOSREDNOG RODITELJA HIDDEN ELEMENTA
    cy.get('.mouse-hover-content')
      .invoke('show')
      .contains('Top')
      .click({ force: true });

    cy.url().should('contain', 'top');
    const homePage = new HomePage();
    homePage.getEditBox().type('aaaaa');
  });
});
