//Task 1: Multiplier Factory
function createMultiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

//Task 2: Once Function
function once(fn) {
  let called = false;
  return function(...args) {
    if (!called) {
      called = true;
      return fn(...args);
    }
    return undefined;
  };
}

//Task 3: Recursive Factorial
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
