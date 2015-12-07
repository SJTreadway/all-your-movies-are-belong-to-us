var mongoose = require('mongoose'),
    request = require('request'),
    Movies = 'http://api.bestbuy.com/v1/products(type=\"movie\")?format=json&apiKey=xznvr6m97fwgs2ycfhyajrwp';
	
var query = '',
	num = 0;

module.exports = {
  getMovies: function(req, res) {
	if (req.query.title) {
		query = 'name=' + req.query.title + '*&type=\"movie\"';
		num = 50;
	} else {
		query = 'releaseDate>=today&type=\"movie\"';
		num = 20;
	}
  	request.get('http://api.bestbuy.com/v1/products(' + query + ')?pageSize=' + num + '&show=sku,image,name,salePrice&sort=salesRankMediumTerm.asc&format=json&apiKey=xznvr6m97fwgs2ycfhyajrwp', function(err, response, body) {
  		return res.send(body);
  	})
  },


};
