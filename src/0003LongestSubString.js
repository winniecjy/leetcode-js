/**
 * 第一思路
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringNormal = function(s) {
  let max = 0;
  for(let i=0; i<s.length; i++) {
    let map = {}, res=0;
    for(let j=i; j<s.length; j++) {
      if(map[s[j]]) {
        if (res>max) {
          max = res;
        }
        break;
      }
      map[s[j]] = true;
      res++;
      if (j === s.length-1 && res>max) {
        max = res;
      } 
    }
  }
  return max;
};

/**
 * 优化思路：优化起始位置的选择
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringBetter = function(s) {
  function recursion(str, st) {
    let map = new Map();
    if(st>=str.length) return 1;
    for (let i=st; i<str.length; i++) {
      if (map.has(str[i])) {
        let lastIndex = map.get(str[i]);
        map.set(str[i], i);
        let another = recursion(str, lastIndex+1);
        return another>i-st?another:i-st;
      } else {
        map.set(str[i], i);
      }
    }
    return str.length-st;
  }
  return recursion(s, 0);
};