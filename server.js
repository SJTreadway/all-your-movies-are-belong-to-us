var express = require('express'),
	cors = require('cors'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	port = 9001,
	app = express();

mongoose.Promise = require('q').Promise;

app.use(cors(), bodyParser.json(), express.static(__dirname+'/public'));

app.post('/api/test', function(req, res) {
	return res.status(201).send('Post Works');
});
app.get('/api/test', function(req, res) {
	return res.status(200).send('Get Works');
});
app.put('/api/test', function(req, res) {
	return res.status(200).send('Put Works');
});
app.delete('/api/test', function(req, res) {
	return res.status(204).end();
});

app.listen(port, function() {
	console.log('Listening on port:', port);
});

mongoose.connect('mongodb://localhost/personal-project')
		.connection.once('open', function() {
			console.log('Mongodb connected..');
		});