/**
 * 第一思路
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicatesNormal = function(nums, val) {
  let count = 0;
  for(let i=0; i<nums.length; i++) {
    if(nums[i] !== val) nums[count++]=nums[i];
  }
  return count;
};
