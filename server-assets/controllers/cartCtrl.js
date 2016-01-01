var Cart = require('../models/cart'),
	User = require('../models/user'),
	session = require('express-session');

module.exports = {
	addItem: function(req, res) {
		console.log(req.params)
		var user = req.session.user;
		console.log(req.body)
		var item = {
			sku: req.body.sku,
			image: req.body.image,
			name: req.body.name,
			price: req.body.salePrice
		};
		User.findById(req.params.id).exec().then(function(user) {
			var items = user.cart.items,
				flag = true;
			for (var i = 0; i < items.length; i++) {
				if (item.name === items[i].name) {
					items[i].quantity++;
					flag = false;
				}
			}
			if (flag) {
				items.push(item);
			}
			user.save().then(function(resu) {
				return res.json(resu);
			}).catch(function(err) {
				console.log(err)
				return res.status(500).json(err);
			});
		});
	},

	editCart: function(req, res) {
		User.findById(req.params.id).exec().then(function(user) {
			user.cart = req.body;
			var items = user.cart.items;
			for (var i = 0; i < items.length; i++) {
				if (req.body.quantity === 0) {
					items.splice(i,1);
					i--;
				}
			}
			return user.save().then(function(resu) {
				return res.json(resu);
			}).catch(function(err) {
				return res.json(err);
			});
		});
	},

	removeItem: function(req, res) {
		User.findById(req.params.id).exec().then(function(user) {
			var items = user.cart.items;
			for (var i = 0; i < items.length; i++) {
				if (req.body.item === items[i].product.toString()) {
					items.splice(i,1);
					i--;
				}
			}

			return user.save().then(function(resu) {
				return res.json(resu);
			});
		}).catch(function(err) {
			return res.json(err);
		});
	},

};