var express = require('express'),
	cors = require('cors'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	passport = require('passport'),
	LocalStrategy = require('passport-local').Strategy,
	request = require('request'),
	session = require('express-session'),
	User = require('./server-assets/models/user'),
	UserController = require('./server-assets/controllers/userCtrl.js'),
	CartController = require('./server-assets/controllers/cartCtrl.js'),
	MovieController = require('./server-assets/controllers/movieCtrl.js'),
	mongoUri = 'mongodb://localhost:27017/personal-project',
	port = 8080,
	app = express();

mongoose.Promise = require('q').Promise;

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { 
      	return done(err);
      }
      if (!user) { 
      	return done(null, false); 
      }
      user.verifyPassword(password).then(function(result) {
      	if (!result) {
      		return done(null, false); 
      	}
      	return done(null, user);
      });
    });
  }
));

passport.serializeUser(function(user, done) {
	done(null, user);
});
passport.deserializeUser(function(obj, done) {
	done(null, obj);
	// if we needed req.user.verifyPassword some day...
	// User.findById(obj._id).exec().find(user) {
	// 	done(null, user);
	// }
});

app.use(cors(), bodyParser.json(), express.static(__dirname+'/public'), session({
	secret: 'qwoeqeph41923jjaowoiei',
	saveUninitialized: true,
	resave: true
}), passport.initialize(), passport.session());

var requireAuth = function(req, res, next) {
	if (!req.isAuthenticated()) {
		return res.status(401).end();
	}
	next();
};

// // User endpoints
app.get('/api/users/currentUser', requireAuth, UserController.getUser);

// Registration
app.post('/api/user', UserController.addUser);

// Login
app.post('/api/auth/local', passport.authenticate('local'), function(req, res) {
	return res.status(200).end();
});

// Logout
app.get('/api/auth/logout', function(req, res) {
	req.logout();
	return res.status(200).end();
});

// // Cart endpoints
app.get('/api/cart/:id', requireAuth, CartController.getItems);
app.post('/api/cart/:id', requireAuth, CartController.addItem);
// app.put('/api/cart/:id', CartController.editCart);
// app.delete('/api/cart/:id', CartController.removeItem);

// // Movies endpoints
app.get('/api/movies', MovieController.getMovies);

app.listen(port, function() {
	console.log('Listening on port:', port);
});

mongoose.connect(mongoUri)
		.connection.once('open', function() {
			console.log('Mongodb connected..');
		});
