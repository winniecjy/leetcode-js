/**
 * 第一思路
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagramsNormal = function(strs) {
  let groupMap = {};
  for (let i=0; i<strs.length; i++) {
    const str = strs[i];
    let key = Array.from(str).sort().join("");
    if (groupMap[key]) {
      groupMap[key].push(str);
    } else {
      groupMap[key] = [str];
    }
  }
  let ret = [];
  Object.keys(groupMap).forEach(item => {
    ret.push(groupMap[item]);
  });
  return ret;
};

/**
 * 优化思路
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagramsBetter = function(strs) {
  let groupMap = {};
  let count = 0;
   let ret = [];
  for (let i=0; i<strs.length; i++) {
    const str = strs[i];
    let letterMap = Array(26).fill(0);
    for (let j=0; j<str.length; j++) {
      letterMap[str[j].charCodeAt()-97]++;
    }
    let key = letterMap.join('');
    if (typeof groupMap[key] === 'number') {
      ret[groupMap[key]].push(str);
    } else {
      groupMap[key] = count;
      ret[count++] = [str];
    }
  }
  return ret;
};

/**
 * 高票思路
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagramsVoted = function(strs) {
  if (strs===null || strs.length===0) return [];
  let hashMap = new Map();
  for (let s of strs) {
    let key = Array.from(s).sort().join("");
    if (!hashMap.has(key)) hashMap.set(key, []);
    hashMap.set(key, hashMap.get(key).concat([s]));
  }
  return [...hashMap.values()];
};