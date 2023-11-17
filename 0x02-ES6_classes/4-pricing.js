import Currency from './3-currency.js';

// create pricing class
export default class Pricing {
  constructor(amount, Currency) {
    this._amount = amount;
    this._currency = Currency;
  }

  // getters and setters
  get amount() {
    return this._amount;
  }

  set amount(amount) {
    this._amount = amount;
  }

  get currency() {
    return this._currency;
  }

  set currency(Currency) {
    this._currency = Currency;
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
