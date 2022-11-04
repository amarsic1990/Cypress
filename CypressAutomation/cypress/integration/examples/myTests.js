/// <reference types = "Cypress"/>

describe("Neke moje kombinacije", () => {
  it("Prvi test", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword").type("ca");
    cy.get(".products").as("productLocator");
    cy.wait(3000);

    cy.get("@productLocator")
      .find(".product")
      .each(($prod) => {
        cy.wrap($prod).find("button").click();
      });
    // .each(($el, index, $list) => {
    //   cy.wrap($el).find("button").click();
    // });
  });
});
