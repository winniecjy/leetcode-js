/**
 * 第一思路
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotateNormal = function(matrix) {
  const n = matrix.length;
  let temp = {};
  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n-row-1+parseInt(row*2/n); col++) {
      temp[`${row},${col}`] = matrix[row][col];
      matrix[row][col] = matrix[n-1-col][row];
    }
  }
  for (let row = 0; row < n; row++) {
    for (let col = n-1; col >= n-row-1+parseInt(row*2/n); col--) {
      temp[`${row},${col}`] = matrix[row][col];
      matrix[row][col] = temp[`${n-1-col},${row}`];
    }
  }
};

/**
 * 优化思路
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotateBetter = function(matrix) {
  const n = matrix.length;
  matrix.reverse();
  for (let row=0; row<n; row++) {
    for (let col=0; col<row; col++) {
      let temp = matrix[row][col];
      matrix[row][col] = matrix[col][row];
      matrix[col][row] = temp;
    }
  }
};
