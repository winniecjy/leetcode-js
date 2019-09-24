/**
 * 第一思路
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosestNormal = function(nums, target) {
  if (nums.length < 3) {
    let ret = 0;
    nums.forEach((item) => {
      ret += item;
    })
    return ret;
  };
  nums = nums.sort(function (a, b) {
    return a - b;
  });
  const MAX_VALUE = 99999999999;
  let ret = MAX_VALUE;
  for (let i=0; i<nums.length-2; i++) {
    if (i>0 && nums[i-1] == nums[i]) continue;
    let m = i+1, h = nums.length-1, sum = target-nums[i];
    while(m < h) {
      if (Math.abs(nums[m] + nums[h] - sum) < Math.abs(ret - target)) {
        ret = nums[i] + nums[m] + nums[h];
      }
      if (nums[m] + nums[h] < sum) {
        m++;
      } else if (nums[m] + nums[h] > sum) {
        h--;
      } else if (ret === target) {
        break;
      }
    }
    if (ret === target) break;
  }

  return ret;
};


/**
 * 高票思路
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSumClosestVoted = function(nums, target) {
  if (nums.length <= 3) {
    let ret = 0;
    nums.forEach((item) => {
      ret += item;
    })
    return ret;
  };
  nums = nums.sort(function (a, b) {
    return a - b;
  });

  let ret = nums[0]+nums[1]+nums[nums.length-1];
  for (let i=0; i<nums.length-2; i++) {
    if (i>0 && nums[i-1] == nums[i]) continue;
    let m = i+1, h = nums.length-1;
    while(m < h) {
      let sum = nums[i]+nums[m]+nums[h];
      if (sum < target) {
        m++;
      } else if (sum > target) {
        h--;
      }
      if (Math.abs(ret - target) > Math.abs(sum - target)) {
        ret = sum;
      }
      if (ret === target) break;
    }
    if (ret === target) break;
  }

  return ret;
};