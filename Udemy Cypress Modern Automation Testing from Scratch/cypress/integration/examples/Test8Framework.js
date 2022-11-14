/// <reference types="cypress"/>

import HomePage from '../../support/pageObjects/HomePage';
import ProductPage from '../../support/pageObjects/ProductPage';
// svagdi moramo staviti function jer do mocka sadrzaja ne mozemo doci iz fukcije
// sav setup stavljamo u before metodu
// before se pokrece jednom prije svih testova u bloku
describe('Framework test', function () {
  before(function () {
    // data je dostupna samo u ovom scopeu
    cy.fixture('example').then(function (data) {
      // this.data je nova varijabla koja je dostupna svagdi
      // THIS se odnosi na nesta sta je globalno
      this.data = data; // kopiramo podatke u globalnu varijablu
    });
  });
  it('first test', function () {
    // Cypress.config("defaultCommandTimeout", 8000) // definiramo timeout od 8 sec odavde nadalje
    const homePage = new HomePage();
    const productPage = new ProductPage();

    cy.visit(Cypress.env('url') + '/angularpractice');
    homePage.getEditBox().type(this.data.name);
    homePage.getGender().select(this.data.gender);
    homePage.getTwoWayDataBinding().should('have.value', this.data.name);
    // u should smo stavili 3 parametra atribut i njegova vrijednost
    homePage.getEditBox().should('have.attr', 'minlength', '2');
    homePage.getEnterpreneaur().should('be.be.disabled');

    //cy.pause(); // kada napravimo pause mozemo debagirati
    // imamo i .debug() metodu ali je bolje koristiti pause
    // console je najbolji za debagiranje

    homePage.getShopTab().click();

    // for (let i = 0; i < this.data.productName.length; i++) {
    //   cy.selectProduct(this.data.productName[i]);
    // }

    this.data.productName.forEach(function (element) {
      cy.selectProduct(element);
    });

    productPage.checkoutButton().click();
    // ovaj selector smo sami naisali uzimamo sve table data 4 stupac i samo one s tagom strong
    let productSum = 0;
    cy.get('td:nth-child(4) strong')
      .each(($el, index, $list) => {
        let actualResult = $el.text();
        //$. 50000 s splitom ce rezultirat arrayom --> res[0] = $. res[1] = 50000
        let res = Number(actualResult.trim().split(' ')[1]);
        //cy.log(res);
        productSum += res;
        // ako sumu stavimo da logiramo iza ovoga bit ce nula pa moramo rjesiti ovaj promise....
      })
      .then(function () {
        cy.log(productSum);
      });

    cy.get('.text-right > h3').then(function (element) {
      const totalOnPage = Number(element.text().trim().split(' ')[1]);

      // s expectom radimo usporedbu izmedu 2 stringa
      expect(totalOnPage).to.be.equal(productSum);
    });

    cy.get(':nth-child(6) > :nth-child(5) > .btn').click();
    cy.get('#country').type('croatia');
    cy.get('.suggestions').click();
    cy.get('#checkbox2').click({ force: true });
    cy.get('[value="Purchase"]').click();
    cy.get('.alert').should('exist');
    cy.get('.alert').contains(
      'Success! Thank you! Your order will be delivered in next few weeks :-).'
    );
  });
});
