import birdsArray = require('./birdArray.js');

var descGen = function () {
  let text = [];
  var rand = function(max) {
    return Math.floor(Math.random() * max);
  }
  let punctuation = [', ', ' - ', '. ', '! ', '. ', '.', '.', '!'];
  let puncLength = punctuation.length;
  text.push(birdsArray[rand(4678)]);
  let punc1 = rand(puncLength);
  text.push(punctuation[punc1]);
  if (punc1 < 5) {
    text.push(birdsArray[rand(4678)]);
  } else {
    return text.join('');
  }
  let punc2 = rand(puncLength);
  text.push(punctuation[punc2]);
  if (punc2 < 5) {
    text.push(birdsArray[rand(4678)]);
  } else {
    return text.join('');
  }
  let punc3 = rand(3) + 5;
  text.push(punctuation[punc3]);
  return text.join('');
}

module.exports = descGen;