// IndexAutomationExercise.ts
class IndexAutomationExercise {

    private elements = {
        getSignupLoginButton: (): Cypress.Chainable<JQuery<HTMLElement>> => cy.get('[href="/login"]'),
        getSliderCarousel: (): Cypress.Chainable<JQuery<HTMLElement>> => cy.get('#slider-carousel [class="carousel-inner"]')
    };

    public clickLogin(): void {
        this.elements.getSignupLoginButton().click();
    }

    public verifySignupLoginText(expectedText: string): void {
        this.elements.getSignupLoginButton().should('have.text', expectedText);
    }

    public verifySliderCarouselIsDiplayed():void {
        this.elements.getSliderCarousel().should('be.visible')
    }
}

// Exportamos una instancia directamente
export default new IndexAutomationExercise();