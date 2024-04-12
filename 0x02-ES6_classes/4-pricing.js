/* eslint-disable import/extensions */
/* eslint-disable  no-unused-vars */
import Currency from './3-currency.js';

export default class Pricing {
  /* eslint-disable no-underscore-dangle */
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    if (!(currency instanceof Currency)) {
      throw new TypeError('Currancy need to be an instance of Currency');
    }
    this._amount = amount;
    this._currency = currency;
  }

  set amount(amount) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = amount;
  }

  set currency(currency) {
    if (!(currency instanceof Currency)) {
      throw new TypeError('Currancy need to be an instance of Currency');
    }
    this._currency = currency;
  }

  get amount() {
    return this.amount;
  }

  get currency() {
    return this._currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency._name} (${this._currency._code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') throw new TypeError('Amount must be a number');
    if (typeof conversionRate !== 'number') throw new TypeError('ConversionRate must be a number');
    return amount * conversionRate;
  }
}
