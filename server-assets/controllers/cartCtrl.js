var Cart = require('../models/cart'),
	User = require('../models/user'),
	session = require('express-session');

module.exports = {
	addItem: function(req, res) {
		if(!req.session.cart) {
			req.session.cart = [];
		}
		req.session.cart.push(req.body);
		return res.status(200).json(req.session.cart);
		// User.findById(req.params.id).exec().then(function(user) {
		// 	if (!user.cart) {
		// 		newCart = new Cart();
		// 		newCart.user = user._id;
		// 		newCart.item.push(req.body);
		// 		return newCart.save().then(function(cart) {
		// 			console.log(cart)
		// 			user.cart = cart._id;
		// 			return user.save();
		// 		}).then(function(response) {
		// 			return res.json(response);
		// 		});
		// 	}
		// 	return Cart.findById(user.cart).exec(function(cart) {
		// 		cart.items.push(req.body);
		// 		return cart.save().then(function(result) {
		// 			return res.json(result);
		// 		});
		// 	});
		// }).catch(function(err) {
		// 	return res.status(500).json(err);
		// });
	},

	getItems: function(req, res) {
		Cart.find(req.query).exec().then(function(cart) {
			return res.json(cart);
		}).catch(function(err) {
			return res.status(500).send(err);
		});
	},
}