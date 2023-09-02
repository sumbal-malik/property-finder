import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import searchBox from "../../pageobject/homeSearch.js";


let payloadCountInResponse;

Given('I visit the Property Finder website', () => {
    cy.visit('https://www.propertyfinder.bh/');

});

When('I select the property type and apply filters', () => {
    searchBox.selectPropertyType();
    searchBox.clickSearchButton();
    searchBox.filterPriceOverlay();
    searchBox.findProperty();
});


Then('I should see the correct total count displayed from search results api response', () => {

    cy.request({
        method: 'GET',
        url: 'https://www.propertyfinder.bh/_next/data/LgXKDdp5ybDjr7zeP_ZWC/en/search.json?c=1&t=35&pt=300000&fu=0&rp=m&ob=mr',
    }).then((response) => {
        cy.log('Response:', JSON.stringify(response.body));
        const trigger = cy.get('.styles_container__KcjEg > span')
        //const trigger = searchBox.propertyResults();
        // Extract payload count from the response
        const payloadCountInResponse = response.body.pageProps.searchResult.meta.total_count; // Replace 'count' with the actual key
        cy.wait(5000)
        cy.log(trigger)
        // Perform assertion: Compare payload count with response
        trigger.should('contain', new Intl.NumberFormat().format(payloadCountInResponse))
    });




});
