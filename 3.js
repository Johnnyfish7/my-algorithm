let sum = 0

function fib(n) {
  if (n < 1) return 0;
  // 备忘录全初始化为 0
  let memo = {}
  // 进行带备忘录的递归
  return helper(memo, n);
}

function helper(memo, n) {
  console.log('%c n ------> ', 'color:#0f0;', n)
  if (n == 1 || n == 2) return 1;
  if (memo[n]) return memo[n];
  memo[n] = helper(memo, n - 1) + helper(memo, n - 2);
  return memo[n];
}


let res = fib(5)  // sum = 7
// let res = fib(6)
// let res = fib(7)
// let res = fib(8)
console.log('%c res ------> ', 'color:#0f0;', res)
console.log('%c sum ------> ', 'color:#0f0;', sum)


// n = 5, sum = 9
// n = 6, sum = 15
// n = 7, sum = 25
// n = 8, sum = 41
