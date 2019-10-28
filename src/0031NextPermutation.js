/**
 * 第一思路
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutationNormal = function(nums) {
  for(let i=nums.length-1; i>0; i--) {
    // 从后往遍历，找到nums[i] > nums[i-1]
    // 找到 下标大于i-1的数字中，大于nums[i-1]的最小数字，下标为j
    // 交换nums[i-1]和nums[j]
    // 下标大于i-1的数据从小到大重新排列
    if(nums[nums.length-1] > nums[i-1]) {
      let j = nums.length-1;
      while( j>i && nums[i-1] < nums[j]) {
        j--;
      }
      if(nums[i-1] >= nums[j]) j++;
      let temp = nums[i-1];
      nums[i-1] = nums[j];
      nums[j] = temp;
      break;
    } else {
      for(let j=i; j<nums.length; j++) {
        let temp = nums[j-1];
        nums[j-1] = nums[j];
        nums[j] = temp;
      }
    }
  }
};