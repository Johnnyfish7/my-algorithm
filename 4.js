// 至此，带备忘录的递归解法的效率已经和迭代的动态规划解法一样了。实际上，这种解法和迭代的动态规划已经差不多了，只不过这种方法叫做「自顶向下」，动态规划叫做「自底向上」。

sum = 0
function fib(N) {
  if (N == 0) return 0;
  if (N == 1) return 1;
  let dp = new Array(N).fill(0)
  // base case
  dp[1] = dp[2] = 1;
  for (let i = 3; i <= N; i++) {
    sum += 1
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  console.log('%c dp ------> ', 'color:#0f0;', dp)
  return dp[N];
}


// let res = fib(7)
let res = fib(8)
console.log('%c res ------> ', 'color:#0f0;', res)
console.log('%c sum ------> ', 'color:#0f0;', sum)

// n = 5, sum = 9
// n = 6, sum = 15
// n = 7, sum = 25
// n = 8, sum = 41


// 这里，引出「状态转移方程」这个名词，实际上就是描述问题结构的数学形式：
// n = 1 || 2   f(n) = 1
// n > 2 f(n) = f(n - 1) + f(n - 2)




// 优化 其实并不需要那么长的一个 DP table 来存储所有的状态
// 这个技巧就是所谓的「状态压缩」，如果我们发现每次状态转移只需要 DP table 中的一部分，那么可以尝试用状态压缩来缩小 DP table 的大小，只记录必要的数据，上述例子就相当于把DP table 的大小从 n 缩小到 2。后续的动态规划章节中我们还会看到这样的例子，一般来说是把一个二维的 DP table 压缩成一维，即把空间复杂度从 O(n^2) 压缩到 O(n)。
function fib2(n) {
  if (n == 2 || n == 1)
      return 1;
  let prev = 1, curr = 1;
  for (let i = 3; i <= n; i++) {
      let sum = prev + curr;
      prev = curr;
      curr = sum;
  }
  return curr;
}

