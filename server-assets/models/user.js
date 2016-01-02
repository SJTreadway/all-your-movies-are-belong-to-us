var mongoose = require('mongoose'),
	Movie = require('./movie'),
	// bcrypt = require('bcrypt'),
	q = require('q');

var userSchema = new mongoose.Schema({
	username: { type: String, required: true, lowercase: true, index: true },
	password: { type: String, required: true },
	cart: {
			items: [{
				product: {type: Object, required: true},
				quantity: {type: Number, default: 1, min: 0}
			}],
		updated: {type: Date},
	},
});

// userSchema.methods.verifyPassword = function(givenPassword) {
// 	var dfd = q.defer();
// 	bcrypt.compare(givenPassword, this.password, function(err, result) {
// 		if (result) {
// 			dfd.resolve(true);
// 		}
// 		else {
// 			dfd.reject(false);
// 		}
// 	});
// 	return dfd.promise;
// };

// userSchema.pre('save', function(next) {
// 	var user = this;
// 	bcrypt.genSalt(12, function(err, salt) {
// 		bcrypt.hash(user.password, salt, function(err, hash) {
// 			user.password = hash;
// 			next();
// 		})
// 	});
// });

userSchema.pre('save', function(next) {
	this.cart.updated = new Date();
	next();
});

module.exports = mongoose.model('User', userSchema);