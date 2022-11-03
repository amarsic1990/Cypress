/// <reference types="Cypress" />

describe("First test", () => {
  it("First test", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/"); // visit je metoda koja nam pomaze posjetiti bilo koju stranicu

    // get nam vraca lokator s web stranice... kao pronadi element
    // should nam radi aserciju
    cy.get(".search-keyword").type("ca");

    // cy.wait(3000); // cekamo 3 sekunde

    console.log("ante kralju!!!!!!!!!!!!!");
    //cy.get(".product").should("have.length", 4); // vraca ih 5 na stranici su 4 IMAMO NESTA INVISIBLE
    cy.get(".product").should("have.length", 5);

    /**
     * VISIBLE --> UZET CEMO SAMO VIDLJIVE PROIZVODE
     */
    cy.get(".product:visible").should("have.length", 4);

    /**
     * PARENT CHILD CHAINING
     */
    // parent child chaining
    // unutar geta pronalazimo producte
    cy.get(".products").as("productLocator");

    // const abc = cy.get(".products");
  });
});
