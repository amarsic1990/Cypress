/// <reference types="cypress"/>

import HomePage from '../pageObjects/HomePage';
import ProductPage from '../pageObjects/ProductPage';
// svagdi moramo staviti function jer do mocka sadrzaja ne mozemo doci iz fukcije
describe('my 8 test suite', function () {
  // sav setup stavljamo u before metodu
  // before se pokrece jednom prije svih testova u bloku
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

    cy.visit('https://rahulshettyacademy.com/angularpractice/');
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
    cy.get(':nth-child(6) > :nth-child(5) > .btn').click();
    cy.get('#country').type('croatia');
    cy.get('.suggestions').click();
  });
});
