import searchBox from "../../pageobject/homeSearch";
import propertyDetails from "../../pageobject/propertyDetails";

describe('Scenario 3', () => {

    it('Search for property by location', () => {

        cy.visit('https://www.propertyfinder.bh/');
        searchBox.inputLocation();
        searchBox.getLocation();
        searchBox.clickSearchButton();
        propertyDetails.getPropertyDetails();
        propertyDetails.getAvailablefrom();
        propertyDetails.getAvailablefromValue();



        //propertyDetails.getAvailablefrom().should('not.be.empty')
        // propertyDetails.getAvailablefrom().should('exist').should('not.be.empty');


    })
})

