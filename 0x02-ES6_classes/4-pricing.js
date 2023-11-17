import Currency from './3-currency';

// create pricing class
export default class Pricing {
  constructor(amount, currency) {
    if (!(currency instanceof Currency)) throw TypeError();
    this._amount = amount;
    this._currency = currency;
  }

  // getters and setters
  get amount() {
    return this._amount;
  }

  set amount(value) {
    this._amount = value;
  }

  get currency() {
    return this._currency;
  }

  set currency(value) {
    this._currency = value;
  }

  // displayFullPrice method
  displayFullPrice() {
    return `${this._amount} ${this._currency.name}(${this._currency.code})`;
  }

  // static method convertPrice
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
