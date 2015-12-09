var Cart = require('../models/cart');

module.exports = {
	addItem: function(req, res) {
		User.findById(req.params.id).exec().then(function(user) {
			if (!user.cart) {
				newCart = new Cart();
				newCart.user = user._id
				newCart.items.push(req.body);
				return newCart.save().then(function(cart) {
					user.cart = cart._id;
					return user.save();
				}).then(function(response) {
					return res.json(response);
				});
			}
			return Cart.findById(user.cart).exec(function(cart) {
				cart.items.push(req.body);
				return cart.save().then(function(result) {
					return res.json(result);
				});
			});
		}).catch(function(err) {
			return res.status(500).json(err);
		});
	},

	getItems: function(req, res) {
		Cart.find(req.query).exec().then(function(cart) {
			return res.json(cart);
		}).catch(function(err) {
			return res.status(500).send(err);
		});
	},
}