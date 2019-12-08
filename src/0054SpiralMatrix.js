/**
 * 第一思路
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrderNormal = function(matrix) {
  if (matrix.length === 0) return [];
  let edRow = matrix.length;
  let edCol = matrix[0].length;
  let stRow = 0;
  let stCol = 0;
  let res = [];
  while(edRow-stRow>=1 && edCol-stCol>=1) {
    for(let i=stCol; i<edCol; i++) {
      res.push(matrix[stRow][i]);
    }
    for(let i=stRow+1; i<edRow; i++) {
      res.push(matrix[i][edCol-1]);
    }
    if (edRow-stRow>1) {
      for(let i=edCol-2; i>=stCol; i--) {
        res.push(matrix[edRow-1][i]);
      }
    }
    if (edCol-stCol>1) {
      for(let i=edRow-2; i>stRow; i--) {
        res.push(matrix[i][stCol]);
      }
    }
    
    stRow++; stCol++;
    edRow--; edCol--;
  }
  return res;
};

/**
 * 高票思路
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrderVoted = function(matrix) {
  if (matrix.length === 0) return [];
  let res = matrix[0]; // 第一行直接插入结果数组
  const dirs = [[1,0], [0,-1], [-1,0], [0,1]]; // 方向偏移
  let currDir = 0; // 方向下标
  let m = matrix.length;
  let n = matrix[0].length;
  let pos = [0, n-1]; // 遍历开始元素下标
  let remain = (m-1)*n; // 剩余未遍历的元素
  while(remain>0) {
    for(let i=1; i<m; i++) {
      remain--;
      pos[0] += dirs[currDir][0]; pos[1] += dirs[currDir][1];
      res.push(matrix[pos[0]][pos[1]]);
    }
    m--; // 行/列减1
    // 切换水平/垂直模式
    let temp = m;
    m = n;
    n= temp;
    currDir = (currDir+1)%4; // 方向偏移循环
    
  }
  return res;
};