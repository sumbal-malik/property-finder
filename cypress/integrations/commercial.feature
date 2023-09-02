Feature:  Commercial Properties only - Scenario 2
    Scenario: Click on commercial properties only checkbox and select offices
        Given I visit the website Property Finder bh
        When I click on the commercial properties only checkbox
        # And I click the search button
        # And I select offices category
        Then I should see property details matching the API response

