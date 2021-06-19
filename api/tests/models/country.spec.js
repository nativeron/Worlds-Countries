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
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Country.create({ name: 'Argentina' });
      });
    });
    describe('capital', () => {
      it('should throw an error if capital is null', (done) => {
        Country.create({})
          .then(() => done(new Error('It requires a valid capital')))
          .catch(() => done());
      });
      it('should work when its a valid capital', () => {
        Country.create({ capital: 'Buenos Aires' });
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
    });
    
  });
});
