import { mainPageInstance } from '../pages/main.page'

describe('Google', () => {

  before(() => {
    cy.visit('/')
  })

  it('Should search for required text and check history', (text='Automation') => {
    cy.log('We are about search in google: ' + text)
    mainPageInstance.typeSearchText(text)
    mainPageInstance.clickOnWikipediaResults(text)
    mainPageInstance.takeEvidenceAboutFirstAutomationProcess()
  })
})