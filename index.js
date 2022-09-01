const { fetchBreedDescription } = require('./breedFetcher');

const breed = process.argv[2];

fetchBreedDescription(breed, (error, desc) => {
  if (error) {
    console.log(`Error fetch details: `, error);
  } else {
    console.log(desc);
  }
});

//Calling the function here in INDEX

//user-facing (terminal output) - what we see as result