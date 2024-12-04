Feature: Login
Funcinalidade para realizar logins no sistema

  Scenario: User attempts to log in with unregistered credentials
    Given I access the home page of the application
    When I input my email "test3123"
    And and my password "test1234"
    And Click in the buton
    Then The following message should be displayed "User not registered"

  Scenario: User attempts to log in with unregistered credentials
    Given I access the home page of the application
    When I input my email "test3123"
    And Click in the buton
    Then The following message should be displayed "The user needs to enter a password to log in"

  Scenario Outline: Login sucess
    Given I access the home page of the application
    When I input my email "<email>"
    And and my password "<password>"
    And Click in the buton
    Then The following message should be displayed "<mensage>"

    Examples:
      | scenario          | email  | password    | mensage           |
      | Login com sucesso | Riqvee | henrique123 | login com sucesso |
