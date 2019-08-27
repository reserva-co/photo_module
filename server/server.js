const express = require('express');

const app = express();
const port = 3000;
const model = require('./database/dbconnect.js');

app.get('/api/:reserva_id', (req, res) => {
  model.BirdHouse.find({ reserva_id: req.param }, (err, birdhouse) => {
    if (err) {
      console.log(err);
    } else {
      res.send(birdhouse);
    }
  });
  // allow endpoints to include a number
  // respond with db query
});

app.get('/', (req, res) => {
  console.log('Hello world');
});

app.listen(port, () => console.log(`Listening on port ${port}`));
