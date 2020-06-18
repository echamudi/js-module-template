import * as minimath from '../src/index.js';

console.assert(minimath.meaningOfLife === 42);
console.assert(minimath.ElementaryMath.add(5, 7) === 12);
console.assert(minimath.ElementaryMath.sub(9, 4) === 5);

console.log('completed (es6)');
