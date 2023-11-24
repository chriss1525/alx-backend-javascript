// tests for a function that rounds two numbers and returns the sum of the rounded numbers

const assert = require('assert');
const mocha = require('mocha');

const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return sum of integers', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
    assert.strictEqual(calculateNumber(1, -1), 0);
    assert.strictEqual(calculateNumber(1, -3), -2);
  });

  it('should round a', () => {
    assert.strictEqual(calculateNumber(1.3, 1), 2);
    assert.strictEqual(calculateNumber(1.7, 1), 3);
    assert.strictEqual(calculateNumber(1.5, 1), 3);
    assert.strictEqual(calculateNumber(1.4, 1), 2);
    assert.strictEqual(calculateNumber(1.6, 1), 3);
  });

  it('should round b', () => {
    assert.strictEqual(calculateNumber(1, 1.3), 2);
    assert.strictEqual(calculateNumber(1, 1.7), 3);
    assert.strictEqual(calculateNumber(1, 1.5), 3);
    assert.strictEqual(calculateNumber(1, 1.4), 2);
    assert.strictEqual(calculateNumber(1, 1.6), 3);
  });

  it('should round a and b', () => {
    assert.strictEqual(calculateNumber(1.3, 1.3), 2);
    assert.strictEqual(calculateNumber(1.7, 1.7), 4);
    assert.strictEqual(calculateNumber(1.5, 1.5), 4);
    assert.strictEqual(calculateNumber(1.4, 1.4), 2);
    assert.strictEqual(calculateNumber(1.6, 1.6), 4);
  });
  });
