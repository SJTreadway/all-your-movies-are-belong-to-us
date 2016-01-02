var mongoose = require('mongoose'),
	Movie = require('./movie');

var cartSchema = new mongoose.Schema({
	items: [{
		product: { type: Object, required: true },
		quantity: {type: Number, default: 1, min: 0}
	}],
	updated: {type: Date},
});

cartSchema.pre('save', function(next) {
	this.updated = new Date();
	next();
});

module.exports = cartSchema;