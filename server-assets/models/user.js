var mongoose = require('mongoose'),
	bcrypt = require('bcrypt');

var UserSchema = new mongoose.Schema({
	email: {type: String, required: true, minlength: 6},
	password: {type: String, required: true},
	cart: {type: mongoose.Schema.Types.ObjectId, ref: 'Cart'},
	total_price: {type: Number, min: 0, default: 0}
});

// UserSchema.pre('save', function(next) {
	
// 	var user = this;

// 	user.email = user.email.toLowerCase();

// 	if (user.isModified('password')) {
// 		//12 means secure
// 		bcrypt.genSalt(12, function(err, salt) {
// 			if (err) {
// 				next(err);
// 			}
// 			bcrypt.hash(user.password, salt, function(err, hash) {
// 				if (err) {
// 					return next(err);
// 				}
// 				user.password = hash;
// 				next();
// 			});
// 		});
// 	}
// 	else {
// 		next();
// 	}
// });

module.exports = mongoose.model('User', UserSchema);