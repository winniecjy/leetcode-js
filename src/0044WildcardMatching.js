/**
 * 第一思路
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  let dp = [];
  dp[0] = [true].concat(Array(p.length).fill(false))
  // 初始化动态规划数组
  for (let i=1; i<=p.length; i++) {
    dp[0][i] = p[i-1]==='*' && dp[0][i-1];
  }

  for (let i=1; i<=s.length; i++) {
    dp[i] = [];
    dp[i][0] = false;
    for (let j=1; j<=p.length; j++) {
      if (p[j-1] === '?' || p[j-1] === s[i-1]) {
        dp[i][j] = dp[i-1][j-1]
      } else if (p[j-1] === '*') {
        dp[i][j] = dp[i-1][j-1] || // 匹配1次
                  dp[i][j-1]    || // 匹配0次
                  dp[i-1][j]       // 匹配多次
      } else {
        dp[i][j] = false
      }
    }
  }

  return dp[s.length][p.length];
};