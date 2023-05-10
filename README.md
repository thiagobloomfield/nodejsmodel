# Modelo NodeJS
## Padrão de projeto PRODATA

Neste projeto será descrito as padronizações que deveremos seguir em nossos projetos
por exemplo:

- Padrões de projeto
- Padrões de commit
- Padrões de desenvolvimento
- Testes
- Padrões de deploy, integration
- etc..

## Padrões de Projeto

Projetos de backend na Prodata são utilizados na tecnologia NodeJS para este repositório.
- Vesão: 18.13.0
- Linguagem TS

#### Embarcados

- Typescript
- Express

## Padrão de commit
Padrão conventional change log
Aqui temos um ótimo modelo de boas mensagens de commit:
```sh
feat(cod-XPTO): implementa a arquitetura base
- uso de ferramenta XPTO2
- uso da tecnologia ABC1
#123
```
#### Uso
```sh
git add .
npm run commit
```

## Testes

### Testes unitários
Para testes unitários usamos a ferramenta JEST
https://jestjs.io/pt-BR/

#### Uso
```sh
npm run test
```

### Testes integrados
Para testes e2e, integrados e automatizados utilizamos a ferramenta Cypress + Cucumber
https://www.cypress.io/
https://github.com/badeball/cypress-cucumber-preprocessor

#### Uso
```sh
npm run e2e
```
