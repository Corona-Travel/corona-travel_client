describe("ModeSwitcher", () => {
  it("should change theme", () => {
    cy.visit("http://localhost:3000/");

    // should be dark mode
    cy.get("nav").should("have.css", "background-color", "rgb(31, 41, 55)");

    // find a button to switch modes
    cy.get("button[id='ModeSwitcher']").click();

    // should be light node
    cy.get("nav").should(
      "have.css",
      "background-color",
      "rgba(229, 231, 235, 0.75)",
    );
  });
});
