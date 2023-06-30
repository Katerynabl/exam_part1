import {faker} from '@faker-js/faker'
import homePage from "../support/pages/HomePage";

describe('Register new', () => {
  let user;

  before(() => {
    user = {
      email: faker.internet.email(),
      password: faker.internet.password(),
    };
    cy.writeFakerDataToFile('RegisteredUser.json', user);
  });

  it('Registration', () => {
   homePage.visit();
    cy.log(user);
    homePage.getLoginOrRegisterButton().click();
    homePage.getLoginButton().click();
    cy.get('.primary-link').contains('Not yet a customer?').click();
  });


  it("Successful registration", () => {
    cy.get('#emailControl').type(user.email);
    cy.get('#passwordControl').type(user.password);
    cy.get('#repeatPasswordControl').type(user.password);
    cy.get('.mat-select-arrow-wrapper').click();
    cy.get('#mat-option-10').click();
    cy.get('#securityAnswerControl').type("Security answer");
    cy.get('[class="mat-focus-indicator mat-raised-button mat-button-base mat-primary"]').click();
    cy.log('User is registered');
  });

    it("Unseccessfull registration with wrong email",() => {
        cy.get('.primary-link').contains('Not yet a customer?').click();
        cy.get('#emailControl').type('+38050111111'); 
        cy.get('#passwordControl').type(user.password);
        cy.get('#repeatPasswordControl').type(user.password); 
        cy.get('.mat-select-arrow-wrapper').click();
        cy.get('#mat-option-18').click();  
        cy.get('#registerButton').should('be.disabled'); 
        cy.log('registretion failed')
    }); 
  });
