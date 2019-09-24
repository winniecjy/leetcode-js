/**
 * 第一思路
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSumNormal = function(nums) {
  if (nums.length < 3) return [];
  nums = nums.sort(function (a, b) {
    return a - b;
  });
  // console.log(nums);
  let numMap = {};
  let negMax = -1, posMin = nums.length;
  for (let i=0; i<nums.length; i++) {
    if (nums[i] < 0) negMax++;
    if (nums[i] > 0 && posMin === nums.length) {
      posMin = i;
    }
    numMap[nums[i]] = numMap[nums[i]] === undefined ? 1 : numMap[nums[i]]+1;
  }
  let ret = [];
  if (posMin - negMax >= 4) ret.push([0,0,0]);
  if (negMax < 0 || posMin === nums.length) return ret;
  for (let i=0; i<=negMax; i++) {
    if (i > 0 && nums[i-1] === nums[i]) continue;
    for (let j=nums.length-1; j>=0; j--) {
      if (j < nums.length-1 && nums[j+1] === nums[j]) continue;
      let sum = -(nums[i] + nums[j]);
      if (sum >= nums[i] && sum <= nums[j] && numMap[sum] !== undefined) {
        if (sum === nums[j] && sum === nums[i]) {
          if (numMap[sum] >= 3) ret.push([nums[i], sum, nums[j]]);
        } else if ((sum === nums[i] || sum === nums[j]) && numMap[sum] !== undefined) {
          if (numMap[sum] >= 2) ret.push([nums[i], sum, nums[j]]);
        } else if (numMap[sum] !== undefined) {
          ret.push([nums[i], sum, nums[j]]);
        }
      }
    }
  }

  return ret;
};


/**
 * 优化思路
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSumBetter = function(nums) {
  if (nums.length < 3) return [];
  nums = nums.sort(function (a, b) {
    return a - b;
  });
//   console.log(nums);
  let ret = [];
  for (let i=0; i<nums.length-2; i++) {
    if (i>0 && nums[i-1] == nums[i]) continue;
    let m = i+1, h = nums.length-1, sum = -nums[i];
    while(m < h) {
//       console.log(nums[i], nums[m], nums[h]);
      if (nums[m] + nums[h] === sum) {
        ret.push([nums[i], nums[m], nums[h]]);
        while (m < h && nums[m] == nums[m+1]) m++;
        while (m < h && nums[h] == nums[h-1]) h--;
        m++; h--;
      } else if (nums[m] + nums[h] < sum) {
        m++;
      } else if (nums[m] + nums[h] > sum) {
        h--;
      }
    }
  }

  return ret;
};
