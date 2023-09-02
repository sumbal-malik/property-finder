class searchBox {

    selectPropertyType() {
        cy.contains("Property type").click({ force: true })
        cy.get(':nth-child(3) > .dropdown-list__item-content').click({ force: true }); //Select Villas
    }
    clickSearchButton() {
        cy.get('.filter-form-component-variant__row-3 > .filter-form-component-variant__m-hide').click()
    }
    filterPriceOverlay() {
        cy.get('[data-testid="filters-form-dropdown-price"] > span').click()
        cy.get('[data-testid="filters-form-range-dropdown-to-input"]').click({ force: true }).type('300000{enter}')
        //cy.get('[data-testid="filters-form-range-dropdown-to-input"]').click({force: true})
        cy.get('.styles_footer__mWMCa').click({ force: true });
        cy.wait(400)
        //  cy.get('.styles_overlay__GZl8h').click({force: true});
        //cy.get('[data-testid="filters-form-btn-find"]').dblclick( {force: true} )
        cy.get('.styles_overlay__GZl8h').click({ force: true });

    }
    findProperty() {
        // cy.get('[data-testid="filters-form-dropdown-more-filters"] > span').click({force: true})
        cy.get('[data-testid="filters-form-btn-find"]').click({ force: true })
    }
    propertyResults() {
        cy.get('.styles_container__KcjEg > span')
    }
    commercialProperty() {
        cy.get('.checkbox-component__box').click()
    }
    officesCategory() {
        cy.get(':nth-child(3) > .link-module_link__TaDrq > .styles_desktop_aggregation-links__name__FYyNZ').click({ force: true })
    }
    inputLocation() {
        cy.get('.filter-form-component-variant__row-3 > [data-testid="root"] > [data-testid="container"] > [data-testid="input"]').click().type('Bahrain Bay')
    }
    getLocation() {
        cy.get('[data-testid="suggestion"]').click()
    }

}

export default new searchBox