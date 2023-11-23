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

  it('rounds a correctly', () => {
    assert.strictEqual(num(1.5, 3), 5);
    assert.strictEqual(num(1.4, 3), 4);
  });

  it('rounds b correctly', () => {
    assert.strictEqual(num(1.5, 3), 5);
    assert.strictEqual(num(1.4, 3), 4);
  });

  it('rounds a and b correctly', () => {
    assert.strictEqual(num(1.4, 3.5), 5);
    assert.strictEqual(num(1.5, 3.5), 6);
  });

  it('calculates floating point numbers correctly', () => {
    assert.strictEqual(num(1.0, 2.0), 3);
    assert.strictEqual(num(1.0, 4.0), 5);
  });

  it('rounds down correctly', () => {
    assert.strictEqual(num(1.2, 3.4), 4);
    assert.strictEqual(num(1.3, 4.1), 5);
  });

  it('rounds up correctly', () => {
    assert.strictEqual(num(1.5, 3.5), 6);
    assert.strictEqual(num(1.6, 3.6), 6);
  });
});

