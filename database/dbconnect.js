const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/reserva', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('We\'re connected!');
});

const birdhouseSchema = new mongoose.Schema({
  reserva_id: Number,
  images: [{
    slide_id: Number,
    url: String,
    desc: String,
    verified: Boolean,
  }],
});

const BirdHouse = mongoose.model('birdhouse', birdhouseSchema);

module.exports = {
  db,
  BirdHouse,
};
