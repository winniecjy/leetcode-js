/**
 * 第一思路
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divideNormal = function(dividend, divisor) {
  const MAX_VALUE = 2147483647;
  if(divisor === 1 || dividend === 0) return dividend;
  else if (divisor === -1) {
      if (dividend === -2147483648) return MAX_VALUE;
      else return -dividend;
  }

  let quotient = 0;
  let signed = true;
  if (!((dividend > 0 && divisor > 0) || (dividend < 0 && divisor < 0))) signed = false;
  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);
  while(dividend - divisor >= 0) {
    dividend -= divisor;
    quotient++;
  }
  if (quotient > MAX_VALUE) quotient = MAX_VALUE;
  return signed ? quotient : -quotient;
};

/**
 * 优化思路
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divideBetter = function(dividend, divisor) {
  const MAX_VALUE = 2147483647;
  if(divisor === 1 || dividend === 0) return dividend;
  else if (divisor === -1) {
      if (dividend === -2147483648) return MAX_VALUE;
      else return -dividend;
  }

  let quotient = 0;
  let signed = true;
  if (!((dividend > 0 && divisor > 0) || (dividend < 0 && divisor < 0))) signed = false;
  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);
  let cnt = 1;
  while(dividend - divisor*cnt >= 0) {
    dividend -= divisor*cnt;
    quotient += cnt;
    cnt++;
  }
  if (dividend >= divisor) quotient += divideBetter(dividend, divisor);
  if (quotient > MAX_VALUE) quotient = MAX_VALUE;
  return signed ? quotient : -quotient;
};

/**
 * 高票思路
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divideVoted = function(dividend, divisor) {
  const INT_MIN = -2147483648;
  const INT_MAX = 2147483647;

  if(divisor === 1 || dividend === 0) return dividend;
  else if (divisor === -1) {
      if (dividend === INT_MIN) return INT_MAX;
      else return -dividend;
  } else if (divisor === INT_MIN) {
    if (dividend === INT_MIN) return 1;
    else return 0;
  }

  let dvd = Math.abs(dividend), dvs = Math.abs(divisor), ans = 0;
  let sign = dividend > 0 ^ divisor > 0 ? -1 : 1;
  while (dvd >= dvs) {
      let temp = dvs, m = 1;
      while (temp << 1 >= 0 && temp << 1 < INT_MAX && temp << 1 <= dvd) {
        temp <<= 1;
        m <<= 1;
      }
      dvd -= temp;
      ans += m;
  }
  return sign * ans;
};