/**
 * 第一思路
 * @param {number} x
 * @return {boolean}
 */
var isPalindromeNormal = function(x) {
  if (x<0) return false;
  if (x>=0 && x<10) return true;
  const strX = String(x), strLen = strX.length;
  let leftP = 0, rightP = strLen-1;
  while(rightP>=leftP && rightP>=0 && leftP<strLen) {
    if (strX[leftP] !== strX[rightP]) return false;
    leftP++;
    rightP--;
  }
  return true;
};

/**
 * 高票思路
 * @param {number} x
 * @return {boolean}
 */
var isPalindromeVoted = function(x) {
  if (x<0 || (x!=0 && x%10==0)) return false;
  if (x>=0 && x<10) return true;
  let y = x, rev = 0;
  while (y>0){
    rev = rev*10 + y%10;
    y = parseInt(y/10);
  }
  return x === rev;
};