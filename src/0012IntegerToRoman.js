/**
 * 第一思路
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  let digitMap = [
    ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
    ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
    ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
    ['', 'M', 'MM', 'MMM'],
  ];
  let ret = '';
  for (let i=0; i<4 && num>0; i++) {
    ret = digitMap[i][num%10] + ret;
    num = parseInt(num/10);
  }
  return ret;
};