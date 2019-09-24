/**
 * 第一思路
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinationsNormal = function(digits) {
    let map = {
      2: ['a', 'b', 'c'],
      3: ['d', 'e', 'f'],
      4: ['g', 'h', 'i'],
      5: ['j', 'k', 'l'],
      6: ['m', 'n', 'o'],
      7: ['p', 'q', 'r', 's'],
      8: ['t', 'u', 'v'],
      9: ['w', 'x', 'y', 'z']
    };
    let ret = [];
    function recur(pre, digits) {
      if (digits.length === 0) {
        if (pre !== '') ret.push(pre);
        return;
      }
      let recDigit = digits[0];
      for (let i=0; i<map[recDigit].length; i++) {
        recur(pre+map[recDigit][i], digits.substr(1));
      }
    }
    recur('', digits);
    return ret;
};

/**
 * 优化思路
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinationsNormal = function(digits) {
  let map = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
  };
  let ret = [];
  for (let i=0; i<digits.length; i++) {
    let digit = digits[i];
    let temp = ret;
    ret = [];
    for (let j=0; j<map[digit].length; j++) {
      temp.forEach((item) => {
        ret.push(item+map[digit][j])
      })
    }
  }
  
  return ret;
};