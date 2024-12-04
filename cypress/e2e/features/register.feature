Feature: Sing Up
Funcionalidades para Registro de usuario

Scenario: User entered an already existing username

    Given I access the home page of the application for register
    When I input my username "Riqvee"
    And I input my emailAdress "teste@teste.com"
    And I input my password1 "test1324"
    And I input my password2 "test1324"
    And I click the buton sing Up
    Then The following message should be displayed "User already existing"

Scenario: Forgot to enter the passwords
    Given I access the home page of the application for register
    When I input my username "babaue"
    And I input my emailAdress "teste@teste123.com"
    And I click the buton sing Up
    Then The following message should be displayed "Divergent passwords"

Scenario: Divergent passwords in the registration
    Given I access the home page of the application for register
    When I input my username "isso mesmo"
    And I input my emailAdress "teste@nadahaver1.com"
    And I input my password1 "test1324"
    And I input my password2 "totalmente diferente"
    And I click the buton sing Up
    Then The following message should be displayed "Divergent passwords"

