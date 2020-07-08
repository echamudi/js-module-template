/* eslint-disable global-require, vars-on-top, no-var, block-scoped-var */

if (typeof exports === 'object' && typeof module === 'object') {
  var minimath = require('../index.js');
  var chai = require('chai');
}

const { meaningOfLife, ElementaryMath } = minimath;
const { assert } = chai;

/* eslint-disable global-require, vars-on-top, no-var, block-scoped-var */

describe('test', () => {
  it('runs well :)', () => {
    assert.deepStrictEqual(meaningOfLife, 42);
    assert.deepStrictEqual(ElementaryMath.add(5, 7), 12);
    assert.deepStrictEqual(ElementaryMath.sub(9, 4), 5);
  });
});
