/**
 * 第一思路
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  if (s.length==0) {
    if (p.length==0 || p.replace('*', '')=='') return true;
    else return false;
  } else if (p.length==0) {
    if (s.length==0) return true;
    else return false;
  }
  let dp = [];
  dp[0] = [true].concat(Array(s.length).fill(false))
  // 初始化动态规划数组
  for (let i=0; i<p.length; i++) {
    dp[i+1] = [];
    dp[i+1][0] = dp[i][0] && p[i]==='*';
  }

  for (let i=1; i<=s.length; i++) {
    for (let j=1; j<=p.length; j++) {
      if (p[j-1] === '?') {
        dp[i][j] = dp[i-1][j-1]
      } else if (p[j-1] === '*') {
        dp[i][j] = dp[i-1][j-1]
      }
    }
  }

  return dp[p.length][s.length];
};