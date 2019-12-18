/**
 * 第一思路
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  if (grid.length === 0) return 0;
  const m = grid.length;
  const n = grid[0].length;
  let dp = Array(n)
  dp[0] = grid[0][0]
  for (let i=1; i<n; i++) dp[i] = grid[0][i]+dp[i-1]
  for (let i=1; i<m; i++) {
    for (let j=0; j<n; j++) {
      if (j>0) dp[j] = dp[j-1]>dp[j]?dp[j]:dp[j-1]
      dp[j] += grid[i][j]
    }
  }
  return dp[n-1]
};