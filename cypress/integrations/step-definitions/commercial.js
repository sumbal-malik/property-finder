import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import searchBox from "../../pageobject/homeSearch.js";
//import webpack from "@cypress/webpack-preprocessor";

//const { Given, When, Then } = require('cypress-cucumber-preprocessor/steps');


Given("I visit the website Property Finder bh", function () {

    cy.visit('https://www.propertyfinder.bh/')

});
When('I click on the commercial properties only checkbox', () => {
    searchBox.commercialProperty();
});
// And('I click the search button', () => {
//     searchBox.clickSearchButton();
// });
// And('I select offices category', () => {
//     searchBox.officesCategory();
// });
Then('I should see property details matching the API response', () => {
    cy.request({
        method: 'GET',
        url: 'https://www.propertyfinder.bh/_next/data/LgXKDdp5ybDjr7zeP_ZWC/en/search.json?c=3&t=4&fu=0&ob=mr',

    }).then((response) => {

        cy.log('Response:', JSON.stringify(response.body));
        cy.get('.styles_container__KcjEg > span').as('testing')
        // Extract payload count from the response
        const payloadCountInResponse = response.body.pageProps.searchResult.meta.total_count; // Get count from api

        // Perform assertion: Compare payload count with response
        cy.get('@testing').should('contain', new Intl.NumberFormat().format(payloadCountInResponse))


        // Perform assertion: Compare payload price with response
        let payloadPriceInResponse = response.body.pageProps.searchResult.properties[0].price.value; // Get price form api
        let priceInResponse = new Intl.NumberFormat().format(payloadPriceInResponse)
        cy.log(priceInResponse)
        cy.get('.view_desktop_paid-listings__0F5Mq > li:nth-child(1)')
            .find('.styles_content__price__QWhhY').first()
            .invoke('text')
            .then((price) => {
                cy.log(`The price of the first property is: ${price}`);
                expect(price).to.include(priceInResponse);
            });

        // Perform assertion: Compare payload title with response
        let payloadTitle = response.body.pageProps.searchResult.properties[0].title; // Get title form api
        cy.log(payloadTitle)
        cy.get('.view_desktop_paid-listings__0F5Mq > li:nth-child(1)')
            .find('.styles_content__title__c6Usc').first()
            .invoke('text')
            .then((title) => {
                cy.log(`The title of the first property is: ${title}`);
                expect(title).to.include(payloadTitle);
            });

        // Perform assertion: Compare payload location with response
        let payloadLocation = response.body.pageProps.searchResult.properties[0].location.full_name; // Get location form api
        cy.log(payloadLocation)
        cy.get('.view_desktop_paid-listings__0F5Mq > li:nth-child(1)')
            .find('.styles_content__location__EdWKZ').first()
            .invoke('text')
            .then((location) => {
                cy.log(`The location of the first property is: ${location}`);
                expect(location).to.include(payloadLocation);
            });
        // Perform assertion: Compare payload bathrooms with response
        let payloadBathrooms = response.body.pageProps.searchResult.properties[0].bathrooms; // Get bathrooms form api
        cy.log(payloadBathrooms)
        cy.get('.view_desktop_paid-listings__0F5Mq > li:nth-child(1)')
            .find('.styles_content__details-item__lHQFK').first()
            .invoke('text')
            .then((bathrooms) => {
                cy.log(`The no. of bathrooms of the first property are: ${bathrooms}`);
                expect(bathrooms).to.include(payloadBathrooms);
            });
        // Perform assertion: Compare payload size with response
        let payloadSize = response.body.pageProps.searchResult.properties[0].size.value; // Get size form api
        cy.log(payloadSize)
        cy.get('.view_desktop_paid-listings__0F5Mq > li:nth-child(1)')
            .find('[data-testid="property-card-spec-area"]').first()
            .invoke('text')
            .then((size) => {
                cy.log(`The no. of bathrooms of the first property are: ${size}`);
                expect(size).to.include(payloadSize);
            });
        // Perform assertion: Compare payload description with response
        propertyDetails.getPropertyDetails();
        let payloadDescription = response.body.pageProps.searchResult.properties[0].description; // Get size form api
        cy.log(payloadDescription)
        cy.get('.property-page__description>div')
            .invoke('text')
            .then((description) => {
                cy.log(`The description of first property is: ${description}`);
                expect(description.replaceAll(`\n`, '').replace('Read more', '')).to.equals(payloadDescription.replaceAll(`\n`, ''));
            });

    });

})