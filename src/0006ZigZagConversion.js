/**
 * 第一思路
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convertNormal = function(s, numRows) {
  if (numRows === 1) return s;
  let rowArr = new Array(numRows).fill('');
  // 归属行实际上是有规律的，比如对于4行，其归属行数0,1,2,3,2,1重复
  for (let i=0; i<s.length; i++) {
    let k = i % numRows*2-2;
    let index = k < numRows? k : (numRows*2-2-k);
    rowArr[index] += s[i];
  }
  return rowArr.join('');
};

/**
 * 优化思路
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convertBetter = function(s, numRows) {
  if (numRows === 1) return s;
  let interval = 2 * numRows - 2;
  let ret = '';
  for (let i=0; i < numRows; i++) {
    let j=i;
    for (; j<s.length;) {
      if (i === 0 || i === numRows-1 || j+(interval-i*2)>=s.length || j+(interval-i*2)<0) {
        ret += s[j];
      } else {
        ret += s[j] + s[j+(interval-i*2)];
      }
      j += interval;
    }
  }
  return ret;
};

/**
 * 高票思路
 * https://leetcode.com/problems/zigzag-conversion/discuss/3403/Easy-to-understand-Java-solution
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convertVoted = function(s, numRows) {
  if (numRows === 1) return s;
  let rowArr = new Array(numRows).fill('');
  let len = s.length, i = 0;
  while (i < len) {
    for (let idx=0; idx < numRows && i<len; idx++) { // 先向下走
      rowArr[idx] += s[i++];
    }
    for (let idx=numRows-2; idx >=1 && i<len; idx--) { // 再向斜上方走
      rowArr[idx] += s[i++];
    }
  }

  for (let idx=1; idx<numRows; idx++) {
    rowArr[0] += rowArr[idx];
  }

  return rowArr[0];
};