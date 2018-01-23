"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (arr, fn) {
  return arr.reduce(function (acc, el, i) {
    return fn(el, i, arr) ? acc[0].push(el) : acc[1].push(el), acc;
  }, [[], []]);
};