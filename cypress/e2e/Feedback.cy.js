  describe('Feedback form', () => {
    before(() => {
      cy.visit('https://juice-shop-sanitarskyi.herokuapp.com/#/contact');
    });
  
    it("Fill Comment field", () => {
      cy.get('#comment').click().type("some text"); 
    });

    it("Rating slider", () => {
      cy.get('#rating').focus().type('{rightarrow}{rightarrow}');
    });

    it("Solve Captcha", () => {
      cy.get('#captcha').invoke('text').then((captchaText) => {
        let result = eval(captchaText);
      cy.get('#captchaControl').type(result.toString());
      cy.get('#submitButton').click(); 
      });
    });
  });

