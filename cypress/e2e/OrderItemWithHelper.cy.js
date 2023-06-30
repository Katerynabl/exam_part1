import {faker} from "@faker-js/faker";
import { AddItem } from '../support/helper';
import loginPage from '../support/pages/LoginPage';
import user from '../fixtures/RegisteredUser.json';

describe('Delivery data', () => {
  let delivery;

  before(() => {
    const DeliveryCountry = faker.location.country();
    const DeliveryName = faker.person.firstName();
    const DeliveryTelephone = faker.phone.number('0505557788');
    const DeliveryZipCode =  faker.location.zipCode(`123354`);
    const DeliveryAddress =  faker.location.streetAddress();
    const DeliveryCity = faker.location.city();
    const DeliveryState = faker.location.state();
    

    delivery = {
      DeliveryCountry,
      DeliveryName,
      DeliveryTelephone,
      DeliveryZipCode,
      DeliveryAddress,
      DeliveryCity,
      DeliveryState,
    
    };

  });


it('Authorization successful', {retries: 2}, () => {
    loginPage.visit();
    loginPage.submitLoginForm(user.email, user.password);
  })
  

    it("Add item", () => {
        AddItem('Best Juice Shop Salesman Artwork'); 
        cy.log('Add product');
       // cy.get('[class="mat-focus-indicator mat-raised-button mat-button-base mat-primary"]')
        cy.get('body app-root div mat-sidenav-container mat-sidenav-content app-search-result div div div.ng-star-inserted mat-grid-list div mat-grid-tile:nth-child(8) div mat-card div:nth-child(2) button').click();
        cy.get('.mat-toolbar-row .mat-focus-indicator.ng-star-inserted').click();
        cy.get('#checkoutButton').click();
    });

    it("Add product button", () => {
        cy.log('Select in address')
        cy.get('div.ng-star-inserted .mat-focus-indicator .mat-button-wrapper span').click();
    });

   it("Fill in the delivery form", () => {

        cy.get('#mat-input-3').type(delivery.DeliveryCountry).should('have.value', delivery.DeliveryCountry)
        cy.get('#mat-input-4').type(delivery.DeliveryName).should('have.value', delivery.DeliveryName)
        cy.get('#mat-input-5').type(delivery.DeliveryTelephone,  { force: true }).should('have.value', delivery.DeliveryTelephone)
        cy.get('#mat-input-6').type(delivery.DeliveryZipCode).should('have.value', delivery.DeliveryZipCode)
        cy.get('#address').type(delivery.DeliveryAddress).should('have.value',delivery.DeliveryAddress)
        cy.get('#mat-input-8').type(delivery.DeliveryCity).should('have.value', delivery.DeliveryCity)
        cy.get('#mat-input-9').type(delivery.DeliveryState).should('have.value', delivery.DeliveryState)
        cy.get('#submitButton .mat-button-wrapper').click()
    });

    it("Choose adress to deliver", () => {
        cy.get('.mat-radio-outer-circle').first().click({ force: true });
        cy.get('.btn-next .mat-button-wrapper span').click({ force: true });
    });

    it("Choose delivery option", () => {
        cy.get('.mat-radio-inner-circle').eq(0) .click({ force: true });
        cy.get('.nextButton .mat-button-wrapper').click()
    });

    it("Payment option", () => {
        cy.get('#mat-expansion-panel-header-0 > .mat-expansion-indicator').click()
        cy.get('#mat-input-10').type(delivery.DeliveryName).should('have.value', delivery.DeliveryName)

        const creditCardNumber = faker.finance.creditCardNumber('2222############');
        cy.get('#mat-input-11').type(creditCardNumber).should('have.value', creditCardNumber)
      
        cy.get('#mat-input-12').select('6')
        cy.get('#mat-input-13').select('2088')
        cy.get('#submitButton .mat-button-wrapper').click()
        cy.log('Payment options added')
    });  

    it("Finishing the ordering form", () => {
        cy.get('.mat-radio-inner-circle').eq(0).click({ force: true })
        cy.get('.nextButton').click()
        cy.get('#checkoutButton').click()
        cy.get('[fxflex="60%"] :nth-child(1) .confirmation').contains('Thank you for your purchase!')
        cy.get('[fxflex="60%"] > :nth-child(1) > div').contains('Your order has been placed and is being processed. You can check for status updates on our ')
       
    });
});