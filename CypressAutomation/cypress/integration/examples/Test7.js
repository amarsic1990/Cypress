/// <reference types="Cypress"/>
/// <reference types="Cypress-iframe"/>

import 'cypress-iframe';

// JQUERY PROPERTY METODA uzmamo link iz hrefa...............
// ovo minjanje URLova ka ne bi trebalo radit ali meni radi jer je ON OVO PROMINIO U ISTU DOMENU!!!!!!!!!!!!!!!!!!!!!
describe('7th test suite', () => {
  it('neki livi test', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    // cy.get('#opentab').then(el => {
    //   const url = el.prop('href');
    //   cy.visit(url);
    // });

    // FRAME HTML DOKUMENT KOJI JE EMBEDAN U DRUGI HTML DOKUMENT
    // za handlanje frame-ova trebamo instalirati jedan plug in "npm install -D cypress-iframe"
    // zatim ga moramo importati i prije toga ga dodajemo u reference

    cy.frameLoaded('#courses-iframe');

    // switchanje u iframe mode i moramo koristiti find lokator
    // sta ovde moramo staviti zvezdu petokraku na href?????????? radi mi  i bez nje
    cy.iframe().find('a[href*="mentorship"]').eq(0).click();

    // TC provjerit da li nudi 2 paketa
    // ovo ne radi pogledat mal obolje ove iframe-ove
    // cy.iframe().find('h1[class*="pricing-title"]').should('have.length', 2);
  });
});
