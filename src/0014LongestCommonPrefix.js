/**
 * 第一思路
 * @param {string} s
 * @return {number}
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonNormal = function(strs) {
  if (strs.length === 0) return '';
  let ret  = '';
  for (let i=0; i<strs[0].length; i++) {
    for (let j=1; j<strs.length; j++) {
      if (strs[j].length <= i || strs[j][i] !== strs[0][i]) {
        return ret;
      }
    }
    ret += strs[0][i];
  }
  
  return ret;
};

/**
 * 高票思路
 * @param {string} s
 * @return {number}
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonVoted = function(strs) {
  if (strs === null || strs.length === 0) return '';
  let ret  = strs[0];
  for (let i=1; i<strs.length; i++) {
    while (strs[i].indexOf(ret) !== 0) {
      ret = ret.substr(0, ret.length-1);
    }
    if (ret === '') break;
  }
  
  return ret;
};
