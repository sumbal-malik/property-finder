import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import searchBox from "../../pageobject/homeSearch.js";
import propertyDetails from '../../pageobject/propertyDetails.js';



Given('I visit Property Finder bh', () => {
    cy.visit('https://www.propertyfinder.bh/');

});

When('I search property by Location', () => {
    searchBox.inputLocation();
    searchBox.getLocation();
    searchBox.clickSearchButton();
});


Then('I should see Available From should not be empty', () => {
    propertyDetails.getPropertyDetails();
    propertyDetails.getAvailablefrom();
    propertyDetails.getAvailablefromValue();
});
