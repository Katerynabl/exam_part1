class HomePage {
    visit(){
        cy.log('Open website home page');
        cy.visit('https://juice-shop-sanitarskyi.herokuapp.com');
    }

    getLoginOrRegisterButton(){
    return cy.get('#navbarAccount');
    }

    getLoginButton(){
    return cy.get('#navbarLoginButton');
}
}
export default new HomePage();
