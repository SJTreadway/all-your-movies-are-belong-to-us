var mongoose = require('mongoose'),
	bcrypt = require('bcrypt'),
	q = require('q');

var schema = new mongoose.Schema({
	username: String,
	password: String,
	roles: [
		{
			type: String, 
			enum: ['normal', 'admin', 'moderator'],
			default: 'normal'
		}
	]
});

schema.methods.verifyPassword = function(givenPassword) {
	var dfd = q.defer();
	bcrypt.compare(givenPassword, this.password, function(err, result) {
		if (result) {
			dfd.resolve(true);
		}
		else {
			dfd.reject(false);
		}
	});
	return dfd.promise;
};

schema.pre('save', function(next) {
	var user = this;
	bcrypt.genSalt(12, function(err, salt) {
		bcrypt.hash(user.password, salt, function(err, hash) {
			user.password = hash;
			next();
		})
	});
});

module.exports = mongoose.model('User', schema);