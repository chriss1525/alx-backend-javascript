// test cases for function that performs mathematical operations on tw integers

const assert = require('assert');
const calcul = require('./1-calcul');

describe('calcul', () => {
  it('should return correct output for type="SUM"', () => {
    assert.strictEqual(calcul('SUM', 1.3, 3), 4);
    assert.strictEqual(calcul('SUM', 1, -3), -2);
    assert.strictEqual(calcul('SUM', 1, 0.4), 1);
    assert.strictEqual(calcul('SUM', 0, 0), 0);
    assert.strictEqual(calcul('SUM', 1.3, 3), 4);
    assert.strictEqual(calcul('SUM', -1, 3), 2);
  });

  it('should return correct output for type="SUBTRACT"', () => {
    assert.strictEqual(calcul('SUBTRACT', 1.3, 3), -2);
    assert.strictEqual(calcul('SUBTRACT', 1, -3), 4);
    assert.strictEqual(calcul('SUBTRACT', 1, 0.4), 1);
    assert.strictEqual(calcul('SUBTRACT', 0, 0), 0);
  });

  it('should return correct output for type="DIVIDE"', () => {
    assert.strictEqual(calcul('DIVIDE', 3, 1.5), 1.5);
    assert.strictEqual(calcul('DIVIDE', 5, 2), 2.5);
    assert.strictEqual(calcul('DIVIDE', 2, 2.4), 1);
    assert.strictEqual(calcul('DIVIDE', 0, 0), 'Error');
  });

  it('should return correct error for type="DIVIDE"', () => {
    assert.strictEqual(calcul('DIVIDE', 1.3, 0), 'Error');
  });
});
