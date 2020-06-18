const assert = require('assert');
const { meaningOfLife, ElementaryMath } = require('../index.js');

describe('test', () => {
  it('runs well :)', () => {
    assert.deepStrictEqual(meaningOfLife, 42);
    assert.deepStrictEqual(ElementaryMath.add(5, 7), 12);
    assert.deepStrictEqual(ElementaryMath.sub(9, 4), 5);
  });
});
