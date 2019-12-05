/**
 * 第一思路
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueensNormal = function(n) {
  let ret = [];
  function recursion(map, row, n, rows) {
    if (row === n) ret.push(rows);
    for(let col=0; col<n; col++) {
      if (!map[`col${col}`] && !map[`dialogLR${row-col}`] && !map[`dialogRL${row+col}`]) {
        map[`col${col}`] = true;
        map[`dialogLR${row-col}`] = true;
        map[`dialogRL${row+col}`] = true;
        let str = Array(n).fill('.');
        str[col] = 'Q';
        rows.push(str.join(''));
        recursion(map, row+1, n, [...rows]);
        rows.pop();
        map[`col${col}`] = false;
        map[`dialogLR${row-col}`] = false;
        map[`dialogRL${row+col}`] = false;
      }
    }
  }
  recursion({}, 0, n, []);
  return ret;
};


/**
 * 高票思路
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueensVoted = function(n) {
  let ret = [];
  function recursion(row, n, board, ret) {
    if (row === n) {
      const res = board.map(col => 
        '.'.repeat(col) + 'Q' + '.'.repeat(n - col - 1))
      ret.push(res);
    }
    for(let col=0; col<n; col++) {
      if (checkValid(row, col, board)) {
        board.push(col);
        recursion(row+1, n, board, ret);
        board.pop();
      }
    }
  }
  function checkValid(row, col, board) {
    for(let i=0; i<board.length; i++) {
      if(board[i] === col || i+board[i]===row+col || i-board[i]===row-col) return false;
    }
    return true;
  }
  recursion(0, n, [], ret);
  return ret;
};