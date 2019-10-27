/**
 * 第一思路
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstringNormal = function(s, words) {
  if (s.length === 0 || words.length === 0 || s.length < words.join('').length) return [];
  let ret = [];
  function checkValid(str, wordArr) {
    for(let i=0; i<wordArr.length; i++) {
      let word = wordArr[i];
      if(str.indexOf(word) == 0) {
        if (wordArr.length === 1) return true;
        else {
          let newWordsArr = wordArr;
          newWordsArr.splice(i);
          return checkValid(str.substr(word.length), newWordsArr);
        }
      } 
    }
    return false;
  }
  for(let i=0; i<words.length; i++) {
    let word = words[i];
    let temp = s;
    let newWordsArr = words.filter(item, index => index!==i)
    let preIdx = 0;
    while(temp.indexOf(word) !== -1) {
      let idx = temp.indexOf(word);
      temp = temp.substr(temp.indexOf(word));
      if(checkValid(temp, newWordsArr)) {
        ret.push(idx+preIdx);
      }
      preIdx += idx;
    }
  }
  return ret;
};

/**
 * 优化思路
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstringBetter = function(s, words) {
  if (s.length === 0 || words.length === 0 || s.length < words.join('').length) return [];
  let ret = [];
  let k = words.length;
  let l = words[0].length;
  for(let p1=0, p2=k*l; p1<s.length && p2<=s.length; p1++, p2++) {
    let tempStr = s.substr(p1, p2);
    // 初始化哈希table
    let map = {};
    words.forEach((item) => {
      map[item] = map[item]?map[item]+1:1;
    });
    let success = true;
    for(let j=0; j<k; j++) {
      let currWord = tempStr.substr(j*l, l);
      if(map[currWord] > 0) {
        map[currWord]--;
      } else {
        success = false;
        break;
      }
    }
    if(success) ret.push(p1);
  }
  return ret;
};

/**
 * 高票思路
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstringVoted = function(s, words) {
  if (words.length === 0) return [];
  let ret = [];
  const wordNum = words.length;
  const wordLen = words[0].length;
  // 哈希table
  let map = {};
  words.forEach((item) => {
    map[item] = map[item]?map[item]+1:1;
  });
  for(let p1=0; p1<wordLen; p1++) {
    let tempMap = {};
    let wordFound = 0; // 已匹配的word数量
    let subStrSt = p1;
    for(let j=p1; j<=s.length-wordLen; j+=wordLen) {
      const currWord = s.substr(j, wordLen);
      if(!map[currWord]) { // 不存在于words数组中
        wordFound = 0;
        tempMap = {};
        subStrSt = j + wordLen;
      } else if(tempMap[currWord] !== map[currWord]) { // 未匹配到的word
        tempMap[currWord] = tempMap[currWord] ? tempMap[currWord]+1:1;
        wordFound++;
      } else { // 已匹配过的word
        let wordToRemove;
        // 找到之前匹配的word位置，从其后开始重新构造子串
        while(wordToRemove !== currWord && subStrSt <= j) {
          wordToRemove = s.substr(subStrSt, wordLen);
          subStrSt += wordLen;
          tempMap[wordToRemove] -= 1;
          wordFound--;
        }
        wordFound++;
        tempMap[currWord]++;
      }
      if (wordFound === wordNum) {
        ret.push(j - wordLen*(wordNum-1));
      }
    }
  }
  return ret;
};