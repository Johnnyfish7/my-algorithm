// 二分法

function binarySearch(nums, target) {
  let left = 0
  let right = nums.length - 1 // 注意
  while (left <= right) {
    let mid = Math.floor((left + right) / 2)

    console.log('%c mid ------> ', 'color:#0f0;', left, right)
    console.log('%c mid ------> ', 'color:#0f0;', mid)
    if (nums[mid] == target) {
      // return mid
      // 别返回，锁定左侧边界
      right = mid - 1
    } else if (nums[mid] < target) {
      left = mid + 1 // 注意
    } else if (nums[mid] > target) {
      right = mid - 1 // 注意

    }
  }
  // 最后要检查 left 越界的情况
  if (left >= nums.length || nums[left] != target) return -1
  return left
}

let res = binarySearch([-1, 0, 3, 5, 8, 9, 12], 9)

console.log('%c res ------> ', 'color:#0f0;', res)
// nums = [-1,0,3,5,9,12], target = 9
