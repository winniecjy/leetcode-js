/**
 * 第一思路
 * 超时用例："aaaaaaaaaaaaab", "a*a*a*a*a*a*a*a*a*a*c"
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatchNormal = function(s, p) {
  //   console.log(s, p);
  let index = 0;
  for(let i=0; i<p.length; i++) {
    if (index >= s.length) {
      if (p[i+1] !== '*') {
        return false;
      } 
      i += 1;
      continue;
    }
    if (i+1 < p.length && p[i+1] === '*') {
      if (isMatch(s.substring(index), p.substring(i+2))) {
        return true;
      }
      if (s[index] !== p[i] && p[i] !== '.') {
        return false;
      }
      for (let j=index; j<s.length; j++) {
        if (s[j] === p[i] || p[i] === '.') {
          if (isMatch(s.substring(j+1), p.substring(i+2))) {
            return true;
          }
        } else {
          return false;
        }
      }
      return false;
    } else if (p[i] !== '.' && s[index] !== p[i]){
      return false;
    }
    index++;
  }
  return index === s.length ? true : false;
};

/**
 * 高票思路
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatchBetter = function(s, p) {
  let dp = [];
  for (let i=0; i<s.length+1; i++) {
    dp.push(new Array(p.length+1).fill(false));
  }
   // dp[s.length+1][p.length+1], dp[i][j]表示s[0,i-1]在正则p[0, j-1]下是否匹配
  dp[0][0] = true;
  // 初始化状态，
  // dp[0][j]表示字符串为''，正则为p.substr(0, j)时是否匹配，对于空字符串匹配的格式为#*#*#*...
  // dp[i][0]表示字符串为s.substr(0,i)，正则为''时是否匹配，可知都不匹配
  for (let j=2; j<=p.length; j++) {
    if (p[j-1]==='*' && dp[0][j-2]) {
      dp[0][j] = true;
    }
  }

  // 分情况讨论，对于dp[i][j]
  // 如果p[j-1]===s[i-1]，dp[i][j] = dp[i-1][j-1]
  // 如果p[j-1]==='.'，dp[i][j] = dp[i-1][j-1]
  // 如果p[j-1]==='*'，分情况讨论
  // 1. 如果p[j-1] !== '.' && p[j-1] !== s[i-1]
  //    1.只能匹配0次，1 dp[i][j] = dp[i][j-2]，e.g. 对于匹配'bac*'中'c*'0次，等价于当前子串匹配'ba'
  // 2. 如果p[j-1] === '.' || p[j-1] === s[i-1]，以'[s]c'匹配'[p]c'距离
  //    2.1. 如果p[j-2]匹配0次，dp[i][j] = dp[i][j-2]，e.g. 等价于'[s]c'匹配'[p]'
  //    2.2. 如果p[j-2]匹配1次，dp[i][j] = dp[i-1][j-2]，e.g. 等价于'[s]c'配'[p]c'
  //    2.3. 如果p[j-2]匹配多次，dp[i][j] = dp[i-1][j]，e.g. 等价于'[s]'匹配'[p]c*'
  for(let i=0; i<s.length; i++) {
    for (let j=0; j<p.length; j++) {
      if (p[j] === '.' || p[j] === s[i]) {
        dp[i+1][j+1] = dp[i][j]===true;
      } else if (p[j] === '*'){
        if (p[j-1] !== '.' && p[j-1] !== s[i]) {
          dp[i+1][j+1] = dp[i+1][j-1]===true;
        } else {
          dp[i+1][j+1] = dp[i+1][j-1] || dp[i+1][j] || dp[i][j+1];
        }
      }
    }
  }
  return dp[s.length][p.length];
};