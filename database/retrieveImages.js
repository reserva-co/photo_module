// https://loremflickr.com/1024/768/birdhouse
const fs = require('fs');
const request = require('request');
// retrieve images
// Reference: https://github.com/request/request#examples

for (let i = 0; i < 100; i += 1) {
  if (i.toString().length < 3) {
    i = i.toString().padStart(3, '0');
  }
  setTimeout(() => {
    request(`http://loremflickr.com/1024/768/birdhouse?num=${i}`)
      .pipe(fs.createWriteStream(`birdhouse${i}.jpg`))
      .on('error', (err) => {
        console.log(err);
      });
    i = Number(i);
  }, 1000);
}
