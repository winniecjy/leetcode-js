/**
 * 第一思路
 * @param {number} x
 * @return {number}
 */
var mySqrtNormal = function(x) {
  function binarySearch(ll, rr, x) {
    let mid = parseInt((ll+rr)/2);
    if (ll*ll>=x || ll>=rr) {
      return ll*ll>x?(ll-1):ll;
    }
    if (mid*mid<x) {
      return binarySearch(mid+1, rr, x)
    } else {
      return binarySearch(ll, mid, x)
    }
  }
  return binarySearch(0, x, x)
};

/**
 * 高票思路
 * @param {number} x
 * @return {number}
 */
var mySqrtBetter = function(x) {
  if (x === 0) return 0;
  let ll=0, rr=x
  while(true) {
    let mid = parseInt((ll+rr)/2)
    if (mid*mid > x) rr = mid-1
    else if ((mid+1)*(mid+1)>x) return mid
    else ll = mid+1
  }
};