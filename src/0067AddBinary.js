/**
 * 第一思路
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let res = '', maxLen=Math.max(a.length,b.length)+1, carry=0;
  function PrefixZero(num, n) {
    return (Array(n).join(0) + num).slice(-n);
  }
  a = PrefixZero(a, maxLen);
  b = PrefixZero(b, maxLen);
  for (let index=maxLen-1; index>=0; index--) {
    if (a[index]^b[index] == 1) {
      if (carry === 1) res = '0'+res;
      else res = '1'+res;
    }
    else {
      res = carry+res;
      if (a[index] == 0) {
        carry = 0;
      } else {
        carry = 1;
      }
    }
  }
  res = res.replace(/^0*/g, '')
  return res === ''?'0':res
};

/**
 * 高票思路
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let ret = ''
  let aIdx = a.length-1,
      bIdx = b.length-1,
      carry = 0
  while(aIdx>=0 || bIdx>=0) {
    let sum = carry
    if (aIdx >= 0) sum += parseInt(a[aIdx--])
    if (bIdx >= 0) sum += parseInt(b[bIdx--])
    ret = sum%2 + ret
    carry = parseInt(sum/2);
  }
  if (carry !== 0) ret = carry + ret
  return ret
};