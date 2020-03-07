/**
 * 第一思路
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let numBucket = [0,0,0]
  for (let i=0; i<nums.length; i++) {
    numBucket[nums[i]]++
  }
  for (let i=0; i<nums.length; i++) {
    if (i<numBucket[0]) nums[i]=0
    else if (i<numBucket[0]+numBucket[1]) nums[i]=1
    else nums[i]=2
  }
};

/**
 * 优化思路
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let left = 0, right = nums.length-1
  for(let i=0; i<nums.length && i<=right; i++) {
    if (nums[i] === 0) {
      nums[i] = nums[left]
      nums[left] = 0
      if (i!==left) i--
      left++
    }
    else if (nums[i] === 2){
      nums[i] = nums[right]
      nums[right] = 2
      if (i!==right) i--
      right--
    }
  }
};


/**
 * 另一个思路
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  for(let i=0,j=0,k=0; k<nums.length; k++) {
    let v = nums[k]
    nums[k] = 2
    if (v < 2) {
      nums[j] = 1
      j+=1
    } 
    if (v < 1) {
      nums[i] = 0
      i+=1
    }
  }
};