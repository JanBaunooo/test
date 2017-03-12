const assert = require('assert');
const test = require('../test');

describe('Test', () => {
  describe('#test()', () => {
    it('should return the provided input', () => {
      assert.equal(test(1), 1);
    });
  });
});
