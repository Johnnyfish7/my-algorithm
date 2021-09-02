// 回溯算法

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  // 1. 设置结果集
  const result = []

  // 2. 回溯
  const recursion = (path, set) => {
    // 2.1 设置回溯终止条件
    if (path.length === nums.length) {
      console.log('%c path ------> ', 'color:#0f0;', path)
      // 2.1.1 推入结果 集
      result.push(path.concat())

      // 2.1.2 终止递归
      return
    }

    // 2.2 遍历数组
    for (let i = 0; i < nums.length; i++) {
      console.log('%c i 1111------> ', 'color:#0f0;', i)
      // 2.2.1 必须是不存在 set 中的坐标
      if (!set.has(i)) {
        console.log('%c i ------> ', 'color:#0f0;', i)
        console.log('%c set1 ------> ', 'color:#0f0;', path, set)
        // 2.2.2 本地递归条件（用完记得删除）
        path.push(nums[i])
        set.add(i)

        console.log('%c set2 ------> ', 'color:#0f0;', path, set)
        // 2.2.3 进一步递归
        recursion(path, set)
        console.log('%c set3 ------> ', 'color:#0f0;', path, set)
        // 关键i变化  之前留下的 pop delete
        console.log('%c i ------> ', 'color:#0f0;', i)

        // 2.2.4 回溯：撤回 2.2.2 的操作
        path.pop()
        set.delete(i)

        console.log('%c set4------> ', 'color:#0f0;', path, set)
      }
    }
  }

  recursion([], new Set())

  // 3. 返回结果
  return result
}

let res = permute([1, 2, 3])
console.log('%c res ------> ', 'color:#0f0;', res)
