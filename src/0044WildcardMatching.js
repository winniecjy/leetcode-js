/**
 * 第一思路
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatchNormal = function(s, p) {
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

/**
 * 高票思路
 * @param {*}} s 
 * @param {*} p 
 */
var isMatchVoted = function(s, p) {
  let currS = 0,
    currP = 0,
    lastStarS = 0,
    lastStarP = -1;
  
  while (currS < s.length) {
    // 同时移动两个指针
    if ((currP < p.length && p[currP] == "?") || s[currS] == p[currP]) {
      currS++;
      currP++;
    }
    // 当前为'*'，只移动正则指针
    else if (currP < p.length && p[currP] === "*") {
      lastStarP = currP;
      lastStarS = currS;
      currP++;
    }
    // 正则有前置位置为'*'，移动指针回退到该位置
    else if (lastStarP != -1) {
      currP = lastStarP + 1;
      lastStarS++;
      currS = lastStarS;
    }
    // 当前正则不是'*'，正则前一位也不是'*'，字符串不匹配
    else return false;
  }

  // 检查正则中的剩余字符
  while (currP < p.length && p[currP] == "*") currP++;

  return currP == p.length;
};