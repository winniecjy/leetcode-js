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
 * 优化思路1：优化起始位置的选择
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringBetter1 = function(s) {
  function recursion(str, st) {
    let map = new Map();
    if(st>=str.length) return 0;
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

/**
 * 优化思路2：优化起始位置选择后，遍历位置
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringBetter2 = function(s) {
  function recursion(str, st, prefix, map) {
    if(st>=str.length) return prefix;
    for (let i=st; i<str.length; i++) {
      if (map.has(str[i])) {
        let lastIndex = map.get(str[i]);
        let newMap = new Map();
        for(let j=lastIndex+1; j<=i; j++) {
          newMap.set(str[j], j);
        }
        let another = recursion(str, i+1, i-lastIndex, newMap);
        return another>i-st+prefix?another:i-st+prefix;
      } else {
        map.set(str[i], i);
      }
    }
    return str.length-st;
  }
  return recursion(s, 0, 0, new Map());
};

/**
 * 高票思路
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/discuss/1729/11-line-simple-Java-solution-O(n)-with-explanation
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const lengthOfLongestSubstringVoted = function(s) {
  let map = new Map();
  let pA = 0;
  let pB = 0;
  let max = 0;
  for (; pB<s.length; pB++) {
    if (map.has(s[pB])) {
      max = max<(pB-pA)?(pB-pA):max;
      pA = map.get(s[pB])+1;
      map.set(s[pB], pB);
    }
    max = max<(pB-pA)?(pB-pA):max;
  }
  return max;
};