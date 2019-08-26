var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/reserva', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('We\'re connected!');
});

var birdhouseSchema = new mongoose.Schema({ 	
  reserva_id: Number,
	images: [ {
    slide_id: Number,
		url: String,
		desc: String,
		verified: Boolean
		} ]
});

var BirdHouse = mongoose.model('birdhouse', birdhouseSchema);

module.exports = {
	db,
	BirdHouse
};
