/**
 * 第一思路
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  if (n=0) return 1;
  const binaryN = n.toString(2);
  let base = 1;
  for(let i=binaryN.length-1; i>=0; i--) {

  }
};

function multiplyOper(num1, num2) {
  const len1 = num1.length, len2 = num2.length;
  let ret = Array(len1+len2).fill(0);
  for (let i = len1 - 1; i >= 0; i--) {
    for (let j = len2 - 1; j >= 0; j--) {
      let curr = parseInt(num1[i]) * parseInt(num2[j]) + ret[i+j+1];
      ret[i+j+1] = curr % 10;
      ret[i+j] += parseInt(curr / 10);
    }
  }
  ret = ret.join("");
  let leadingzero = 0;
  while (ret[leadingzero] === "0") {
    leadingzero++;
  }
  ret = ret.slice(leadingzero > 0 ? leadingzero : 0);
  return ret.length==0?'0':ret;
}