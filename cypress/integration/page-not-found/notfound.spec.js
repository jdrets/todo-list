import { APP_PORT } from '../../../config'

describe('Not found page', () => {
  it('should display empty state when page is not exists', () => {
    cy.visit(`http://localhost:${APP_PORT}/page-invalid`)

    cy.get('[data-testid="empty-state"]')
      .should('contains.text', 'Oh, this page does not exist')
      .should('contains.text', 'Go to home')
  })

  it('should redicect to home when button is clicked', () => {
    cy.visit(`http://localhost:${APP_PORT}/page-invalid`)

    cy.get('[data-testid="empty-state"]')
      .contains('Go to home')
      .click()

    cy.url().should('eq', 'http://localhost:9000/')
  })
})
