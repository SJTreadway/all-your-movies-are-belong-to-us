var mongoose = require('mongoose');

var CartSchema = new mongoose.Schema({
	item: [{
		image: {type: String, required: true},
		name: {type: String, required: true},
		price: {type: Number, required: true},
		quantity: {type: Number, required: true, default: 1, min: 0},
	}],
	user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Cart', CartSchema);