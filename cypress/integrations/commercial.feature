Feature:  Property Finder bh Scenarios  1. Villas, 2. Offices, 3. Property Location
    Scenario: 1. Check the total displayed number of results for category Villas with price range more than or equal to 300,000 AED / yearly
        Given I visit the Property Finder website
        When I select the property type and apply filters
        Then I should see the correct total count displayed from search results api response

    Scenario: 2. Click on commercial properties only checkbox and select offices
        Given I visit the website Property Finder bh
        When I click on the commercial properties only checkbox, search, office category
        Then I should see property details matching the API response

    Scenario: 3. Search for property by location
        Given I visit Property Finder bh
        When I search property by Location
        Then I should see Available From should not be empty


