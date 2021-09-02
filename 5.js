// 动态规划

// # 伪码框架
// def coinChange(coins: List[int], amount: int):

//     # 定义：要凑出金额 n，至少要 dp(n) 个硬币
//     def dp(n):
//         # 做选择，选择需要硬币最少的那个结果
//         for coin in coins:
//             res = min(res, 1 + dp(n - coin))
//         return res

//     # 题目要求的最终结果是 dp(amount)
//     return dp(amount)



function coinChange(coins, amount) {
  // 数组大小为 amount + 1，初始值也为 amount + 1
  let dp = Array.apply(Array, Array(amount + 1)).map((v, k) => k)
  // 外层 for 循环在遍历所有状态的所有取值
  for (let i = 0; i < dp.length; i++) {
      // 内层 for 循环在求所有选择的最小值
      for (let j = 0; j < coins.length; j++) {
        let coin = coins[j]
        // 子问题无解，跳过
        if (i - coin < 0) continue;
        dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
      }
    console.log('%c dp[i] ------> ', 'color:#0f0;', i, dp[i])
  }
  return (dp[amount] == amount + 1) ? -1 : dp[amount];
}


let res = coinChange([1,2,5], 11)
console.log('%c res ------> ', 'color:#0f0;', res)


// 备忘录、DP table 就是在追求“如何聪明地穷举”。用空间换时间的思路，是降低时间复杂度的不二法门，除此之外，试问，还能玩出啥花活？
