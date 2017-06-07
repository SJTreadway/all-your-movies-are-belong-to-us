var mongoose = require('mongoose'),
    request = require('request'),
    key = 'JJD3Wp93IcpZbzvcodajQLsV',
    Movies = 'http://api.bestbuy.com/v1/products(type=\"movie\")?format=json&apiKey=' + key;
	
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
  	request.get('http://api.bestbuy.com/v1/products(' + query + ')?pageSize=' + num + '&show=sku,image,name,salePrice&sort=salesRankMediumTerm.asc&format=json&apiKey=' + key, function(err, response, body) {
  		return res.send(body);
  	})
  }
};
