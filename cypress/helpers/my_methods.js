import webElements from '../webElements/elements';

const visitSiteDemoAction = () => {
    cy.visit('https://example.cypress.io/commands/actions');
}

const typeEmail = () => {
    cy.get(webElements.emailElement)
    .type('demo@example.com')
    .should('have.value', 'demo@example.com');
}

const clearEmail = () => {
    cy.get(webElements.emailElement)
    .clear()
    .should('not.have.value', 'demo@example.com');
}

const typePassword = () => {
    cy.get(webElements.passwordElement)
    .type('123456')
    .should('have.value', '123456');
}

const typeFullname = () => {
    cy.get(webElements.fullnameElement)
    .invoke('attr', 'placeholder')
    .should('contain', 'Enter your name');

    cy.get(webElements.fullnameElement)
    .type('Nguyen Nhu Tuan')
    .should('have.value', 'Nguyen Nhu Tuan');
}

const typeDescription = () => {
    cy.get(webElements.descriptionElement)
    .type('Demo Example')
    .should('have.value', 'Demo Example');
}

const checkDemoCheckbox = () => {
    cy.get(webElements.checkboxElement)
    .check()
    .should('be.checked');
}

const pressbtnPopoverToggle = () => {
    // cy.wait(9000);
    // Alias the URL /command/actions of api to alias name is exampleCallApi
    cy.intercept('GET', '/command/actions').as('exampleCallApi');
    cy.get(webElements.btnPopoverToggle).invoke('click');
    // Wait for api call done
    cy.wait('@exampleCallApi');
}

const gotoUtilities = () => {
    // cy.contains('Utilities').click();
    cy.get('[href="/utilities"]').click();
}

const verifyElementOnUtilities = () => {
    // cy.intercept('GET', 'https://example.cypress.io/utilities').as('loadPageUtilities');
    cy.get('h1').should('contain', 'Utilities');
    // cy.wait('@loadPageUtilities');
}

const scrollToLastElementOnPage = () => {
    cy.get('[id="Promise"]').find('a').scrollIntoView().click();
}

export default {
    visitSiteDemoAction,
    typeEmail,
    clearEmail,
    typePassword,
    typeFullname,
    typeDescription,
    checkDemoCheckbox,
    pressbtnPopoverToggle,
    gotoUtilities,
    verifyElementOnUtilities,
    scrollToLastElementOnPage,
};
