const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
    it('should call Utils.calculateNumber with "SUM", 100, 20', () => {
        const stub = sinon.stub(Utils, 'calculateNumber').returns(10);
        
        sendPaymentRequestToApi(100, 20);
        
        expect(stub.calledOnce).to.be.true;
        expect(stub.calledWith('SUM', 100, 20)).to.be.true;
        
        stub.restore();
    });
});
