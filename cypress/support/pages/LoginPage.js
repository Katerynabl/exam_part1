class LoginPage {
    visit(){
        cy.log('Open website login page');
        cy.visit('https://juice-shop-sanitarskyi.herokuapp.com/#/login');
    }

    getEmailField(){
        return cy.get('#email');
    }

    getPasswordField(){
        return cy.get('#password');
    }
    
    getLogInButton(){
        return cy.get('[class="mat-focus-indicator mat-raised-button mat-button-base mat-primary"]');
    }

    submitLoginForm(email, password){
        cy.log(`Auth user with username: ${email} and pass: ${password}`);

        this.getEmailField().type(email)
        this.getPasswordField().type(password)
        this.getLogInButton().click()
    }

}
export default new LoginPage();