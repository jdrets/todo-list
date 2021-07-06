import TASK_CONSTANTS from '../../../src/utils/constants/task'
import { APP_PORT } from '../../../config'

describe('Task actions', () => {
  it('should display empty state task when no tasks in storage', () => {
    cy.restoreLocalStorage()

    cy.visit(`http://localhost:${APP_PORT}`)

    cy.get('[data-testid="empty-state"]')
      .should('contains.text', 'Oh, task list is empty')
      .should('contains.text', 'Create task')
  })

  it('should be create a task correctly', () => {
    cy.visit(`http://localhost:${APP_PORT}`)

    cy.contains('Create task')
      .click()

    cy.get('[name="status"]')
      .select(TASK_CONSTANTS.STATUS.TODO)

    cy.get('[name="priority"]')
      .select(TASK_CONSTANTS.PRIORITY.LOW)

    cy.get('[name="dueDate"]')
      .type('2021-05-05')

    cy.get('[name="title"]')
      .type('My task test title!')

    cy.get('textarea')
      .type('My task description is awesome!')

    cy.get('[data-testid="modal-container"]')
      .contains('Create')
      .click()

    cy.get('[data-testid="snackbar"]')
      .should('have.text', 'New task added!')

    cy.get('[data-testid="droppable-zone"]')
      .should('have.length', 1)
      .should('contains.text', 'My task test title!')
  })

  it('should be update a task correctly', () => {
    cy.setLocalStorage('tasks', JSON.stringify([
      {
        id: 1,
        orderId: 1,
        title: 'dummy title',
        status: TASK_CONSTANTS.PRIORITY.LOW,
        priority: TASK_CONSTANTS.STATUS.DOING,
        description: 'dummy description'
      }
    ]))

    cy.visit(`http://localhost:${APP_PORT}`)

    cy.get('[data-testid="droppable-zone"]')
      .contains('dummy title')
      .click()

    cy.get('[name="status"]')
      .select(TASK_CONSTANTS.STATUS.TODO)

    cy.get('[name="priority"]')
      .select(TASK_CONSTANTS.PRIORITY.LOW)

    cy.get('[name="dueDate"]')
      .type('2021-05-05')

    cy.get('[name="title"]')
      .clear()
      .type('My task test title!')

    cy.get('textarea')
      .clear()
      .type('My task description is awesome!')

    cy.get('[data-testid="modal-container"]')
      .contains('Update')
      .click()

    cy.get('[data-testid="snackbar"]')
      .should('have.text', 'Task updated!')

    cy.get('[data-testid="droppable-zone"]')
      .should('have.length', 1)
      .should('contains.text', 'My task test title!')
  })

  it('should delete task correctly', () => {
    cy.setLocalStorage('tasks', JSON.stringify([
      {
        id: 1,
        orderId: 1,
        title: 'dummy title',
        status: TASK_CONSTANTS.PRIORITY.LOW,
        priority: TASK_CONSTANTS.STATUS.DOING,
        description: 'dummy description'
      }
    ]))

    cy.visit(`http://localhost:${APP_PORT}`)

    cy.get('[data-testid="droppable-zone"]')
      .contains('dummy title')
      .click()

    cy.get('[data-testid="modal-container"]')
      .contains('Delete')
      .click()

    cy.get('[data-testid="snackbar"]')
      .should('have.text', 'Task deleted!')

    cy.get('[data-testid="droppable-zone"]')
      .should('have.length', 0)
  })
})
