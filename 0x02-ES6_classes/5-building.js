export default class Building {
    /* eslint-disable class-methods-use-this */
    /* eslint-disable no-underscore-dangle */
    constructor(sqft) {
      if (this.evacuationWarningMessage === undefined) {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
      if (typeof sqft !== 'number') {
        throw new TypeError('sqft must be a number');
      }
      this._sqft = sqft;
    }
  
    set sqft(sqft) {
      if (typeof sqft !== 'number') {
        throw new TypeError('sqft must be a number');
      }
      this._sqft = sqft;
    }
  
    get sqft() {
      return this._sqft;
    }
  }
  
