const calculateNumber = require('./2-calcul_chai');
const expect = require('chai').expect

describe('calculateNumber', () => {
    it('rounding of a', () => {
        expect(calculateNumber('SUM', 2.7, 3)).to.be.equal(6); // 3 + 3 = 6
        expect(calculateNumber('SUBTRACT', 2.7, 3)).to.be.equal(0); // 3 - 3 = 0
        expect(calculateNumber('DIVIDE', 1.5, 4)).to.be.equal(0.5); // 2 / 4 = 0.5
    });

    it('rounding of b', () => {
        expect(calculateNumber("SUM", 1, 3.4)).to.be.equal(4); // 1 + 3 = 4
        expect(calculateNumber("SUBTRACT", 3, 3.9)).to.be.equal(-1); // 3 - 4 = -1
        expect(calculateNumber("DIVIDE", 4, 1.7)).to.be.equal(2); // 4 / 2 = 2
        expect(calculateNumber("DIVIDE", 4, 0.3)).to.be.equal('Error'); // 4 / 0 = Error
    });

    it('rounding of a and b', () => {
        expect(calculateNumber("SUM", 1.4, 3.4)).to.be.equal(4); // 1 + 3 = 4
        expect(calculateNumber("SUBTRACT", 3.6, 3.9)).to.be.equal(0); // 4 - 4 = 0
        expect(calculateNumber("DIVIDE", 5.9, 1.7)).to.be.equal(3); // 6 / 2 = 3
        expect(calculateNumber("DIVIDE", 4.9, 0.3)).to.be.equal('Error'); // 5 / 0 = Error
    });
});
