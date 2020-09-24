const request = require('request');
const breed = process.argv.slice(2);


request(`https://api.thecatapi.com/v1/breed/search?q=abc`, function(error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  const data = JSON.parse(body);
  console.log('body:', data[0].description); // Print the HTML for the Google homepage.
  console.log(typeof data);
});