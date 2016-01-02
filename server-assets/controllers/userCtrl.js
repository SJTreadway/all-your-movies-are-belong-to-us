var User = require('../models/user');
	// bcrypt = require('bcrypt');

module.exports = {
	addUser: function(req, res) {
		var newUser = new User(req.body);
		newUser.save().then(function(result) {
			return res.json(result);
		}).catch(function(err) {
			return res.status(500).json(err);
		});
	},

	loginUser: function(req, res) {
		User.findOne({ username: req.body.username }).exec().then(function(user) {
			if (!user) {
				return res.status(400).end();
			} else {
				if (req.body.password === user.password) {
					req.session.user = user;
					return res.status(200).send(req.session.user);
				} else {
					return res.status(400).end();
				}
			};
		});
	},
};