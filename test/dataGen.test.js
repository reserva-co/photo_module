const { num, imageGen, genInstance, generator } = require('../database/dataGen.js');

test('num produces an integer between 0-100 as a string', () => {
  const number = num();
  expect(typeof number).toBe('string');
  expect(Number(number)).toBeGreaterThanOrEqual(0);
  expect(Number(number)).toBeLessThan(100);
  const split = number.toString().split('.');
  expect(split.length).toBe(1);
});

test('imageGen creates image obj', () => {
  const obj = imageGen(15);
  expect(obj.slide_id).toBe(15);
  expect(typeof obj.desc).toBe('string');
  expect(typeof obj.verified).toBe('boolean');
  expect(typeof obj.url).toBe('string');
});
