import loginPage from "../support/pages/LoginPage";
import user from '../fixtures/RegisteredUser.json';

it('Authorization successful', {retries: 2}, () => {
  loginPage.visit();
  loginPage.submitLoginForm(user.email, user.password);
})

it('Authorization unsuccessful', {retries: 1}, () => {
  loginPage.visit();
  loginPage.submitLoginForm(user.email, "incorrect-password");
  cy.get('.error').contains('Invalid email or password')
  cy.log('test failed because of invalid email or password')

})
