let sum = 0

function fib(n) {
  sum += 1
  console.log('%c n ------> ', 'color:#0f0;', n)
  if (n == 1 || n == 2) return 1;
  return fib(n - 1) + fib(n - 2);
}


let res = fib(7)
console.log('%c res ------> ', 'color:#0f0;', res)
console.log('%c sum ------> ', 'color:#0f0;', sum)


// n = 5, sum = 9
// n = 6, sum = 15
// n = 7, sum = 25
// n = 8, sum = 41



