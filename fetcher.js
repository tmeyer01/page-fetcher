'use strick';
const fs = require('fs');
const request = require('request');
const pages = process.argv.slice(2);


const url = pages[0];
const localFilePath = pages[1];


request(`${url}`, (error, response, body)=> {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  
  fs.writeFile(`${localFilePath}`, body, (err) => {
    if (err) {
      console.log('error', err.message);
    } else {
      console.log(`Downloaded and saved ${body.length} bytes to ${localFilePath}`);
    }
  });


});