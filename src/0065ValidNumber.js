/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
  const str = s.trim()
  let reg = /^[+|-]?((\d+(\.\d*)?)|(\.\d+))(e[+|-]?\d+)?$/g
  
  return reg.test(str)
};
