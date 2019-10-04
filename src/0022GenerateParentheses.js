/**
 * 第一思路
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesisNormal = function(n) {
  let ret = [];
  let recurse = (lcode, rcode, n, str) => {
    if (lcode+rcode === 2*n) {
      ret.push(str);
      return;
    }
    if (lcode > 0 && lcode <= n && lcode-rcode > 0) {
      recurse(lcode, rcode+1, n, str+')');
    } 
    if (lcode < n) {
      recurse(lcode+1, rcode, n, str+'(');
    }
    return;
  }
  recurse(0,0,n,'');
  return ret;
};

/**
 * 优化思路
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesisBetter = function(n) {
  let ret = [];
  let recurse = (code, n, str) => {
    if (str.length === 2*n) {
      ret.push(str);
      return;
    }
    if (code < 0) {
      recurse(code+1, n, str+')');
    } 
    if (str.length - code < n * 2) {
      recurse(code-1, n, str+'(');
    }
    return;
  }
  recurse(0,n,'');
  return ret;
};

/**
 * 高票思路
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesisVoted = function(n) {
  let ret = [];
  let recurse = (str, open, close, max) => {
    if (str.length === 2*max) {
      ret.push(str);
      return;
    }
    if (open < max) {
      recurse(str, open+1, close, max);
    } 
    if (close < open) {
      recurse(str, open, close+1, max);
    }
  }
  recurse('', 0,0,n);
  return ret;
};