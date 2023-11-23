// tests for a function that rounds two numbers and returns the sum of the rounded numbers

const num = require('./0-calcul.js');
const assert = require('assert');

describe('calculateNumber', () => {
  it('should return the sum of therounded numbers', () => {
    assert.strictEqual(num(1.6, 3.2), 5);
    assert.strictEqual(num(1.2, 3.7), 5);
  });

  it('handle negative numbers correctly', () => {
    assert.strictEqual(num(-1.2, -3.7), -5);
    assert.strictEqual(num(-1.5, 3.7), 3);
  });
});

