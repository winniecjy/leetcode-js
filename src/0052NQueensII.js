/**
 * 第一思路
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
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
  return ret.length;
};