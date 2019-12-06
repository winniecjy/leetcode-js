/**
 * 第一思路
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArrayNormal = function(nums) {
  if (nums.length === 0) return null;
  let currMax = nums[0];
  let ret = currMax;
  for (let i=1; i<nums.length; i++) {
    if (nums[i]>currMax+nums[i]) currMax = nums[i];
    else currMax += nums[i];
    if (currMax>ret) ret = currMax;
  }
  return ret;
};

/**
 * 优化思路
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArrayBetter = function(nums) {
  function max(a,b,c=-Infinity) {
    if (a>b) return a>c?a:c;
    else return b>c?b:c;
  }
  function getMaxSubArray(arr) {
    if (arr.length === 1) return arr[0];
    if (arr.length === 0) return -Infinity;
    const mid = parseInt(arr.length / 2);
    const leftMaxSum = getMaxSubArray(arr.slice(0, mid));
    const rightMaxSum = getMaxSubArray(arr.slice(mid));
    let leftMaxEndAtMid = arr[mid];
    let tempSum = arr[mid];
    for(let i=mid-1; i>=0; i--) {
      tempSum += arr[i];
      leftMaxEndAtMid = max(tempSum, leftMaxEndAtMid);
    }
    let rightMaxStartAtMid = 0;
    tempSum = 0;
    for(let i=mid+1; i<arr.length; i++) {
      tempSum += arr[i];
      rightMaxStartAtMid = max(tempSum, rightMaxStartAtMid);
    }
    return max(leftMaxSum, rightMaxSum, leftMaxEndAtMid+rightMaxStartAtMid);
  }
  return getMaxSubArray(nums);
};