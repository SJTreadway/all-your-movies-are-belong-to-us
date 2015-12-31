var mongoose = require('mongoose');

var cartSchema = new mongoose.Schema({
	cart: {
		items: [{
			product: String,
			quantity: {type: Number, default: 1, min: 0}
		}],
		updated: {type: Date},
	}
});

cartSchema.pre('save', function(next) {
	this.updated = new Date();
	next();
});

module.exports = cartSchema;