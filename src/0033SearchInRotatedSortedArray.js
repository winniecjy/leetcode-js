/**
 * 第一思路
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchNormal = function(nums, target) {
  if(nums.length === 0) return -1;
  else if(target === nums[0]) return 0;
  else if(target === nums[nums.length-1]) return nums.length-1;
  
  // 二分查找找到旋转中点
  let low = 0, high = nums.length-1;
  while(low < high) {
    let mid = parseInt((high+low)/2);
    if(nums[mid] > nums[high]) {
      low = mid+1;
    } else {
      high = mid;
    }
  }
  const rotateCenter = low;
  // 在有序排列中再次二分查找
  if(target < nums[0]) {
    low = rotateCenter;
    high = nums.length - 1;
  } else if (target > nums[nums.length-1]) {
    low = 0;
    high = rotateCenter==0?(nums.length-1):rotateCenter-1;
  } else if (rotateCenter === 0){
    low = 0;
    high = nums.length-1;
  }
  while(low <= high) {
    let mid = parseInt((high+low)/2);
    if (target === nums[mid]) return mid;
    else if(target > nums[mid]) {
      low = mid+1;
    } else {
      high = mid-1;
    }
  }
  
  return -1;
};

/**
 * 优化思路
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchBetter = function(nums, target) {
  let low = 0, high = nums.length - 1;
  while(low <= high) {
//     console.log(low, high)
    let mid = parseInt((low + high) / 2);
    if (target === nums[mid]) return mid;
    
    if(nums[mid] > nums[high]) { // 左侧有序
      if (target >= nums[low] && target < nums[mid]) {
        high = mid-1;
      } else {
        low = mid+1;
      }
    } else { // 右侧有序
      if (target <= nums[high] && target > nums[mid]) {
        low = mid+1;
      } else {
        high = mid-1;
      }
    }
  }
  return -1;
};