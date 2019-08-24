var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var descGen = require('./descGen.js');
var model = require('./dbconnect.js');

var num = function() {
  var number = Math.floor(Math.random() * 100);
  if (number.toString().length < 3) {
    number = number.toString().padStart(3, '0');
  }
  return number;
}

var generator = function(houseNum) {
  let current = new model.BirdHouse({
    reserva_id: houseNum,
    images: []
  });
  let qty = Math.floor(Math.random() * 15 + 1);
  var imageGen = function(idNum) {
    let imageSlide = {
      slide_id: idNum
    };
    imageSlide.desc = descGen();
    imageSlide.verified = Math.floor(Math.random() * 8) > 0 ? false : true;
    imageSlide.url = 'https://birdhouse325.s3-us-west-1.amazonaws.com/birdhouse' + num() + '.jpg';
    current.images.push(imageSlide);
  }
  for (let x = 0; x < qty; x++) {
    imageGen(x);
  }
  current.save(function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log('Success');
    }
  });
}

for (let z = 0; z < 10; z++) {
  generator(z);
}
