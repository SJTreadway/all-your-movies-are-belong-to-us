var User = require('../models/user');
	// bcrypt = require('bcrypt');

module.exports = {
	addUser: function(req, res) {
		var newUser = new User(req.body);
		return newUser.save().then(function(user) {
			return res.json(user);
		}).catch(function(err) {
			return res.status(500).send(err);
		});
	},

	getUser: function(req, res) {
		// var salt = bcrypt.genSaltSync(12);
		// var hash = bcrypt.hashSync(req.query.password, salt);
		// User.find({email: req.query.email}).exec().then(function(res) {
		// 	console.log(res[0].password)
		// 	console.log(hash)
		// 	bcrypt.compareSync(res[0].password, hash);
			
		// });
		User.find(req.query).exec().then(function(user) {
			return res.json(user);
		}).catch(function(err) {
			return res.status(500).send(err);
		});
	},
};