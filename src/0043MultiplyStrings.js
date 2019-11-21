/**
 * 第一思路
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiplyNormal = function(num1, num2) {
  let ret = [];
  function add(origin, added) {
    if (typeof origin === 'number') return origin+added;
    else return added;
  }
  for(let i=num1.length-1; i>=0; i--) {
    for (let j=num2.length-1; j>=0; j--) {
      let idx = num1.length-1-i+num2.length-1-j;
      let curr = parseInt(num1[i]) * parseInt(num2[j]);
      ret[idx] = add(ret[idx], curr);
      while(ret[idx] >= 10) {
        ret[idx+1] = add(ret[idx+1], parseInt(ret[idx]/10));
        ret[idx] %= 10;
        idx++;
      }
    }
  }
  ret = ret.reverse().join('');
  let leadingzero = 0;
  while(ret[leadingzero] === '0') {
    leadingzero++;
  }
  return ret.slice(leadingzero>0?leadingzero-1:0);
};

/**
 * 高票思路
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiplyVoted = function(num1, num2) {
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
};