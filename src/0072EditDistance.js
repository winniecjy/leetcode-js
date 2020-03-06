/**
 * 第一思路
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  let dp = []
  for (let i=0; i<=word1.length; i++) {
    dp[i] = []
    dp[i][0] = i
    for (let j=0; j<=word2.length; j++) {
      dp[0][j] = j
    }
  }
  for (let i=1; i<=word1.length; i++) {
    for (let j=1; j<=word2.length; j++) {
      if (word1[i-1] === word2[j-1]) {
        dp[i][j] = dp[i-1][j-1]
      } else {
        dp[i][j] = Math.min(dp[i-1][j-1], dp[i][j-1], dp[i-1][j])+1
      }
    }
  }
  return dp[word1.length][word2.length]
};