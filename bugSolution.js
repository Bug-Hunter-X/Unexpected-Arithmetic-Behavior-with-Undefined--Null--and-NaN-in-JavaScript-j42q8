function foo(a, b) {
  a = typeof a === 'undefined' ? 0 : a;
  b = typeof b === 'undefined' ? 0 : b;
  
  if (isNaN(a) || isNaN(b)) {
    return 0; //or throw an error: throw new Error('Invalid input: NaN detected');
  }

  return a + b; 
}

console.log(foo(undefined, 1)); // 1
console.log(foo(null, 1));   // 1
console.log(foo(NaN, 1));    // 0