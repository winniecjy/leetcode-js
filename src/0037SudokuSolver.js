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
    console.log(index)
    if(index < 9) {
      const rowSt = startP[index][0];
      const colSt = startP[index][1];
      let lastSt = -1;
      const lastNumMap = numMap;
      const lastBoard = board;
      while(lastSt<=9) {
        let isFirstEmpty = true;
        for (let stepX=0; stepX<3; stepX++) {
          for (let stepY=0; stepY<3; stepY++) {
            if (board[rowSt+stepX][colSt+stepY] === '.') {
              for (let num=1; num<=9; num++) {
                if (!numMap[`${num} in row ${rowSt+stepX}`] && // 行不存在
                    !numMap[`${num} in col ${colSt+stepY}`] && // 列上不存在
                    !numMap[`${num} in block ${parseInt(rowSt/3)}-${parseInt(colSt/3)}`] // 九宫格不存在
                ) {
                  if (isFirstEmpty) {
                    if (lastSt < num) {
                      lastSt = num;
                      isFirstEmpty = false;
                      break;
                    }
                    else if (num === 9) lastSt = 10;
                  } 
                  board[rowSt+stepX][colSt+stepY] = num;
                  numMap[`${num} in row ${rowSt+stepX}`] = true;
                  numMap[`${num} in col ${colSt+stepY}`] = true;
                  numMap[`${num} in block ${parseInt(rowSt/3)}-${parseInt(colSt/3)}`] = true;
                } else if (num === 9) return false;
              }
            }
          }
        }
        if(recursion(index+1)) return true;
        else {
          numMap = lastNumMap;
          board = lastBoard;
        }
      }
    } else {
      return true;
    }
  }
  recursion(0);
  console.log(board)
};