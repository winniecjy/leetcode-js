/**
 * 第一思路
 * @param {number[]} height
 * @return {number}
 */
var maxAreaNormal = function(height) {
  let max = 0;
  for (let i=0; i<height.length; i++) {
    for (let j=i+1; j<height.length; j++) {
      let minHeight = height[i] > height[j] ? height[j] : height[i];
      if (minHeight > height[j]) {
        minHeight = height[j];
      }
      if (max < minHeight * (j - i)) {
        max = minHeight * (j - i);
      }
    }
  }
  return max;
};