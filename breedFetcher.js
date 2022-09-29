const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
  
    const data = JSON.parse(body);
    let description = data[0].description;
  

    // If an error occurs, error will be populated; otherwise null
    // In case of failure, callback's second argument should be null
    if (error) {
      description = null;
    }
  
    callback(error, description);
  });

};

module.exports = { fetchBreedDescription };