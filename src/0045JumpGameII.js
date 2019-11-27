/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
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