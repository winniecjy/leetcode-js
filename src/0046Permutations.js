/**
 * 第一思路
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  if (nums.length == 0) return [[]]
  let res = [];
  for(let i=0; i<nums.length; i++) {
    const nextPermutation = permute(nums.slice(0,i).concat(nums.slice(i+1)));
    for (let j=0; j<nextPermutation.length; j++) {
      res.push([nums[i], ...nextPermutation[j]]);
    }
  }
  return res;
};