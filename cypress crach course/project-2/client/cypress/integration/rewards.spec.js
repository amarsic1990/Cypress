/// <reference types="cypress"/>

// node index.js --> pokretanje servera
// ako se podaci minjaju neki testovi nam nece prolaziti, sta ako je server spor??
// u FIXTURES su nam testni podaci

describe("Rewards Dashboard", () => {
  beforeEach(() => {
    cy.visit("/rewards");
  });

  it("should display list of rewards", () => {
    cy.get("li")
      .should(
        "contain",
        "500 points for drinking 8 cups of water for 7 straight days"
      )
      .and("contain", "850 points for fasting for 5 days straight")
      .and("contain", "250 points for exercising for 3 straight days")
      .and("contain", "5000 points for getting a new job");
  });

  it("should display list of rewards with mock", () => {
    // presjecamo ovaj REQUEST I VRACAMO REWARDS.JSON
    cy.intercept("GET", "http://localhost:4000/rewards", {
      fixture: "rewards.json",
    });
    cy.get("li")
      .should(
        "contain",
        "500 points for drinking 8 cups of water for 7 straight days"
      )
      .and("contain", "850 points for fasting for 5 days straight")
      .and("contain", "250 points for exercising for 3 straight days");
  });
});
