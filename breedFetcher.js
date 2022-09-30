const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
  
    // If an error occurs, error will be populated; otherwise null
    // In case of failure, callback's second argument should be null
    if (error) {
      callback(error, null);
      process.exit();
    }
    
    const data = JSON.parse(body);
    // In case of invalid query / not found
    if (data.length === 0) {
      callback('Not found.', null);
      process.exit();
    }
    
    callback(error, data[0].description);
  });
};

module.exports = { fetchBreedDescription };