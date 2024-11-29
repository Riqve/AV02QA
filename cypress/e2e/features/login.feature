Feature: Login
Funcinalidade para realizar logins no sistema

  Scenario Outline: "<scenario>"
    Given I access the home page of the application
    When I input my email "<email>" and my password "<password>"
    And Click in the buton
    Then I have my acess "<mensage>"

    Examples:
      | scenario          | email                   | password    | mensage           |
      | Login com sucesso | theusrucoygod@gmail.com | henrique123 | login com sucesso |
