///<reference types ="cypress" />
//above reference is the intellisense and its shows suggestions when we are using the cypress
describe ('customsuite' ,function()
{
 it ('logintest-firstcase',function ()
 {
    cy.visit('https://www.google.com.sg/')
 })
})