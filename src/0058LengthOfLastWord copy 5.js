/**
 * 第一思路
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWordNormal =function(s) {
  s = s.trim();
  let len = s.length, wordSt=len-1;
  for(; wordSt>=0; wordSt--) {
    if (s[wordSt] === ' ') break;
  }
  return len-wordSt-1;
};

/**
 * 高票思路
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWordVoted =function(s) {
  let len = 0, tail = s.length-1;
  while(tail >= 0 && s[tail] === ' ') tail--;
  while(tail >= 0 && s[tail] !== ' ') {
    len++;
    tail--;
  }
  return len;
};