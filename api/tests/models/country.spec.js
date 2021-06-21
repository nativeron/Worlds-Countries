const { Country, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Country model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Country.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Country.create({})
          .then(() => done(new Error('invalid name ')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Country.create({ name: 'Argentina' });
      });
    });
    describe('capital', () => {
      it('should throw an error if capital is null', (done) => {
        Country.create({})
          .then(() => done(new Error('invalids')))
          .catch(() => done());
      });
    });
    describe('area', () => {
      it('should be an integer', () => {
        Country.create({ 
          name: 'Argentina',
          area: 'Argentina' })
        .then(() => done(new Error('Area should not accept a string')))
          .catch(() => done());
      });
      it('should work when there is no area or population data', ()=>{
        Country.create({area:"", population:""})
      })
    });
    describe('alpha3Code', ()=>{
      it('hould throw an error if alpha3Code have more than three characters or is null',()=>{
        Country.create({ alpha3Code: "ARGE", name: 'Argentina' })
        .then(() => done(new Error('invalid')))
        Country.create({ alpha3Code: "", name: 'Argentina' })
        .then(() => done(new Error('invalid')))
      })
    })
    
  });
});
