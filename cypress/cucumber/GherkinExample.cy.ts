import {Given, When, Then,And} from "cypress-cucumber-preprocessor/steps";
import indexPage from '../pages/IndexAutomationExercise';
import loginPage from '../pages/LoginAutomationExercise';
import homePage from '../pages/HomeAutomationExercise';

Given("url del sitio",()=> {
    cy.visit("https://automationexercise.com/");
});

Then("la pagina home debera visualizarse correctamente", () => {
    indexPage.verifySignupLoginText(' Signup / Login');
    indexPage.verifySliderCarouselIsDiplayed();
});

When("click sobre el boton 'Signup / Login'", () => {
    indexPage.clickLogin();
});

Then("el formulario 'Login to your account' debera visible", () => {
    loginPage.titleShouldBeEqual("Login to your account");
});

When("el usuario ingrese a {string} y  {string}", (email,password) => {
    loginPage.typeUserEmail(email);
    loginPage.typeUserPassword(password);
});

And("click sobre el boton 'login'", () => {
    loginPage.clickLogin();
});

Then("el usuario debera mostrar 'Logged in as username'", () => {
    homePage.loggedInAsUser("User Automation");
});