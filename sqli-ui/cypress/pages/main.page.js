const selectors = {
    searchBar: '[name="q"]',
    wikipedia: (searchCriteria) => `[href="https://en.wikipedia.org/wiki/${searchCriteria}"]`,
    history: '[href="#History"]'
}

class MainPage {

    typeSearchText(text) {
        cy.log('Typing search text...')
        cy.get(selectors.searchBar)
            .type('{selectall}{backspace}' + text).type('{enter}')
    }


    clickOnWikipediaResults(text) {
        cy.log('Clicking wiki results...')
        cy.get(selectors.wikipedia(text))
            .click()
    }

    takeEvidenceAboutFirstAutomationProcess() {
        cy.log('Searching for first human automated process...')
        cy.get(selectors.history).click()
        cy.screenshot()
    }
}

export const mainPageInstance = new MainPage()
