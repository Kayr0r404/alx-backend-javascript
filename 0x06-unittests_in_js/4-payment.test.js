const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {

    it('should call Utils.calculateNumber with "SUM", 100, 20 and log the correct message', () => {
        const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
        const consoleSpy = sinon.spy(console);
        
        sendPaymentRequestToApi(100, 20);
            
        expect(calculateNumberStub.calledOnce).to.be.true;
        expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true;
        expect(consoleSpy.log.calledWith('The total is: 10')).to.be.true;
        expect(consoleSpy.log.calledOnce).to.be.true;

        calculateNumberStub.restore();
        consoleSpy.log.restore();
    });
    });

