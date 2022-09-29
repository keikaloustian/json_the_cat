const request = require('request');
const breed = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  
  // In case of request failure
  if (error) {
    console.log('Request error: ', error);
    process.exit();
  }

  const data = JSON.parse(body);
  
  // If search query is not found
  if (data[0] === undefined) {
    console.log('Breed not found');
    process.exit();
  }
  
  console.log(data[0].description);
});