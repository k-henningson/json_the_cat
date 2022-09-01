const request = require('request');
//console.log(request);


const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      callback(`Breed not found`, null);
      return;
    }
    //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //console.log('body:', body); // Print the HTML for the Google homepage.
    //changes string into object
    //console.log(typeof data); // object
    callback(null, data[0].description); //the obj is in an array so data[0] is the entire obj inside the array
  });
};

module.exports = { fetchBreedDescription };