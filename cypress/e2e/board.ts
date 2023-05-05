import {
  Then,
  Given
} from "@badeball/cypress-cucumber-preprocessor";

let resultPost: any = null;

// https://nodejsmodel.herokuapp.com/

Given('Eu chame a API post com dados {string} {string} {string}', (id, name, birthDate) => {
  cy
    .request("POST", "http://localhost:3000/",
      {
        "id": id,
        "name": name,
        "birthDate": birthDate
      }
    ).then((r) => {
      resultPost = r.body;
      console.log(r);
      expect(r.status).to.eq(201)
      expect(r.body).to.have.property('id')
      expect(r.body).to.have.property('name')
      expect(r.body).to.have.property('birthDate')
    });
});

Then('Eu deveria ver os resultados {string} {string} {string}', (id, name, birthDate) => {
  expect(resultPost.id).to.equal(id)
  expect(resultPost.name).to.equal(name)
  expect(resultPost.birthDate).to.equal(birthDate)
  expect(true);
});
