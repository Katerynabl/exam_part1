
export function AddItem(productName) {
  cy.get('body').then((body) => {
    if (body.find(`.prdocutname[title="${productName}"]`).length > 0) {
      cy.get(`.prdocutname[title="${productName}"]`).click();
    }
  });
}