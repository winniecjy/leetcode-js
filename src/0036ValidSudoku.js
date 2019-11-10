/**
 * 第一思路
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudokuNormal = function (board) {
  for (let i = 0; i < 9; i++) {
    let rowMap = {},
      colMap = {},
      subMap = {};
    let rowSt = (i % 3) * 3,
      colSt = parseInt(i / 3) * 3;
    for (let j = 0; j < 9; j++) {
      // 行
      if (board[i][j] !== '.' && rowMap[board[i][j]] === true) return false;
      else rowMap[board[i][j]] = true;
      // 列
      if (board[j][i] !== '.' && colMap[board[j][i]] === true) return false;
      else colMap[board[j][i]] = true;
      // 九宫格
      console.log()
      if (board[rowSt + parseInt(j / 3)][colSt + (j % 3)] !== '.' && subMap[board[rowSt + parseInt(j / 3)][colSt + (j % 3)]] === true)
        return false;
      else subMap[board[rowSt + parseInt(j / 3)][colSt + (j % 3)]] = true;
    }
  }
  return true;
}

/**
 * 优化思路
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudokuBetter = function (board) {
  let numMap = {
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: [],
  };
  for (let i = 0; i < 9 * 9; i++) {

    if (board[parseInt(i / 9)][i % 9] !== '.') {
      for (let j = 0; j < numMap[board[parseInt(i / 9)][i % 9]].length; j++) {
        let e = numMap[board[parseInt(i / 9)][i % 9]][j];
        if (e % 9 === i % 9 || // 列
          parseInt(i / 9) === parseInt(e / 9) || // 行
          parseInt(parseInt(i / 9) / 3) * 3 + parseInt((i % 9) / 3) === parseInt(parseInt(e / 9) / 3) * 3 + parseInt((e % 9) / 3) // 九宫格
        ) {
          return false;
        }
      }
      numMap[board[parseInt(i / 9)][i % 9]].push(i);
    }
  }
  return true;
}

/**
 * 高票思路
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudokuBetter = function (board) {
  let numMap = {};
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      const number = board[row][col];
      if (number !== '.') {
        if (numMap[number + " in row " + row] ||
          numMap[number + " in column " + col] ||
          numMap[number + " in block " + parseInt(row / 3) + "-" + parseInt(col / 3)])
          return false;
        else {
          numMap[number + " in row " + row] = true;
          numMap[number + " in column " + col] = true;
          numMap[number + " in block " + parseInt(row / 3) + "-" + parseInt(col / 3)] = true;
        }
      }
    }
  }
  return true;
}