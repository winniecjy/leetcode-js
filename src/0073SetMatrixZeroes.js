/**
 * 第一思路
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  const m = matrix.length
  const n = m>0?matrix[0].length:0
  let prevRow = Array(n).fill(1)
  for (let row=0; row<m; row++) {
    let nonZeroRow = true
    for (let col=0; col<n; col++) {
      if (!matrix[row][col] && prevRow[col]) {
        for (let i=row-1; i>=0; i--) matrix[i][col] = 0
      }
      prevRow[col] = matrix[row][col] && prevRow[col]
      nonZeroRow = matrix[row][col] && nonZeroRow
      if (prevRow[col]==0) matrix[row][col] = 0
    }
    if (!nonZeroRow) matrix[row] = Array(n).fill(0)
  }
};

/**
 * 优化思路
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  if (matrix.length === 0) return
  let col0 = 1
  for (let row=0; row<matrix.length; row++) {
    if (matrix[row][0] === 0) col0 = 0 
    for (let col=1; col<matrix[row].length; col++) {
      if (matrix[row][col] === 0) matrix[row][0] = matrix[0][col] = 0
    }
  }
  for (let row=matrix.length-1; row>=0; row--) {
    for (let col=matrix[row].length-1; col>=1; col--) {
      if (!(matrix[row][0] && matrix[0][col])) matrix[row][col] = 0
    }
    if (col0 === 0) matrix[row][0] = 0
  }
};