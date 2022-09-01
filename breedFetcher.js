const request = require('request');
//console.log(request);
const breed = process.argv[2];

const breedFetcher = function() {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    if (error) {
      console.log('error:', error); // Print the error if one occurred
      return;
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log(`Breed not found`);
      return;
    }
    //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //console.log('body:', body); // Print the HTML for the Google homepage.
    //changes string into object
    //console.log(typeof data); // object
    console.log(data[0].description); //the obj is in an array so data[0] is the entire obj inside the array
  });
};

breedFetcher();

