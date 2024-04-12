import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount === 'number' && currency instanceof Currency) {
      this._amount = amount;
      this._currency = currency;
    } else {
      throw new Error('Invalid data!');
    }
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    if (typeof amount === 'number') {
      this._amount = value;
    } else {
      throw new TypeError('amount must be a number');
    }
  }

  get currency() {
    return this._currency;
  }

  set currency(value) {
    if (value instanceof Currency) {
      this._currency = value;
    } else {
      throw new TypeError('instanceof must be an instanceof of Currency');
    }
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  convertPrice(conversionRate) {
    if (typeof conversionRate === 'number') {
      return this._amount * conversionRate;
    }
    throw new TypeError('conversionRate must be a number');
  }
}
