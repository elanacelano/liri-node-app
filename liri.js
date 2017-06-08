
var Twitter = require('twitter');
var spotify = require('spotify');
var request = require('request');
var keys = require('./keys.js');

var data = {
	my_tweets: "",
	spotify_this_song:"<I Want it That Way>",
	movie_this:"<>",
	do_what_it_says: "<>",
	wooHoo: function () {
		// if (this.data === true){
		console.log("WooHoo!");	
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

// request('http://www.google.com', function (error, response, body) {
//   console.log('error:', error); // Print the error if one occurred 
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
//   console.log('body:', body); // Print the HTML for the Google homepage. 
// });

var client = new Twitter(keys);

			var params = {screen_name: 'BehrGirl'};

			client.get('statuses/user_timeline', params, function(error, tweets, response) {
			  if (!error) {
			    console.log(tweets);
			  }else {
			  	console.log(error)
			  }
			});

// data.my_tweets();
// data.spotify_this_song();
// data.movie_this();
// data.do_what_it_says();
