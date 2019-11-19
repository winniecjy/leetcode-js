/**
 * 第一思路
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositiveNormal = function(nums) {
  if (nums.length===0) return 1;
  function swap(a, b) {
    const temp = nums[b];
    nums[b] = nums[a];
    nums[a] = temp;
  }
  for (let i=0; i<nums.length; i++) {
    while (nums[i]<nums.length && nums[i]>0 && i !== nums[i]-1 && nums[i] !== nums[nums[i]-1]) {
      swap(i, nums[i]-1);
    }
  }
  for (let i=0; i<nums.length; i++) {
    if (nums[i] !== i+1) {
      return i+1;
    }
  }
  return nums[nums.length-1]+1;
};


/**
 * 高票思路
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  function swap(a, b) {
    const temp = nums[b];
    nums[b] = nums[a];
    nums[a] = temp;
  }
  for (let i=0; i<nums.length; i++) {
    while (nums[i]<nums.length && nums[i]>0 && nums[i] !== nums[nums[i]-1]) {
      swap(i, nums[i]-1);
    }
  }
  for (let i=0; i<nums.length; i++) {
    if (nums[i] !== i+1) {
      return i+1;
    }
  }
  return nums.length+1;
};