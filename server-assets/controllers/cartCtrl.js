var Cart = require('../models/cart'),
	User = require('../models/user'),
	session = require('express-session');

module.exports = {
	addItem: function(req, res) {
		User.findById(req.params.id).exec().then(function(user) {
			var items = user.cart.items,
				flag = true;
			for (var i = 0; items.length && i < items.length; i++) {
				if (req.body.product.name === items[i].product.name) {
					items[i].quantity++;
					flag = false;
				}
			}
			if (flag) {
				items.push(req.body);
			}
			return user.save().then(function(resu) {
				return res.json(resu);
			}).catch(function(err) {
				return res.status(500).json(err);
			});
		});
	},

	getItems: function(req, res) {
		User.findById(req.params.id).exec().then(function(user) {
			return res.json(user.cart.items);
		}).catch(function(err) {
			return res.status(500).json(err);
		});
	},

	removeItem: function(req, res) {
		User.findById(req.params.id).exec().then(function(user) {
			var items = user.cart.items;
			for (var i = 0; i < items.length; i++) {
				if (req.body.product.sku === items[i].product.sku) {
					if (items[i].quantity > 1) {
						items[i].quantity--;
					} else {
						items.splice(i,1);
						i--;
					}
				}
			}
			return user.save().then(function(resu) {
				return res.json(resu);
			});
		}).catch(function(err) {
			return res.json(err);
		});
	},

	emptyCart: function(req, res) {
		User.findById(req.params.id).exec().then(function(user) {
			user.cart.items = [];
			return user.save().then(function(resu) {
				return res.json(resu);
			});
		}).catch(function(err) {
			return res.json(err);
		});
	},

};