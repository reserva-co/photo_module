// const mongoose = require('mongoose');
const descGen = require('./descGen.js');
const model = require('./dbconnect.js');

// generates the number portion of the image URL source

if (!String.prototype.padStart) {
  String.prototype.padStart = function padStart(targetLength, padString) {
      targetLength = targetLength >> 0; //truncate if number, or convert non-number to 0;
      padString = String(typeof padString !== 'undefined' ? padString : ' ');
      if (this.length >= targetLength) {
          return String(this);
      } else {
          targetLength = targetLength - this.length;
          if (targetLength > padString.length) {
              padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
          }
          return padString.slice(0, targetLength) + String(this);
      }
  };
}

function num() {
  let number = Math.floor(Math.random() * 100);
  if (number.toString().length < 3) {
    number = number.toString();
    number = number.padStart(3, '0');
  }
  return number;
}

function imageGen(idNum) {
  const imageSlide = {
    slide_id: idNum,
  };
  imageSlide.desc = descGen();
  imageSlide.verified = Math.floor(Math.random() * 6) < 1;
  imageSlide.url = `https://birdhouse325.s3-us-west-1.amazonaws.com/birdhouse${num()}.jpg`;
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
