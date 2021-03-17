# https://github.com/Idea-Pool/js-webinar/blob/master/module-5/TEST-CASES.md
Feature: EPAM site
    As a webinar attendee
    I want to write test for EPAM career site
    So that I can practice Cucumber

    Scenario Outline: Search for a job - <Country> - <City>
        # open site
        Given the EPAM Careers page is opened
        # test URL
        Then the EPAM Careers page should be opened
        And the Search form should be visible

        When the Location filter box is clicked
        And the country <Country> is selected
        And the city <City> is selected
        Then the selected location should be <City>

        When the Department filter box is clicked
        And the department <Department> is selected
        Then the selected department should be <Department>

        When the Search button is clicked
        Then the <PositionName> position should be visible
        And the department of the position should be <Department>
        And the country of the position should be <Country>
        And the city of the position should be <City>
        And there should be a button named Apply

        When the Apply button is clicked
        Then the job description should contain <City>
        And the job descriptin should contain <PositionName>

        Examples:
            | Country | City     | Department                | PositionName              |
            | Hungary | Debrecen | Software Test Engineering | Test Automation Engineer  |
            | Belarus | Minsk    | Software Architecture     | Test Automation Architect |
