var data = {
	my-tweets = "";
	spotify-this-song ="<I Want it That Way>";
	movie-this = "<>";
	do-what-it-says = "<>";
		
		}
		function () {
		// if (this.data === true){
		console.log("WooHoo!");	
		}
	}
};
	// Spotify

// var spotify = require('spotify');
 
// spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
//     if ( err ) {
//         console.log('Error occurred: ' + err);
//         return;
//     }
 
//     // Do something with 'data' 
// });

	//request 

var request = require('twitter');
var request = require('spotify');
var request = require('request');
var request = require('./keys.js');
// request('http://www.google.com', function (error, response, body) {
//   console.log('error:', error); // Print the error if one occurred 
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
//   console.log('body:', body); // Print the HTML for the Google homepage. 
// });


data.my-tweets();
data.spotify-this-song();
data.movie-this();
data.do-what-it-says();
