/**
 * 第一思路
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicatesNormal = function(nums) {
  let len = 0;
  for(let i=0, lastNum=null; i<nums.length; ) {
    if (nums[i] !== lastNum) {
      lastNum=nums[i];
      len++;
      i++;
    }
    else {
      nums.splice(i, 1);
    }
  }
  return len;
};

/**
 * 优化思路
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicatesBetter = function(nums) {
  let len = 0;
  for(let i=0; i<nums.length; ) {
    while(len>0 && nums[i] === nums[len-1]) {
      i++;
    }
    if (i<nums.length) {
      nums[len] = nums[i];
      len++;
      i++;
    }
  }
  nums.splice(len);
  return len;
};

/**
 * 高票思路
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicatesVoted = function(nums) {
  let count = 0;
  for(let i=0; i<nums.length; i++) {
    if(nums[i] == nums[i-1]) count++;
    else nums[i-count] = A[i];
  }
  return nums.length - count;
};