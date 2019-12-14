/**
 * 第一思路
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrixNormal = function (n) {
  if (n === 0) return [];
  let res = Array(n); // 第一行直接插入结果数组
  for (let i = 0; i < n; i++) {
    res[i] = Array(n)
    res[0][i] = i + 1
  }
  const dirs = [
    [1, 0],
    [0, -1],
    [-1, 0],
    [0, 1]
  ]; // 方向偏移
  let currDir = 0; // 方向下标
  let row = n;
  let col = n;
  let remain = n * n - n; // 剩余未遍历的元素
  let pos = [0, n - 1]
  res[0][0] = 1
  while (remain > 0) {
    for (let i = 1; i < row; i++) {
      remain--;
      pos[0] += dirs[currDir][0];
      pos[1] += dirs[currDir][1];
      res[pos[0]][pos[1]] = n * n - remain
    }
    row--; // 行/列减1
    // 旋转切换水平/垂直模式
    let temp = row;
    row = col;
    col = temp;
    currDir = (currDir + 1) % 4; // 方向偏移循环

  }
  return res;
};

/* 高票思路
 * @param {number} n
 * @return {number[][]}
 */
function range(start, end) {
  var _self = this;
  var length = end - start;
  var step = start - 1;
  return Array.apply(null, {
    length: length
  }).map(function (v, i) {
    step++;
    return step;
  });
}

function rotate(matrix) {
  if (matrix.length === 0) return []
  const n = matrix.length;
  const m = matrix[0].length;
  let rotated = [];
  for (let row = 0; row < m; row++) {
    rotated[row] = []
    for (let col = n - 1; col >= 0; col--) {
      rotated[row][n - col - 1] = matrix[col][row]
    }
  }
  return rotated
};
var generateMatrixVote1 = function (n) {
  let res = [],
    lo = n * n + 1
  while (lo > 1) {
    let hi = lo
    lo -= res.length
    res = rotate(res)
    res.unshift([])
    res[0] = range(lo, hi)
  }
  return res
};

var generateMatrixVote2 = function(n) {
  let res = Array(n);
  for (let i = 0; i < n; i++) {
    res[i] = Array(n).fill(0)
    res[0][i] = i + 1
  }
  let pos = [0, n-1], direction = [1, 0]
  for (let i=n-1; i<n*n; i++) {
    res[pos[0]][pos[1]] = i+1
    if (res[(pos[0]+direction[0])%n][(pos[1]+direction[1])%n] !== 0) {
      direction = [direction[1], -direction[0]]
    }
    pos[0] += direction[0]
    pos[1] += direction[1]
  }
  return res
};