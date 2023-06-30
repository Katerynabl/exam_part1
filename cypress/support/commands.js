// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



// Cypress.Commands.add('writeFakerDataToFile', (RegisteredUser, user) => {
//   const jsonData = JSON.stringify(user, null, 2);
//   cy.writeFile(cypress/fixtures/RegisteredUser.json, jsonData);
// });

Cypress.Commands.add('writeFakerDataToFile', (filePath, data) => {
  const jsonData = JSON.stringify(data, null, 2);
  cy.writeFile(`cypress/fixtures/${filePath}`, jsonData);
});