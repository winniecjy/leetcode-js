/**
 * 第一思路
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPowNormal = function(x, n) {
  if (n<0) x = 1/x;
  const binaryN = n.toString(2);
  let base = x;
  let res = 1;
  for(let i=binaryN.length-1; i>=0; i--) {
    const bit = binaryN[i];
    if(bit === '1') res *= base;
    base = base * base;
  }
  return res;
};

/**
 * 高票思路
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPowVoted = function(x, n) {
  if (n===0) return 1;
  let powN = Math.abs(n);
  let result = powN%2===0 ? myPow(x*x,powN/2) : myPow(x*x,(powN-1)/2) * x;
  return n < 0 ? 1/result : result;
};