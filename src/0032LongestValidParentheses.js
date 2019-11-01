/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  var checkValid = function(s, l, r) {
    let valid = 0;
    for(let j=l; j<=r; j++) {
      if(s[j] === '(') valid--;
      else valid++;
      if(valid > 0) return false;
    }
    console.log(valid)
    return valid===0;
  }
  let depth = [];
  let lastDepth = 0;
  let left = {};
  let ret = 0;
  for(let i=0; i<s.length; i++) {
    if (s[i] === ')') {
      depth.push(++lastDepth);
      if(lastDepth > 0) left = {};
      if(left[lastDepth-1] !== undefined) {
        if (ret >= i-left[lastDepth-1]+1 && checkValid(s, left[lastDepth-1], i)) {
          ret = i-left[lastDepth-1]+1;
        }
      }
    } else {
      depth.push(--lastDepth);
      if(left[lastDepth] === undefined) {
        left[lastDepth] = i;
      }
    }
  }
  console.log(depth);
  return ret;
};