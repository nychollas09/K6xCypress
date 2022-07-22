describe("Event Processing", () => {
  it("should call lambda producer", () => {
    Array.from({ length: 10 }).forEach(() => {
      cy.request("POST", "/", {
        name: `Nichollas${Math.random() * 100}-cypress`,
        cpf: `082710133335${Math.random() * 100}-cypress`,
      });
    });
  });
});
