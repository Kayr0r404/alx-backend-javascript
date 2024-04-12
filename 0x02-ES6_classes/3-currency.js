export default class Currency {
  /* eslint-disable no-underscore-dangle */
  constructor(code, name) {
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a String');
    }
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a String');
    }

    this._code = code;
    this._name = name;
  }

  set code(code) {
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a String');
    }
    this._code = code;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a String');
    }
    this._name = name;
  }

  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  displayFullCurrency() {
    console.log(`${this._name} (${this._code})`);
  }
}
