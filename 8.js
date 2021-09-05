/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++)
      for (let j = i + 1; j < nums.length; j++)
          if (nums[j] === target - nums[i])
              return [i, j];

  // 不存在这么两个数
  return [-1, -1];
};


let nums = [3,1,3,6]
let target = 6
let res = twoSum(nums, target)
console.log('%c res ------> ', 'color:#0f0;', res)



/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function (nums, target) {
  let n = nums.length;
  let index = new Map();
  // 构造一个哈希表：元素映射到相应的索引
  for (let i = 0; i < n; i++)
      index.set(nums[i], i);

  for (let i = 0; i < n; i++) {
      let other = target - nums[i];
      // 如果 other 存在且不是 nums[i] 本身
      if (index.has(other) && index.get(other) !== i)
          return [i, index.get(other)];
  }

  // 不存在这么两个数
  return [-1, -1];
};

