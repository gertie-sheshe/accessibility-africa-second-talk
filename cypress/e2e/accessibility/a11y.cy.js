/* eslint-disable no-undef */
/// <reference types="cypress" />

describe("Accessibility tests", () => {
  // it("Has no detectable a11y violations on load", () => {
  //   cy.visit("http://localhost:3000/bad-semantics");
  //   cy.injectAxe();
  //   cy.checkA11y();
  // });

  it("Has no detectable a11y violations on load", () => {
    cy.visit("http://localhost:3000/bad-semantics");
    cy.injectAxe();
    cy.checkA11y(null, {
      includedImpacts: ["critical"],
    });
    // cy.get("button").click();
    // cy.checkA11y();
  });

  // it("FORM detectable a11y violations on load", () => {
  //   cy.visit("http://localhost:3000/bad-form");
  //   cy.injectAxe();
  //   cy.checkA11y();
  // });
});
