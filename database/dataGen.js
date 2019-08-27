// const mongoose = require('mongoose');
const descGen = require('./descGen.js');
const model = require('./dbconnect.js');

// generates the number portion of the image URL source
function num() {
  let number = Math.floor(Math.random() * 100);
  if (number.toString().length < 3) {
    number = number.toString().padStart(3, '0');
  }
  return number;
}

function generator(houseNum) {
  const current = new model.BirdHouse({
    reserva_id: houseNum,
    images: [],
  });
  const qty = Math.floor(Math.random() * 15 + 1);
  function imageGen(idNum) {
    const imageSlide = {
      slide_id: idNum,
    };
    imageSlide.desc = descGen();
    imageSlide.verified = Math.floor(Math.random() * 8) > 0;
    imageSlide.url = `https://birdhouse325.s3-us-west-1.amazonaws.com/birdhouse${num()}.jpg`;
    current.images.push(imageSlide);
  }
  for (let x = 0; x < qty; x += 1) {
    imageGen(x);
  }
  current.save((err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Success');
    }
  });
}

for (let z = 0; z < 10; z += 1) {
  generator(z);
}
