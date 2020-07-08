import * as minimath from '../src/index.js';

const { meaningOfLife, ElementaryMath } = minimath;
// eslint-disable-next-line no-undef
const { assert } = chai;

try {
  assert.deepStrictEqual(meaningOfLife, 42);
  assert.deepStrictEqual(ElementaryMath.add(5, 7), 12);
  assert.deepStrictEqual(ElementaryMath.sub(9, 4), 5);
  console.log('success');
} catch (e) {
  console.log(e.stack);
  console.log('fail');
}
