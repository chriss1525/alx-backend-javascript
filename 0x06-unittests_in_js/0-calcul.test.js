// tests for a function that rounds two numbers and returns the sum of the rounded numbers

const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('floating point whole numbers', () => {
    assert.strictEqual(calculateNumber(1.0, 2.0), 3);
  });

  it('rounding down bs floating point fractional number', () => {
    assert.strictEqual(calculateNumber(1.0, 2.4), 3);
  });

  it('rounding down a and bs floating point fractional number', () => {
    assert.strictEqual(calculateNumber(1.4, 2.4), 3);
  });

  it('rounding down as floating point fractional number', () => {
    assert.strictEqual(calculateNumber(1.4, 2.0), 3);
  });

  it('rounding up bs floating point fractional numbers', () => {
    assert.strictEqual(calculateNumber(1.0, 2.5), 4);
  });

  it('rounding up a and bs floating point fractional numbers', () => {
    assert.strictEqual(calculateNumber(2.6, 2.5), 6);
  });

  it('rounding up as floating point fractional numbers', () => {
    assert.strictEqual(calculateNumber(2.6, 2.0), 5);
  });

  it('rounding down a and b floating point fractional numbers with trailing 9s', () => {
    assert.strictEqual(calculateNumber(2.499999, 3.499999), 5);
  });
  it('rounding up b floating point fractional numbers with trailing 9s', () => {
    assert.strictEqual(calculateNumber(2.499999, 3.499999), 5);
  });

  it('rounding down bs floating point fractional numbers with trailing 9s', () => {
    assert.strictEqual(calculateNumber(2.6, 3.499999), 6);
  });

  it('rounding up bs floating point fractional numbers', () => {
    assert.strictEqual(calculateNumber(1.0, 2.6), 4);
  });

  it('rounding down bs floating point fractional numbers', () => {
    assert.strictEqual(calculateNumber(1.0, 2.499999), 3);
  });
});
