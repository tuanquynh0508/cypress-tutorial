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

export default {
    visitSiteDemoAction,
    typeEmail,
    clearEmail,
    typePassword,
    typeFullname,
    typeDescription,
    checkDemoCheckbox,
};
