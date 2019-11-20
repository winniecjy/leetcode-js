/**
 * 第一思路
 * @param {number[]} height
 * @return {number}
 */
var trapNormal = function (height) {
  let res = 0,
    currMaxIndex = 0,
    tempHeight = 0;
  for (let i = 0; i < height.length; i++) {
    if (height[i] >= height[currMaxIndex]) {
      res += tempHeight;
      tempHeight = 0;
      currMaxIndex = i;
    } else {
      tempHeight += height[currMaxIndex] - height[i];
    }
  }
  const lastMax = currMaxIndex;
  currMaxIndex = height.length - 1, tempHeight = 0;
  for (let i = height.length - 1; i >= lastMax; i--) {
    if (height[i] >= height[currMaxIndex]) {
      res += tempHeight;
      tempHeight = 0;
      currMaxIndex = i;
    } else {
      tempHeight += height[currMaxIndex] - height[i];
    }
  }
  return res;
};

/**
 * 优化思路
 * @param {number[]} height
 * @return {number}
 */
var trapBetter = function (height) {
  let res = 0,
    currMaxLeft = 0,
    tempHeightLeft = 0,
    currMaxRight = height.length - 1,
    tempHeightRight = 0;
  for (let left = 0, right = height.length - 1; left < right;) {
    if (height[currMaxLeft] < height[currMaxRight]) {
      left++;
      if (height[left] >= height[currMaxLeft]) {
        res += tempHeightLeft;
        tempHeightLeft = 0;
        currMaxLeft = left;
      } else {
        tempHeightLeft += height[currMaxLeft] - height[left];
      }
    } else {
      right--;
      if (height[right] >= height[currMaxRight]) {
        res += tempHeightRight;
        tempHeightRight = 0;
        currMaxRight = right;
      } else {
        tempHeightRight += height[currMaxRight] - height[right];
      }
    }
  }
  console.log(tempHeightLeft, tempHeightRight)

  return res;
};

/**
 * 高票思路
 * @param {number[]} height
 * @return {number}
 */
var trapVoted = function (height) {
  let left = 0,
    right = height.length - 1,
    res = 0;
  let maxleft = 0,
    maxright = 0;
  while (left <= right) {
    if (height[left] <= height[right]) {
      if (height[left] >= maxleft) maxleft = height[left];
      else res += maxleft - height[left];
      left++;
    } else {
      if (height[right] >= maxright) maxright = height[right];
      else res += maxright - height[right];
      right--;
    }
  }
  return res;
};