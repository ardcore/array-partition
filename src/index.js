export default function (arr, fn) {
  return arr.reduce((acc, el, i) => {
    return fn(el, i, arr) ? acc[0].push(el) : acc[1].push(el), acc;
  }, [[],[]]);
}
