class propertyDetails {
    getPropertyDetails() {
        cy.get('.view_desktop_paid-listings__0F5Mq > li:nth-child(1)').find('img').first().click({ force: true })

    }
    getAvailablefrom() {
        cy.get('.property-facts').find('span').should('contain', 'Available from');

    }
    getAvailablefromValue() {
        cy.get('.property-facts > :nth-child(5) > .property-facts__value').as('availableFrom');
        cy.get('@availableFrom').should('not.be.empty');

    }
}
export default new propertyDetails