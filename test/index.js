const assert = require('assert');
const test = require('../index');

describe('Test', () => {
  describe('#test()', () => {
    it('should return the provided input', () => {
      assert.equal(test(1), 1);
    });
  });
});
