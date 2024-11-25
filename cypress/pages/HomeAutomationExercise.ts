class HomeAutomationExercise {
    
    elements = {
        logged:(): Cypress.Chainable<JQuery<HTMLElement>> => cy.get('i.fa.fa-user ~ b')
    }

    public loggedInAsUser(user: String): void {
        this.elements.logged().should('have.text',user);
    }
}

export default new HomeAutomationExercise;