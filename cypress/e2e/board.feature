Feature: Board functionality

  Scenario: Cria o usuário <name>
    Given Eu chame a API post com dados "<id>" "<name>" "<birthDate>"
    Then Eu deveria ver os resultados "<id>" "<name>" "<birthDate>"
  
  Examples:
    | id | name | birthDate |
    | 1 | Thiago | 2023-01-01 |
