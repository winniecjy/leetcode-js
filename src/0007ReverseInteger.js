/**
 * 第一思路
 * @param {number} x
 * @return {number}
 */
var reverseNormal = function(x) {
  // if (Math.abs(x) < 10) return x;
  let isPos = x>0 ? true : false;
  let xStr = String(Math.abs(x));
  xStr = Number(xStr.split('').reverse().join(''));
  if (xStr > 2147483648) xStr = 0;
  return isPos ? xStr : -xStr;
};

/**
 * 优化思路
 * @param {number} x
 * @return {number}
 */
var reverseBetter = function(x) {
  if (Math.abs(x) < 10) return x;
  let ret = 0;
  while(x !== 0) {
    ret = ret*10+x%10;
    x = parseInt(x/10);
  }
  if(Math.abs(ret) > Math.pow(2, 31)) ret = 0;
  return ret;
};

/**
 * 高票思路
 * @param {number} x
 * @return {number}
 */
var reverseVoted = function(x) {
  let result = 0;
  while (x != 0)
  {
    let tail = x % 10;
    let newResult = result * 10 + tail;
    if ((newResult - tail) / 10 != result) { 
      return 0;
    }
    result = newResult;
    x = x / 10;
  }
  return result;
};

