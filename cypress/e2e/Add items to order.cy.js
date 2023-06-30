// import faker from 'faker';

import loginPage from "../support/pages/LoginPage";
import user from '../fixtures/RegisteredUser.json';

it('Authorization successful', {retries: 2}, () => {
  loginPage.visit();
  loginPage.submitLoginForm(user.email, user.password);
})

 
   it("Add item to order", () => {
    cy.get('mat-grid-tile:nth-child(3) div mat-card div:nth-child(2) button').click();
    cy.get('.mat-toolbar-row > .mat-focus-indicator.ng-star-inserted > .mat-button-wrapper').click();
    cy.get('#checkoutButton > .mat-button-wrapper').click();
    cy.get('[routerlink="/search"] > .mat-button-wrapper > span').click();
    cy.log(`One item added to order`);
  });

    
   it("Delete item from order", () => {
    cy.get('mat-grid-tile:nth-child(3) div mat-card div:nth-child(2) button').click();
    cy.get('.mat-toolbar-row > .mat-focus-indicator.ng-star-inserted > .mat-button-wrapper').click();
    cy.get(':nth-child(2) > .cdk-column-remove').click();
    cy.get('#checkoutButton > .mat-button-wrapper').click();
    cy.get('[routerlink="/search"] > .mat-button-wrapper > span').click();
    cy.log('Item was deleted');
  });

  it("Add more item to order", () => {
    cy.get('mat-grid-tile:nth-child(1) div mat-card div:nth-child(2) button').click();
    cy.get('.mat-toolbar-row > .mat-focus-indicator.ng-star-inserted > .mat-button-wrapper').click();
    cy.get('#checkoutButton > .mat-button-wrapper').click();
    cy.get('[routerlink="/search"] > .mat-button-wrapper > span').click();
    cy.log('New item added');
  });
 
