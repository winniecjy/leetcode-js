/**
 * 第一思路
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePathsNormal = function(m, n) {
  let dp = Array(m)
 for (let i=0; i<m; i++) {
   dp[i] = []
   dp[i][0] = 1
 }
 for (let i=0; i<n; i++) dp[0][i] = 1
 for (let i=1; i<m; i++) {
   for (let j=1; j<n; j++) {
     dp[i][j] = dp[i-1][j] + dp[i][j-1]
   }
 }
 return dp[m-1][n-1]
};

/**
 * 优化思路
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePathsBetter = function(m, n) {
  if (m == 1 || n === 1) return 1;
  let ret = 1;
  for(let i=m, j=1; i<n+m-1; i++, j++) {
    ret *= i;
    ret /= j;
  }
  return ret
};