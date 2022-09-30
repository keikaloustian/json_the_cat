const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription Tests', () => {

  it('Returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      assert.equal(err, null);
      
      const expectedDesc = 'The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.';
      assert.equal(expectedDesc, desc.trim());
    
      done();
    });
  });

  it('Returns an error and no description when an invalid/non-existent breed is passed in', (done) => {
    fetchBreedDescription('dog', (err, desc) => {
      assert.isNotNull(err, 'Error is not Null');
      
      assert.equal(desc, null);
    
      done();
    });
  });

});