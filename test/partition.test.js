import test from 'ava';
import partition from '../dist/index.js';

test('should properly partition array based on a fn', t => {
    const [even, odd] = partition([1,2,3,4,5,6,7,8,9,10], (n) => n % 2 === 0);
    t.deepEqual(even, [2,4,6,8,10]);
    t.deepEqual(odd, [1,3,5,7,9]);
});

test('shouldn\'t modify original array', t => {
    const arr = [1,2,3,4];
    partition(arr, (el) => el <= 2);
    t.deepEqual(arr, [1,2,3,4]);
});

test('should properly handle index', t => {
    const arr = 'abcdefghijklmnopqrstuwxyz'.split('');
    const [firstThreeLetters] = partition(arr, (el, i) => i < 3);
    t.deepEqual(firstThreeLetters, ['a','b','c']);
});

test('should properly handle array reference', t => {
    const str = 'aabbxxxtest'.split('');
    const [_, other] = partition(str, (el, i, arr) => el === arr[i-1] || el === arr[i+1]);
    t.deepEqual(other, ['t','e','s','t']);
});
