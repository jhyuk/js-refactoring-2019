const assert = require('assert');
const statement = require('../src/statement');

describe('statement', () => {
  it('for empty performances', () => {
    let invoice = {
      customer: 'BigCo',
      performances: []
    };
    let plays;
    const result = statement(invoice, plays);
    assert.strictEqual(result, "Statement for BigCo\n" +
      "Amount owed is $0.00\n" +
      "You earned 0 credits\n");
  });
});