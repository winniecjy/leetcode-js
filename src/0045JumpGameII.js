/**
 * 第一思路
 * @param {number[]} nums
 * @return {number}
 */
var jumpNormal = function(nums) {
  if (nums.length <= 1) return 0;
  const numLen = nums.length;
  let steps = Array(numLen).fill(numLen);
  steps[0] = 0;
  for (let i=0; i<numLen; i++) {
    for(let j=1; j<=nums[i] && i+j<numLen; j++) {
      if (steps[i+j] > steps[i]+1) steps[i+j] = steps[i]+1;
    }
    if (steps[numLen-1] !== numLen) break;
  }
  return steps[numLen-1];
};

/**
 * 高票思路
 * @param {number[]} nums
 * @return {number}
 */
var jumpVoted = function(nums) {
  let level = 0;
  let currFarest = 0;
  let nextFarest = 0;
  for (let i=0; i<nums.length-1; i++) {
    nextFarest = (nextFarest>i+nums[i])?nextFarest:(i+nums[i]);
    if (i === currFarest) {
      level++;
      currFarest = nextFarest;
    }
  }
  return level;
};