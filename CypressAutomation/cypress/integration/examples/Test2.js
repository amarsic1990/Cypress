/// <reference types ="Cypress" />

describe("My second test suite", () => {
  it("My First Test Case", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");

    cy.get(".search-keyword").type("ca");

    cy.get(".products").as("productLocator");

    cy.wait(3000);

    cy.get("@productLocator")
      .find(".product")
      .each(($product) => {
        const textProduct = $product.find(".product-name").text();

        // console.log(textProduct);

        if (textProduct.includes("Cashews")) {
          cy.wrap($product).find("button").click();
        }
      });

    cy.get(".cart-icon").click();
    // kada trazim neki tekst koristiti contains
    cy.get(".action-block").contains("PROCEED TO CHECKOUT").click();
    cy.contains("Place Order").click();
  });
});
