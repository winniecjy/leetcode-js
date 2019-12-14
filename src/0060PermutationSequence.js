/**
 * 第一思路
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutationNormal = function(n, k) {
  let divisor = 1
  let numSet = [1]
  let ret = ''
  for(let i=1; i<n; i++) {
    numSet[i] = i+1
    divisor *= i
  }
  if (k === 1) return numSet.join('')
  k--
  for(let i=n-1; i>0; i--) {
    let curr = Math.floor(k/divisor)
    ret += numSet[curr]
    numSet.splice(curr, 1)
    k = k%divisor
    divisor /= i
  }
  ret += numSet[0]
  return ret
};