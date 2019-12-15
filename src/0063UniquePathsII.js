/**
 * 第一思路
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  if (obstacleGrid.length === 0) return 0;
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  let dp = Array(m)
 for (let i=0; i<m; i++) {
   dp[i] = []
   if (i==0) dp[i][0] = obstacleGrid[i][0]===1?0:1
   else dp[i][0] = obstacleGrid[i][0]===1?0:dp[i-1][0]
 }
 for (let i=1; i<n; i++) dp[0][i] = obstacleGrid[0][i]===1?0:dp[0][i-1]
 for (let i=1; i<m; i++) {
   for (let j=1; j<n; j++) {
     dp[i][j] = obstacleGrid[i][j]===1?0:(dp[i-1][j] + dp[i][j-1])
   }
 }
 return dp[m-1][n-1]
};

/**
 * 高票思路
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  if (obstacleGrid.length === 0) return 0;
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  let dp = Array(n)
  dp[0] = obstacleGrid[0][0]===1?0:1
 for (let i=1; i<n; i++) dp[i] = obstacleGrid[0][i]===1?0:dp[i-1]
 for (let i=1; i<m; i++) {
   for (let j=0; j<n; j++) {
     if (obstacleGrid[i][j]===1) dp[j] = 0;
     else if (j>0) dp[j] += dp[j-1]
   }
 }
 return dp[n-1]
};