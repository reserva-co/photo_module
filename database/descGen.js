const birdsArray = require('./birdsArray.js');

const descGen = function () {
  const text = [];
  const rand = function (max) {
    return Math.floor(Math.random() * max);
  };
  const punctuation = [', ', ' - ', '. ', '! ', '. ', '.', '.', '!'];
  const puncLength = punctuation.length;
  text.push(birdsArray[rand(4678)]);
  const punc1 = rand(puncLength);
  text.push(punctuation[punc1]);
  if (punc1 < 5) {
    text.push(birdsArray[rand(4678)]);
  } else {
    return text.join('');
  }
  const punc2 = rand(puncLength);
  text.push(punctuation[punc2]);
  if (punc2 < 5) {
    text.push(birdsArray[rand(4678)]);
  } else {
    return text.join('');
  }
  const punc3 = rand(3) + 5;
  text.push(punctuation[punc3]);
  return text.join('');
};

module.exports = descGen;
