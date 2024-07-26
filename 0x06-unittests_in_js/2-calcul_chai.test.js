
const calculateNumber = require('./1-calcul');
const assert = require('assert');

describe('calculateNumber', () => {
it('rounding of a', () => {
    assert.equal(calculateNumber('SUM', 2.7, 3), 6);
    assert.equal(calculateNumber('SUBTRACT', 1.4, 2), -1);
    assert.equal(calculateNumber('DIVIDE', 1.5, 4), 0.5);

});

it('rounding of b', () => {
    assert.equal(calculateNumber("SUM", 1, 3.4), 4);
    assert.equal(calculateNumber("SUBTRACT", 3, 3.9), -1);
    assert.equal(calculateNumber("DIVIDE", 4, 1.7), 2);
    assert.equal(calculateNumber("DIVIDE", 4, 0.3), 'Error')
});

it('rounding of a and b', () => {
    assert.equal(calculateNumber("SUM", 1.4, 3.4), 4);
    assert.equal(calculateNumber("SUBTRACT", 3.6, 3.9), 0);
    assert.equal(calculateNumber("DIVIDE", 5.9, 1.7), 3);
    assert.equal(calculateNumber("DIVIDE", 4.9, 0.3), 'Error')
});
});