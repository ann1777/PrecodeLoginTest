/// <reference types="cypress" />

const { it } = require("mocha")
const { text } = require("stream/consumers")

class AQATestTask {
    beforeEach(() => {
      cy.fixture('testData').as('data')
      cy.visit(this.data.loginPage)
        .contains('img#logomini')
    }

    describe('Web page testing Login fields', function(){

        it('check login vith empty Pasword field', function(){
            cy.get('#all>div>center>h1')
              .contains('QA Portal Login')
            cy.get('input[name="username"]').type(this.data.userName)
            cy.get('input[name="password"]').type(this.data.passwordEmpty)
            cy.get('.btn.btn-success').submit()
            cy.get('span.help-block')
              .contains('Please enter your password.')
        })
    
        it('fill in the UserName and Pasword with invalid credentials and clicked on sing in', function(){
            cy.get('#all>div>center>h1')
              .contains(text()='QA Portal Login')
            cy.get('input[name="username"]').type(this.data.userName)
            cy.get('input[name="password"]').type(this.data.password)
            cy.get('.btn.btn-success').submit()
            cy.get('.form-group.has-error > .help-block')
              .should('contain','No account found with that username')
        })

        it('check the UserAccount present on the site', function(){
            cy.get('treedotsIcon').click()
            cy.get('.container')
              .contains('div.col-12>span#lpLogo.lp-logo')
            cy.get('.container')
              .contains('#searchBtn2')
            cy.get('.container')
              .contains('#generatePassInfieldIconInfield')
            cy.get('#views > div.viewLabel.col-12.lblSites')
              .contains('Passwords')
            cy.get('#sitesView > p')
              .should('contain','No passwords found for this site.')
            cy.get('#views > div.viewLabel.col-12.lblForms')
              .contains('Form Fills')
            cy.get('#formFillView > p')
              .should('contain',"There's nothing in your vault to fill on this site.")
            cy.get('#genPwLabel')
              .contains('Generate password')
            cy.get('#password')
              .contains('Please enter a password...')
        })

        it('check if Generate Password works', function(){
            cy.get('#generatePassInfieldIconInfield').doubleclick()
            cy.get('#displayGenerateContainer > div.meter-gen-pass')
            cy.get('#moreOptions').click()
            cy.get('#historyTable > thead > tr > th:nth-child(1)')
              .contains('Password')
            cy.get('#historyTable > thead > tr > th:nth-child(2)')
              .contains('Date generated')  
            cy.get('#historyBody > tr > td:nth-child(1)')
              .contains(text())
            cy.get('#historyBody > tr > td:nth-child(2)')
              .contains(text())
            cy.get('#clearHistory').click()
            cy.get('#historyEmptyState > p > strong')
              .should('contain','No history available<br>Recently generated passwords appear here.')
            cy.get('#showHistory').click()()
            cy.get('#advanced-features')
              .contains(".col-6.first-col")
            cy.get('#advanced-features')
              .contains(".col-4.gutter-top-lg.panel")
            cy.get('#moreOptions').click()
            cy.get('#fillPasswordBtn').click()            
            cy.get('.form-group.has-error > .help-block')
              .contains('No account found with that username')
        })

        it('check login vith empty Pasword field', function(){
            cy.get('#all>div>center>h1')
              .contains('QA Portal Login')
            cy.get('input[name="username"]').type(this.data.userName)
            cy.get('input[name="password"]').type(this.data.password)
            cy.get('.btn.btn-success').click()
            cy.get('.form-group.has-error > .help-block')
              .should('contain','No account found with that username')
        })
    })
