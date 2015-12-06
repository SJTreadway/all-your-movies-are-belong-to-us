var mongoose = require('mongoose'),
    request = require('request'),
    Movies = '';

module.exports = {
  getMovies: function() {
    request(Movies).then(function(movies) {
      return res.json(movies);
    }).catch(function(err) {
      return res.status(500).json(err);
    });
  },


};
