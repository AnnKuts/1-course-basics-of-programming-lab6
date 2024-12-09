"use strict";

const pipe = (...fns) => {
  for (const fn of fns) {
    if(typeof(fn) !== "function") throw new Error("Not a function");
  }
 return (x) => fns.reduce((value, fn) => fn(value), x);
};

// const inc = x => ++x;
// const twice = x => x * 2;
// const cube = x => x ** 3;

// const f = pipe(inc, twice, cube);
// const x = f(5); 
// console.log(x); //1728

// const f = pipe(inc, 7, cube);
// const x = f(5);
// console.log(x); //Not a function
// //decided to check on my own, tests still are correct

module.exports = { pipe };
