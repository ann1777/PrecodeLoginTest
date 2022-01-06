/// <reference types="cypress" />

describe('PrecodeLoginPage property', () => {
    beforeEach(() => {
      cy.visit('https://www.pecodesoftware.com/qa-portal/registerlogin/registerlogin.php')
    })

    it('cy.window() - get the global window object', () => {
        // https://www.pecodesoftware.com/qa-portal/window
        cy.window().should('have.h1', 'QA Portal Login')
        cy.get('#logomini')
          .should('have.property', 'src')
    })

    describe('login input fields', () => {
        const username = new username;
        const password = new password;
        const loginbtn = new loginbtn;

        it('describe Username field', () => {
          username.IsInputHaveAttr([
              {attr: 'placeholder', value: 'Username'},
              {attr: 'type', value: 'text' },
              {attr: 'name', value: 'username'},
              {attr: 'class', value: 'form-control'},
              {attr: 'css-selector', value: 'input[type=text]'}], 0);
          username.expect().to.be.clickable(),
          })

        it('describe Password field', () => {
            password.IsInputHaveAttr([
                {attr: 'placeholder', value: 'Password'},
                {attr: 'type', value: 'password' },
                {attr: 'name', value: 'password'},
                {attr: 'class', value: 'form-control'},
                {attr: 'css-selector', value: 'input[type=password]'}], 0);
            password.expect().to.be.clickable(),
          })

          it('describe Login button', () => {
            loginbtn.IsBtnHaveAttr([
                {attr: 'type', value: 'submit'},
                {attr: 'value', value: 'Login'},
                {attr: 'class', value: 'btn.btn-success'}
                {attr: 'css-selector', value: 'input[type=submit]'}], 0);
            loginbtn.expect().to.be.clickable(),
          })
