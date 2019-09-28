/**
 * 第一思路
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSumNormal = function(nums, target) {
  if (nums.length <= 4) {
    let ret = 0;
    nums.forEach((item) => {
      ret += item;
    })
    return ret === target && nums.length === 4?[nums]:[];
  };
  nums = nums.sort(function (a, b) {
    return a - b;
  });

  let ret = [];
  for (let i=0; i<nums.length-3; i++) {
    if (i>0 && nums[i-1] == nums[i]) continue;
    for (let j=nums.length-1; j-i > 2; j--) {
      if (j < nums.length-1 && nums[j+1] === nums[j]) continue;
      let m = i+1, h = j-1;
      while(m < h) {
        let sum = nums[i]+nums[m]+nums[h]+nums[j];
        if (sum === target) {
          ret.push([nums[i], nums[m], nums[h], nums[j]]);
          while (m < h && nums[m] == nums[m+1]) m++;
          while (m < h && nums[h] == nums[h-1]) h--;
          m++; h--;
        }
        else if (sum < target) {
          m++;
        } else if (sum > target) {
          h--;
        }
      }
    }
  }

  return ret;
};


/**
 * 高票思路（JS小优化）
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSumNormal = function(nums, target) {
  if (nums.length <= 4) {
    let ret = 0;
    nums.forEach((item) => {
      ret += item;
    })
    return ret === target && nums.length === 4?[nums]:[];
  };
  nums = nums.sort(function (a, b) {
    return a - b;
  });

  let ret = [];
  let max1 = nums[nums.length-1] + nums[nums.length-2] + nums[nums.length-3];
  let max2 = nums[nums.length-1] + nums[nums.length-2];
  for (let i=0; i<nums.length-3; i++) {
    if ((i>0 && nums[i-1] == nums[i]) || nums[i] * 4 > target || nums[i] + max1 < target) continue;
    for (let j=nums.length-1; j-i > 2; j--) {
      if ((j < nums.length-1 && nums[j+1] === nums[j]) || nums[i]+nums[j]+max2 < target) continue;
      let m = i+1, h = j-1;
      while(m < h) {
        let sum = nums[i]+nums[m]+nums[h]+nums[j];
        if (sum === target) {
          ret.push([nums[i], nums[m], nums[h], nums[j]]);
          while (m < h && nums[m] == nums[m+1]) m++;
          while (m < h && nums[h] == nums[h-1]) h--;
          m++; h--;
        }
        else if (sum < target) {
          m++;
        } else if (sum > target) {
          h--;
        }
      }
    }
  }

  return ret;
};
