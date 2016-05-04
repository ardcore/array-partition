# array-partition

utility function - partitions `array` into two arrays, where the first one contains elements for which `fn` returns a truthy value, and the second one – for which `fn` returns something falsy (as seen on [Enum.partition/2](http://elixir-lang.org/docs/stable/elixir/Enum.html#partition/2))

Composes nicely with [ES6 destructuring assignment](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

### partition(array, predicate(element, index, array))

```js
import partition from 'array-partition';

let [even, odd] = partition([1,2,3,4,6,7,9,10], (n) => n % 2 == 0);
// even == [1,3,5,7,9], odd == [2,4,6,8,10]

const letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','w','x','y','z'];
let [firstThreeLetters, rest] = partition(letters, (el, i) => i < 3);
// firstThreeLetters == ['a','b','c']
```
