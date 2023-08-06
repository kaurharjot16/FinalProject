///<reference types ="cypress" />

describe ('loginfunctionality' ,function()
{
 it ('logintest-firstcase',function ()
 {
    cy.visit('https://automationteststore.com/')
    cy.contains('Login or register').click()
    cy.get('[title="Continue"]').click()
    cy.get('[name="firstname"]').type('Harjot')
    cy.get('[name="lastname"]').type('kaur')
    cy.get('[id="AccountFrm_email"]').type('harkaur012345@gmail.com')
    cy.get('[id="AccountFrm_address_1"]').type('2156, Avenue smith')
    cy.get('[name="city"]').type('quebec')
    cy.get('[id="AccountFrm_zone_id"]').select('Kent')
    cy.get('[id="AccountFrm_postcode"]').type('G4V3H5')
    cy.get('[id="AccountFrm_country_id"]').select('United Kingdom')
    cy.get('[name="loginname"]').type('harjot012345')
    cy.get('[id="AccountFrm_password"]').type('harjot128')
    cy.get('[id="AccountFrm_confirm"]').type('harjot128') 
    cy.get('[id="AccountFrm_newsletter1"]').check({force:true})
    cy.get('[id="AccountFrm_agree"]').check({force:true})
    cy.get('[title="Continue"]').click()

    cy.get('#categorymenu > nav> ul>li:nth-child(4)> a').click()

    cy.get('.contentpanel > :nth-child(2) > :nth-child(2) > a').click()
    cy.get(':nth-child(1) > .thumbnail > :nth-child(1) > img').click()

    cy.get('[name="quantity"]').clear()
    cy.get('[name="quantity"]').type("6")
    cy.get('.productpagecart >li > a').click()

    cy.get('.maintext').should('have.text', ' Shopping Cart')
    cy.get('[id="cart_checkout2"]').click()     

  cy.title().should ('eq', 'checkout  confirmation')
  cy.get('#loginfrm_loginname').type('harjot01')
  cy.get('loginfrm_password').type('harjot128')

  cy.get('[id ="checkout_btn"]').click()
  cy.get('[class ="btn btn-default mr10 "]')
 })
})
