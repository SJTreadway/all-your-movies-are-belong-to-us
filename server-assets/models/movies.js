var mongoose = require('mongoose');

var moviesSchema = new mongoose.Schema({
  name: {type: String, required: true},
	status: {type: String, enum: ['active', 'archived', 'out of stock'], default: 'active'},
	price: {type: Number, required: true, min: 0},
	inventory: {type: Number, min: 0, default: 1},
  description: {type: String, required: true, maxlength: 80}
});

module.exports = mongoose.model('Movies', moviesSchema);
