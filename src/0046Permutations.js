/**
 * 第一思路
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  if (nums.length == 0) return [[]]
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    const nextPermutation = permute(nums.slice(0, i).concat(nums.slice(i + 1)));
    for (let j = 0; j < nextPermutation.length; j++) {
      res.push([nums[i], ...nextPermutation[j]]);
    }
  }
  return res;
};


/**
 * 高票思路
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  if (!nums.length) return [];
  let res = [];

  function findPermutations(res, curr, nums) {
    if (curr.length === nums.length) {
      res.push([...curr]);
      return;
    }
    for (let num of nums) {
      if (curr.indexOf(num) === -1) {
        curr.push(num);
        findPermutations(res, curr, nums);
        curr.pop(num);
      }
    }
  }

  findPermutations(res, [], nums);

  return res;
};