/**
 * 第一思路
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if (matrix.length === 0) return false
  var arr = matrix.reduce(function (a, b) { return a.concat(b)} );
  let left = 0, right = arr.length;
  while(left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (arr[mid] === target) return true
    else if (arr[mid] < target) {
      left = mid+1
    } else {
      right = mid-1
    }
  }
  return false
};

/**
 * 优化思路
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if (matrix.length === 0) return false
  const row = matrix.length
  const col = matrix[0].length
  let left = 0, right = row*col-1;
  while(left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (matrix[parseInt(mid/col)][mid%col] === target) return true
    else if (matrix[parseInt(mid/col)][mid%col] < target) {
      left = mid+1
    } else {
      right = mid-1
    }
  }
  return false
};