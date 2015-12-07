var express = require('express'),
	cors = require('cors'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	request = require('request'),
	UserController = require('./server-assets/controllers/userCtrl.js'),
	CartController = require('./server-assets/controllers/cartCtrl.js'),
	MovieController = require('./server-assets/controllers/movieCtrl.js'),
	port = 9001,
	apiKey = 'xznvr6m97fwgs2ycfhyajrwp',
	app = express();

mongoose.Promise = require('q').Promise;

app.use(cors(), bodyParser.json(), express.static(__dirname+'/public'));


// // User endpoints
// app.post('/api/user', UserController.addUser);
// app.get('/api/user', UserController.getUser);
//
// // Cart endpoints
// app.post('/api/cart/:id', CartController.addItem);
// app.put('/api/cart/:id', CartController.editCart);
// app.delete('/api/cart/:id', CartController.removeItem);

// Movies endpoints
app.get('/api/movies', MovieController.getMovies);
// app.post('/api/movies', MovieController.addMovies);
// app.put('/api/movies/:id', MovieController.editMovies);
// app.delete('/api/movies/:id', MovieController.archiveMovies);

app.listen(port, function() {
	console.log('Listening on port:', port);
});

mongoose.connect('mongodb://localhost/personal-project')
		.connection.once('open', function() {
			console.log('Mongodb connected..');
		});
