// var Twitter = require('BehrGirl');

var client = new Twitter({
  consumer_key: 'FALIJ7GWqcIAGxnEmkCCr7aZW',
  consumer_secret: 'NqAI6uRgH7czJpgTMlldS6kJvCwtLi70GR1Esgk8mg6QhChb6n',
  access_token_key: '872821784239886336-xLD3BKyJxF39yEmlpE0V5anm3R2frMS',
  access_token_secret: 'cxgTdc4ynwd3VICBdfNR9nA5MvfuevpN99DpY2QDVtJKi',
});

	// keys.js
// console.log('this is loaded');

// exports.twitterKeys = {
//   consumer_key: '<input here>',
//   consumer_secret: '<input here>',
//   access_token_key: '<input here>',
//   access_token_secret: '<input here>',
// }

	// for Twitter api key (?)

// Consumer Key (API Key)	FALIJ7GWqcIAGxnEmkCCr7aZW
// Consumer Secret (API Secret)	NqAI6uRgH7czJpgTMlldS6kJvCwtLi70GR1Esgk8mg6QhChb6n
// Access Level	Read and write (modify app permissions)
// Owner	BehrGirl
// Owner ID	872821784239886336

// Access Token	872821784239886336-xLD3BKyJxF39yEmlpE0V5anm3R2frMS
// Access Token Secret	cxgTdc4ynwd3VICBdfNR9nA5MvfuevpN99DpY2QDVtJKi


// 3. Here we put into action what we pieced together in step 1 and 2. See client.get (that's the same client we created in step 2.). All you need to do now is replace the word 'nodejs' with
// your twitter handle or someone elses twitter handle.

var params = {screen_name: 'BehrGirl'};

client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});

// client.get(path, params, callback);
// client.post(path, params, callback);
// client.stream(path, params, callback);
