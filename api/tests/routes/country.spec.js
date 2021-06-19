/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const supertest = require('supertest-as-promised')(require('../../src/app'));
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Country, conn } = require('../../src/db.js');

const agent = session(app);
const country = {
  alpha3Code: 'ARG',
  name: 'Argentina',
  flag: '',
  region: 'Americas',
  capital: 'Buenos Aires'
};

describe('Country routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Country.sync({ force: true })
    .then(() => Country.create(country)));
  describe('GET /countries', () => {
    it('should get 200', () =>
      agent.get('/countries').expect(200)
    );
  });
  describe ('GET /countries:idCountry', ()=>{
    it('GET /countries/:idCountry should return detail', ()=>{
      return supertest
      .get('/countries/ARG')
      .expect(200)
      .expect('Content-Type', /json/)
      .expect(function(res){
        expect(res.body.name).to.be.equal('Argentina')
      })
    })
  })
  describe ('GET /countries?name=...', ()=>{
    it('GET /countries/:idCountry shoul return details', ()=>{
      return supertest
      .get('/countries?name=Argentina')
      .expect(200)
      .expect('Content-Type', /json/)
      .expect(function(res){
        expect(res.body[0].name).to.be.equal('Argentina')
      })
    })
  })
});
