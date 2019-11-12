/**
 * 第一思路
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudokuNormal = function(board) {
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
  
  function recursion(index) {
    if (index >= 9*9) return true;
    else {
      let row = parseInt(index/9);
      let col = index % 9;
      if (board[row][col] !== '.') return recursion(index+1);
      else {
        for (let number=1; number<=9; number++) {
          if (
            ! numMap[`${number} in row ${row}`] && // 行合法
            ! numMap[`${number} in col ${col}`] && // 列合法
            ! numMap[`${number} in block ${parseInt(row/3)}-${parseInt(col/3)}`] // 九宫格合法
          ) {
            board[row][col] = `${number}`;
            numMap[`${number} in row ${row}`] = true;
            numMap[`${number} in col ${col}`] = true;
            numMap[`${number} in block ${parseInt(row/3)}-${parseInt(col/3)}`] = true;
            if (recursion(index+1)) {
              return true;
            } else {
              board[row][col] = '.';
              numMap[`${number} in row ${row}`] = false;
              numMap[`${number} in col ${col}`] = false;
              numMap[`${number} in block ${parseInt(row/3)}-${parseInt(col/3)}`] = false;
            }
          }
        }
        return false;
      }
    }
  }
  recursion(0);
};

/**
 * 优化思路
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudokuBetter = function(board) {
  function isValid(row, col, number) {
    for (let i=0; i<9; i++) {
      if (number === board[row][i] || number === board[i][col]) return false;
    }
    const leftTopRow = parseInt(row/3)*3;
    const leftTopCol = parseInt(col/3)*3;
    for (let i=0; i<3; i++) {
      for (let j=0; j<3; j++) {
        if (board[leftTopRow+i][leftTopCol+j] === number) return false;
      }
    }
    return true;
  }
  function recursion(index) {
    let row = parseInt(index/9);
    let col = index % 9;
    while(index < 9*9 && board[row][col] !== '.') {
      index++;
      row = parseInt(index/9);
      col = index % 9;
    }
    if (index >= 9*9) return true;
    for (let number=1; number<=9; number++) {
      if (isValid(row, col, `${number}`)) {
        board[row][col] = `${number}`;
        if (recursion(index+1)) {
          return true;
        } else {
          board[row][col] = '.';
        }
      }
    }
    return false;
  }
  
  recursion(0);
};

/**
 * 高票思路
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudokuVoted = function(board) {
  let emptyCells = [];
  for(let i=0; i<9; i++) {
    for (let j=0; j<9; j++) {
      if(board[i][j] === '.') emptyCells.push([i, j]);
    }
  }
  function isValid(row, col, number) {
    for (let i=0; i<9; i++) {
      if (number === board[row][i] || number === board[i][col]) return false;
    }
    const leftTopRow = parseInt(row/3)*3;
    const leftTopCol = parseInt(col/3)*3;
    for (let i=0; i<3; i++) {
      for (let j=0; j<3; j++) {
        if (board[leftTopRow+i][leftTopCol+j] === number) return false;
      }
    }
    return true;
  }
  function recursion(index) {
    if (index >= emptyCells.length) return true;
    const row = emptyCells[index][0];
    const col = emptyCells[index][1];
    for (let number=1; number<=9; number++) {
      if (isValid(row, col, `${number}`)) {
        board[row][col] = `${number}`;
        if (recursion(index+1)) {
          return true;
        } else {
          board[row][col] = '.';
        }
      }
    }
    return false;
  }
  
  recursion(0);
};