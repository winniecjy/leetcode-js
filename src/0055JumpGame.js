/**
 * 第一思路
 * @param {number[]} nums
 * @return {boolean}
 */
var canJumpNormal = function(nums) {
 let currFarest = 0;
 let nextFarest = 0;
 for (let i=0; i<nums.length-1; i++) {
   nextFarest = (nextFarest>i+nums[i])?nextFarest:(i+nums[i]);
   if (i === currFarest) {
     if (nextFarest === currFarest) break;
     currFarest = nextFarest;
   }
 }
 return nextFarest>=nums.length-1;
};

/**
 * 高票思路
 * @param {number[]} nums
 * @return {boolean}
 */
var canJumpVoted = function(nums) {
  let curr = 0;
  for (let reach=0; curr<nums.length && curr<=reach; ++curr) {
    reach = curr+nums[curr]>reach?curr+nums[curr]:reach;
  }
  return curr === nums.length
};