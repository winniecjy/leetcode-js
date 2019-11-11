/**
 * 第一思路
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
  const startP = [
    [0,0], [0,3], [0,6],
    [3,0], [3,3], [3,6],
    [6,0], [6,3], [6,6],
  ];
  // 初始化哈希表
  let numMap = {};
  for(let row=0; row<9; row++) {
    for (let col=0; col<9; col++) {
      const number = board[row][col];
      numMap[`${number} in row ${row}`] = true;
      numMap[`${number} in col ${col}`] = true;
      numMap[`${number} in block ${parseInt(row/3)}-${parseInt(col/3)}`] = true;
    }
  }
  // 从左到右，从上到下排序九宫格为0-8
  function recursion(index) {
    if(index < 9) {
      const rowSt = startP[index][0];
      const colSt = startP[index][1];
      for (let stepX=0; stepX<3; stepX++) {
        for (let stepY=0; stepY<3; stepY++) {

        }
      }
    }
  }
};