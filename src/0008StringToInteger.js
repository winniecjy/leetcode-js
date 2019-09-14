/**
 * 第一思路
 * @param {string} str
 * @return {number}
 */
var myAtoiNormal = function(str) {
  const INT_MIN = -2147483648;
  const INT_MAX = 2147483647;
  str = str.trim();
  if (!/([0-9]|-|\+)/g.test(str[0])) return 0;
  let base = str[0] === '-' ? -Math.pow(10, 10) : Math.pow(10, 10);
  let ret = /[0-9]/g.test(str[0]) ? Number(str[0])*base : 0;
  if (ret !== 0) base = parseInt(base/10);
  for (let i = 1; i < str.length && base !== 0; i += 1) {
    if (/[0-9]/g.test(str[i])) {
      ret += Number(str[i]) * base;
    } else {
      break;
    }
    if (ret != 0) base = parseInt(base/10);
  }
  if(base !== 0) ret = base<0 ? -ret/base/10 : ret/base/10;
  if (ret > INT_MAX) return INT_MAX;
  else if (ret < INT_MIN) return INT_MIN;
  return ret;
};

/**
 * 优化思路
 * @param {string} str
 * @return {number}
 */
var myAtoiBetter = function(str) {
  str = str.trim();
  if (!/([0-9]|-|\+)/g.test(str[0])) return 0;
  const INT_MIN = -2147483648;
  const INT_MAX = 2147483647;
  let edIndex = 0;

  for (let i = 1; i < str.length; i += 1) {
    if (/[0-9]/g.test(str[i])) {
      edIndex += 1;
    } else {
      break;
    }
  }
  let ret = Number(str.substring(0, edIndex+1));
  if (str.substring(0, edIndex+1) === '+' || str.substring(0, edIndex+1) === '-') return 0;
  else if (ret > INT_MAX) return INT_MAX;
  else if (ret < INT_MIN) return INT_MIN;
  return ret;
};


/**
 * 高票思路
 * @param {string} str
 * @return {number}
 */
var myAtoiVoted = function(str) {
  const INT_MAX = 2147483647;
  const INT_MIN = -2147483648;
  let sign = 1, base = 0, i = 0;
  while (str[i] == ' ') { i++; }
  if (str[i] == '-' || str[i] == '+') {
      sign = 1 - 2 * (str[i++] == '-'); 
  }
  while (str[i] >= '0' && str[i] <= '9') {
      if (base >  parseInt(INT_MAX / 10) || (base == parseInt(INT_MAX / 10) && str[i] - '0' > 7)) {
          if (sign == 1) return INT_MAX;
          else return INT_MIN;
      }
      base  = 10 * base + (str[i++] - '0');
  }
  return base * sign;
};

