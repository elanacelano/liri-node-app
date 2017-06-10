
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



								// var liri = {
								// 	argv: process.argv,

								// 	cmd: process.argv[2],

								// 	arg: process.argv[3],

								// 	command: function(){
								// 				liri.log();
								// 				//takes in arguments and assembles in query form a single argument arg
								// 				for (var i = 4; i < liri.argv.length; i++){
								// 					liri.arg += '+' + liri.argv[i];
								// 				};
												
								// 				// console.log(liri.arg);

								// 				//takes in the command and applies case management
								// 				switch(liri.cmd){
								// 					case 'my-tweets':
								// 						liri.twitter();
								// 					break;
								// 					case 'spotify-this-song':
								// 						liri.spotify();
								// 					break;
								// 					case 'movie-this':
								// 						liri.omdb();
								// 					break;
								// 					case 'do-what-it-says':
								// 						liri.random();
								// 					break;
								// 				};
								// 	},

								// 	twitter: function(){
								// 			// show the last 20 tweets and when they were created in the terminal
								// 			// returns keys here and repackages them
								// 			var exports = require('./keys.js');
								// 			var Twitter = require('twitter');
								// 			var params = {screen_name: 'allon1411', count: 20};
								// 			var client = new Twitter({
								//   						consumer_key: exports.twitterKeys.consumer_key,
								//   						consumer_secret: exports.twitterKeys.consumer_secret,
								//  	 					access_token_key: exports.twitterKeys.access_token_key,
								//   						access_token_secret: exports.twitterKeys.access_token_secret
								// 			});
								// // 			console.log(client);
								// 			client.get('statuses/user_timeline', params, function(error, tweets, response) {
								//   				if (!error) {
								//   					for (var i = 0; i < tweets.length; i++){
								//   						console.log(tweets[i].created_at + '\n' +tweets[i].user.screen_name +
								//   									': ' + tweets[i].text + '\n');
								//   					};
								//     				// console.log(tweets);
								//   				}else{
								//   					console.log(error);
								// 				};
								// 			});
								// 	},
								// 	spotify: function(){
								// 				// takes in a song name argument and returns the 
								// 				// artist, song name, preview link, and album the song is from
								// 				// cd default 'the sign'by ace of Base
								// 				var spotify = require('spotify');
								// 				var track = 'the+sign';
								// 				if(liri.arg != undefined){
								// 					track = liri.arg;
								// 				};
								// 				console.log(track);
								// 				spotify.search({type:'track', query: track}, function(err, data) {
								//     				if ( err ) {
								//         				console.log('Error occurred: ' + err);
								//         				return;
								//     				}
								    				
								//  					console.log(
								//  						// data
								//  						// artist name
								//  						data.tracks.items[0].artists[0].name + '\n' +
								//  						// song name
								//  						data.tracks.items[0].name + '\n' +
								//  						// preview link
								//  						data.tracks.items[0].preview_url + '\n' +
								//  						// album
								//  						data.tracks.items[0].album.name
								//  					);
								    
								// 				});
								// 	},
								// 	omdb: function(){
								// 				// take in the movie name as a argument and returns using request
								//   				// defaults 'Mr Nobody'
								//   				var request = require('request');
								//   				var movie = 'Mr+Nobody';
								//   				if (liri.arg != undefined){
								//   					movie = liri.arg;
								//   				}
								// 				var queryUrl = "http://www.omdbapi.com/?t=" + movie + "&tomatoes=true&y=&plot=short&r=json";
								// 				console.log(queryUrl);
								// 				request(queryUrl, function(err, response, base){
								// 				if (!err && response.statusCode == 200){
													
								// 					console.log(
								// 						// * Title of the movie.
								// 						JSON.parse(base).Title + '\n' +
								// 						// * Year the movie came out.
								// 						JSON.parse(base).Year + '\n' +
								// 						// * IMDB Rating of the movie.
								// 						'imdb Rating: ' +
								// 						JSON.parse(base).imdbRating + '\n' +
								// 						// * Country where the movie was produced.
								// 						JSON.parse(base).Country + '\n' +
								// 						// * Language of the movie.
								// 						JSON.parse(base).Language + '\n' +
								// 						// * Plot of the movie.
								// 						JSON.parse(base).Plot + '\n' +
								// 						// * Actors in the movie.
								// 						JSON.parse(base).Actors + '\n' +
								// 						// * Rotten Tomatoes Rating.
								// 						'Rotten Tomatoes Rating: ' +
								// 						JSON.parse(base).tomatoRating + '\n' +
								// 						// * Rotten Tomatoes URL.
								// 						JSON.parse(base).tomatoURL + '\n');
								// 						// console.log(JSON.parse(base));
								// 				}
								// 			});
								// 	},
								// 	random: function(){
								// 		// use fs to call the command line from random.txt
								// 					var fs = require('fs');
								// 					fs.readFile('random.txt', 'utf8', function(err,data){
								// 						console.log(data);
								// 						var arr = data.split(',');
								// 						liri.cmd = arr[0];
								// 						var arg = arr[1].split(' ');
								// 						liri.arg = arg[0];
								// 						for (var i = 1; i < arg.length; i++){
								// 							liri.arg += '+' + arg[i];
								// 						};
								// 						liri.command();
								// 					});
								// 	},
								// 	log: function(){
								// 		// creates a log entry like the random text
								// 		var fs = require('fs');
								// 		var minute = liri.argv[2] + ',';

								// 		for (var i = 3; i < liri.argv.length; i++){
								// 			minute += liri.argv[i] + ' ';
								// 		};
										
								// 		// console.log(minute);
								// 		fs.appendFile('log.txt', minute + '\n', function(err){
								// 			if (err){
								// 				console.log(err);
								// 			}
								// 		});
								// 	}
								// };// liri object end

								// liri.command();