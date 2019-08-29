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

function imageGen(idNum) {
  const imageSlide = {
    slide_id: idNum,
  };
  imageSlide.desc = descGen();
  imageSlide.verified = Math.floor(Math.random() * 8) > 0;
  imageSlide.url = `https://birdhouse325.s3-us-west-1.amazonaws.com/birdhouse${num()}.png`;
  return imageSlide;
}

function genInstance(reservaIdNum) {
  const current = new model.BirdHouse({
    reserva_id: reservaIdNum,
    images: [],
  });
  const qty = Math.floor(Math.random() * 15 + 1);
  for (let x = 0; x < qty; x += 1) {
    const imgInfo = imageGen(x);
    current.images.push(imgInfo);
  }
  return current;
}

function generator(loopNum) {
  const instance = genInstance(loopNum);
  instance.save((err) => {
    if (err) {
      console.log(err);
    }
  });
}

for (let z = 0; z < 100; z += 1) {
  generator(z);
}

module.exports = {
  num,
  imageGen,
  genInstance,
  generator,
};
