Feature: Login

    As a user
    I want to login at globo.com
    So that i can stay logged in

    Scenario: Login at globo.com page
        Given I navigate to globo.com page
        When I click on the user bar
        Then I can see the login modal
