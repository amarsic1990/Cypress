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

    // FIND METODA --> pronasli smo sve producte (4)
    cy.get("@productLocator").find(".product").should("have.length", 4);
    // console.log(abc);

    // u eq --> metodu stavljamo indeks koji zelimo da nam vrati INDEKSIRANJE KRECE OD NULE
    // ovo s indeksima nije dobro hardkodirano je sta ak ose indeksi promine??????????????????
    // containts --> trazi se tekst koji nam je u contains metodi
    // click --> metoda samo klika

    cy.get("@productLocator")
      .find(".product")
      .eq(1)
      .contains("ADD TO CART")
      .click();

    cy.get("@productLocator").find(".product").eq(0).find("button").click();

    // --------------------------------- THEN ---------------------------------
    cy.get("@productLocator")
      .find(".product")
      .eq(2)
      .contains("ADD TO CART")
      .click()
      .then(() => {
        console.log("cao anteeeeeeeeee"); // KADA OVO MANUALNO SREDIMO MOZEMO PRINTAT
      });

    // EACH iterira preko arraya DOM elemenata
    // text metoda uzima tekst od lokatora INCLUDES metoda da li string nesta ukljucuje
    // kada je nešto DEPRECATED moramo WRAPati ELEMENT

    cy.get("@productLocator")
      .find(".product")
      .each(($el, index, $list) => {
        const textVeg = $el.find("h4.product-name").text(); // OVO NE PRIPADA CYPRESSU!!!!!!!!!!!!!!!!!!!
        if (textVeg.includes("Cashews")) {
          $el.find("button").click;
          cy.wrap($el).find("button").click(); // ovo je nnesta deprecated pa ga moramo WRAPATI ELEMENT --> DEPRECATED JE KADA JE METODA PRIKRIZENA
        }
      });

    cy.get(".brand").should("have.text", "GREENKART");

    cy.get(".brand").then((logoElement) => {
      console.log(logoElement.text());
    });

    // ------------------------------------------------
  });
});
