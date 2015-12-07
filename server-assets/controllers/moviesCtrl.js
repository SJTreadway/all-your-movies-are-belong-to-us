var mongoose = require('mongoose'),
    request = require('request'),
    Movies = 'http://api.bestbuy.com/v1/products(type=\"movie\")?format=json&apiKey=xznvr6m97fwgs2ycfhyajrwp';

module.exports = {
  getMovies: function(req, res) {
  	request.get(Movies, function(err, response, body) {
  		return res.send(body);
  	})
  },


};
