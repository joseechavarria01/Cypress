class LoginAutomationExercise {
    private elements = {
        titleLoginForm: (): Cypress.Chainable<JQuery<HTMLElement>>  => cy.get('div.login-form  > h2'),
        emailInput: (): Cypress.Chainable<JQuery<HTMLElement>>  => cy.getByData('login-email'),
        passwordInput: (): Cypress.Chainable<JQuery<HTMLElement>>  => cy.getByData('login-password'),
        loginButton: (): Cypress.Chainable<JQuery<HTMLElement>>  => cy.getByData('login-button') 
    }

    public titleShouldBeEqual(text: string): void {
        this.elements.titleLoginForm().should('have.text',text)
    } 

    public typeUserEmail(email: string): void {
        this.elements.emailInput().type(email)
    } 

    public typeUserPassword(password: string): void {
        this.elements.passwordInput().type(password)
    } 

    public clickLogin(): void {
        this.elements.loginButton().click();
    }
}

export default new LoginAutomationExercise;