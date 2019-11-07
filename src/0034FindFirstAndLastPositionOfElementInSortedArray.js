/**
 * 第一思路
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRangeNormal = function(nums, target) {
  if(nums.length === 0) return [-1, -1];
  let left = 0, right = nums.length;
  while(left <= right) {
    let mid = parseInt((left + right) / 2);
    if(nums[mid] === target) {
      left = right = mid;
      break;
    }
    else if (nums[mid] < target) {
      left = mid+1;
    }
    else if (nums[mid] > target) {
      right = mid-1;
    } else {
      left = right + 1;
      break;
    }
  }
//   console.log(left, right)
  if(left > right) return [-1, -1];
  else {
    while(nums[left] === target || nums[right] === target) {
      if (nums[left] === target) left--;
      else if (nums[right] === target) right++;
    }
    return [left+1, right-1];
  }
};

/**
 * 高票思路
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRangeVoted = function(nums, target) {
  if(nums.length === 0) return [-1, -1];
  let left = 0, right = nums.length-1, ret = [-1, -1];
  while(left < right) {
    let mid = parseInt((left + right) / 2);
    if (nums[mid] < target) {
      left = mid+1;
    } else {
      right = mid;
    }
  }
  if (nums[left] === target) {
    ret[0] = left;
    right = nums.length-1;
    while(left < right) {
      let mid =parseInt((left + right) / 2) + 1;
      if (nums[mid] > target) {
        right = mid-1;
      } else {
        left = mid;
      }
    }
    ret[1] = right;
  }
  return ret;
};