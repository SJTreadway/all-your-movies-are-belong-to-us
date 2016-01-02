var mongoose = require('mongoose');

var movieSchema = new mongoose.Schema({
	sku: {type: Number, required: true},
	image: {type: String, required: true},
	name: {type: String, required: true},
	price: {type: Number, required: true, min: 0},
});

module.exports = mongoose.model('Movie', movieSchema);