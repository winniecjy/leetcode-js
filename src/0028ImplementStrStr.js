/**
 * 第一思路
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStrNormal = function(haystack, needle) {
  if (needle.length == 0) return 0;
  for(let st=0; st<haystack.length; st++) {
    if (haystack.length-st < needle.length) break;
    let success = false;
    for(let i=0, j=st; i<needle.length && j<haystack.length; i++, j++) {
      if (needle[i] !== haystack[j]) {
        break;
      } else if (i === needle.length-1) {
        success = true;
      }
    }
    if (success) {
      return st;
    }
  }
  return -1;
};

/**
 * 优化思路
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStrBetter = function(haystack, needle) {
  if (needle.length == 0) return 0;
  let needleLen = needle.length;
  let haystackLen = haystack.length;
  for(let st=0; st<haystackLen; st++) {
    if (haystackLen-st < needleLen) break;
    if(haystack.substr(st, needleLen) === needle) {
      return st;
    }
  }
  return -1;
};

/**
 * 高票思路
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStrVoted = function(haystack, needle) {
  for (let i = 0; ; i++) {
    for (let j = 0; ; j++) {
      if (j == needle.length) return i;
      if (i + j == haystack.length) return -1;
      if (needle.charAt(j) != haystack.charAt(i + j)) break;
    }
  }
};