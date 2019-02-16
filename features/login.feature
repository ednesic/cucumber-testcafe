Feature: Login

    As a user
    I want to use all features that the login from globo.com provides me
    so that I can use globo.com page logged in

    Scenario: Login screen at globo.com page is shown
        Given I navigate to globo.com page
        When I click on the user bar
        Then I should see the login modal

    Scenario: I can close the login screen at globo.com
        Given I navigate to globo.com page
        When I click on the user bar
        Then I should see the login modal
        When I close the login modal
        Then I should not see the login modal