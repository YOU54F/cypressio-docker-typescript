import { add } from '../support/helpers/add'

describe('TypeScript', () => {
  it('works', () => {
    // note TypeScript definition
    const x: number = 42
  })

  it('checks shape of an object', () => {
    const object = {
      age: 21,
      name: 'Joe',
    }
    expect(object).to.have.all.keys('name', 'age')
  })

  it('uses cy commands', () => {
    cy.wrap({}).should('deep.eq', {})
  })

  it('tests cypress.io\s example site', () => {
    cy.visit('https://example.cypress.io/')
    cy.get('.home-list')
      .contains('Querying')
      .click()
    cy.get('#query-btn').should('contain', 'Button')
  })

  it('has Cypress object type definition', () => {
    expect(Cypress.version).to.be.a('string')
  })

  it('adds numbers', () => {
    expect(add(2, 3)).to.equal(5)
  })

  it('adds numbers from the global cypress namespace - support/commands.ts', () => {
    cy.sum(2, 3).should('equal',5)
  })


  it('uses custom command cy.foo()', () => {
    cy.foo().should('be.equal', 'foo')
  })
})