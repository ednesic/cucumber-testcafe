Feature: Login

    As a user
    I want to use all features that the login from globo.com provides me
    so that I can use globo.com page logged in

    Scenario: Login screen at globo.com page is shown
        Given I navigate to globo.com page
        When I click on the user bar
        Then I should see the login modal

    Scenario: Close the login screen at globo.com
        Given I navigate to globo.com page
        When I click on the user bar
        Then I should see the login modal
        When I close the login modal
        Then I should not see the login modal

    Scenario: Type wrong login
        Given I navigate to globo.com page
        When I click on the user bar
        Then I should see the login modal
        When I click to login
        Then I should show must type user and password text
        And I should not be logged in
        When I type "wrong_user" account
        And I click to login
        Then I should see wrong login text
        And I should not be logged in