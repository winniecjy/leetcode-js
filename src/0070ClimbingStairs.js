/**
 * 第一思路
 * @param {number} n
 * @return {number}
 */
var climbStairsNormal = function(n) {
  let dp = Array(n+3)
  for (let i=0; i<dp.length; i++) {
    dp[i] = 0
  }
  dp[0] = dp[1] = 1
  for (let i=2; i<dp.length-2; i++) {
    dp[i] = dp[i-1]+dp[i-2]
  }
  return dp[n]
};

/**
 * 高票思路
 * @param {number} n
 * @return {number}
 */
var climbStairsBetter = function(n) {
  if (n<=0) return 0
  else if (n<=2) return n
  let oneStepBefore = 2, twoStepsBefore = 1
  let res = 0
  for (let i=2; i<n; i++) {
    res = oneStepBefore + twoStepsBefore
    twoStepsBefore = oneStepBefore
    oneStepBefore = res
  }
  return res
};