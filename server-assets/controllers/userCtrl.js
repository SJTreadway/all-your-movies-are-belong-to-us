var User = require('../models/user');

module.exports = {
	addUser: function(req, res) {
		User.findOne({ username: req.body.username }).exec().then(function(user) {
			if (user) {
				console.log(user);
				return res.status(409).end();
			}
			user = new User({
				username: req.body.username,
				password: req.body.password
			});
			user.save().then(function() {
				console.log(user);
				return res.status(201).end();
			});
		});
	},

	getUser: function(req, res) {
		return res.json(req.user);
	},
};