const express = require('express');

const app = express();
const port = 3004;
const model = require('../database/dbconnect.js');

app.use(express.json());
app.use(express.static('public'));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/api/:reserva_id', (req, res) => {
  model.BirdHouse.find({ reserva_id: req.params.reserva_id }, (err, birdhouse) => {
    if (err) {
      console.log('err', err);
    } else {
      res.send(birdhouse);
    }
  });
});

app.get('/api/', (req, res) => {
  res.send('GET received');
});

// app.get('/', (req, res) => {
//   res.send('Hello world');
// });

app.listen(port, () => console.log(`Listening on port ${port}`));
