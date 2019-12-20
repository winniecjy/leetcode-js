/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  if (digits.length === 0) return [];
  digits[digits.length-1] += 1;
  for(let i=digits.length-1; i>0; i--) {
    digits[i-1] += parseInt(digits[i]/10);
    digits[i] %= 10;
  }
  if (digits[0]>9) {
    digits.unshift(1)
    digits[1] %= 10
  }
  return digits
};