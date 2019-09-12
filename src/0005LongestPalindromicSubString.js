/**
 * 第一思路，分两种情况双指针
 * @param {string} s
 * @return {string}
 */
var longestPalindromeNormal = function(s) {
  let a = 0, b = 1;
  let ret = '';
  for (a=0, b=1; b<s.length; a++, b++) {
    if (s[a] === s[b]) {
      let temp = s[a]+s[b];
      for (let j=a-1,k=b+1; j>=0&&k<s.length&&s[j]==s[k]; j--,k++) {
        temp = s[j]+temp+s[k];
      }
      if (temp.length > ret.length) ret = temp;
    }
  }
  for (a=0, b=2; b<s.length; a++, b++) {
    if (s[a] === s[b]) {
      let temp = s[a]+s[a+1]+s[b];
      for (let j=a-1,k=b+1; j>=0&&k<s.length&&s[j]==s[k]; j--,k++) {
        temp = s[j]+temp+s[k];
      }
      if (temp.length > ret.length) ret = temp;
    }
  }

  return ret==''&&s.length>0 ? s[0] : ret;
};

/**
 * 优化思路，合并两种情况
 * @param {string} s
 * @return {string}
 */
var longestPalindromeBetter = function(s) {
  let ret = '';
  for (let a=0, b=1; b<s.length;) {
    if (s[a] === s[b]) {
      let temp = s[a]+((b-a==2)?s[a+1]:'')+s[b];
      for (let j=a-1,k=b+1; j>=0&&k<s.length&&s[j]==s[k]; j--,k++) {
        temp = s[j]+temp+s[k];
      }
      if (temp.length > ret.length) ret = temp;
    }
    if(b-a <= 1) b++;
    else a++;
  }

  return ret==''&&s.length>0 ? s[0] : ret;
};

/**
 * 高票答案，代码优化
 * https://leetcode.com/problems/longest-palindromic-substring/discuss/2928/Very-simple-clean-java-solution
 * @param {string} s
 * @return {string}
 */
var longestPalindromeVoted = function(s) {
  if (s.length <= 1) return s;
  let max = '';
  var getPalindrome = (s, left,right) => {
    while (left>=0 && right<s.length && s[left]==s[right]) {
      left--;
      right++;
    }
    return s.substring(left+1, right);
  };
  for (let i=0; i<s.length-1;i++) {
    if (s[i] === s[i+1]) {
      let temp = getPalindrome(s, i, i+1);
      if (temp.length>max.length) max = temp;
    } 
    if (i+2<s.length && s[i] === s[i+2]) {
      let temp = getPalindrome(s, i, i+2);
      if (temp.length>max.length) max = temp;
    }
  }

  return max==''?s[0]:max;
};