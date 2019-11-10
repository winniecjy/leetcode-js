/**
 * 第一思路
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsertNormal = function(nums, target) {
  if (nums.length === 0) return 0;
  let left = 0, right = nums.length-1;
  while(left < right) {
    let mid = parseInt((left+right)/2);
    if (nums[mid] === target) return mid;
    else if (nums[mid] < target) {
      left = mid+1;
    }
    else {
      right = mid;
    }
  }
  return nums[left] > target ? left-1:left+1;
};

/**
 * 优化思路
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsertBetter = function(nums, target) {
  let left = 0, right = nums.length-1;
  while(left <= right) {
    let mid = parseInt((left+right)/2);
    if (nums[mid] === target) return mid;
    else if (nums[mid] < target) left = mid+1;
    else right = mid-1;
  }
  return left;
};