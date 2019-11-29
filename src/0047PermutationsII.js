/**
 * 第一思路
 * 
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  if (nums.length == 0) return [[]]
  let res = [];
  nums.sort();
  for (let i = 0; i < nums.length; i++) {
    if (i>0 && nums[i] === nums[i-1]) continue;
    const nextPermutation = permuteUnique(nums.slice(0, i).concat(nums.slice(i + 1)));
    for (let j = 0; j < nextPermutation.length; j++) {
      res.push([nums[i], ...nextPermutation[j]]);
    }
  }
  return res;
};

/**
 * 优化思路
 * 
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  if (!nums.length) return [];
  let res = [];
  let indexCount = {};
  for (let i=0; i<nums.length; i++) {
     indexCount[nums[i]] = indexCount[nums[i]]?indexCount[nums[i]]+1:1;
  }
  
  function findPermutations(res, curr, nums) {
    if (curr.length === nums.length) {
      res.push([...curr]);
      return;
    }
    let tempMap = {} // 用于去重复杂元素
    for (let num of nums) {
      if (indexCount[num]>0 && !tempMap[num]) {
        tempMap[num] = true;
        indexCount[num]--;
        curr.push(num);
        findPermutations(res, curr, nums, indexCount);
        curr.pop(num);
        indexCount[num]++;
      }
    }
  }

  findPermutations(res, [], nums);

  return res;
};

/**
 * 高票思路
 * 
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  if (nums.length == 0) return [[]]
  let res = [];
  nums.sort();
  function dfs(nums, used, curr, res) {
    if (curr.length === nums.length) {
      res.push(curr);
      return;
    }
    for(let i=0; i<nums.length; i++) {
      if (used[i]) continue;
      if(i>0 &&nums[i-1]==nums[i] && !used[i-1]) continue;
      used[i] = true;
      curr.push(nums[i]);
      dfs(nums, used, [...curr], res);
      used[i] = false;
      curr.pop();
    }
  }
  dfs(nums, [], [], res);
  return res;
};