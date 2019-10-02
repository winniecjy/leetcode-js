/**
 * 第一思路
 * @param {string} s
 * @return {boolean}
 */
var isValidNormal = function(s) {
  // s = s.replace(/\[\]|\(\)|\{\}/g, '');
  // if (s === '') return true;
  // else if (s.length %2 === 1) return false;
  function Stack() {
    let arr = [];
    const push = (val) => {
      arr.push(val);
    }
    const pop = () => {
      arr = arr.slice(0, arr.length-1);
    }
    const top = () => {
      if (arr.length === 0) return null;
      else return arr[arr.length-1];
    }
    const isEmpty = () => {
      return arr.length === 0;
    }
    return {
      push,
      pop,
      top,
      isEmpty
    }
  }
  let stack = new Stack();
  let map = {
    '}': '{',
    ')': '(',
    ']': '['
  }
  for (let i=0; i<s.length; i++) {
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      stack.push(s[i]);
    } else if (map[s[i]] === stack.top()) {
      stack.pop();
    } else {
      return false;
    }
  }
  return stack.isEmpty();
};

/**
 * 优化思路
 * @param {string} s
 * @return {boolean}
 */
var isValidBetter = function(s) {
  while(s.replace(/\(\)|\[\]|\{\}/g, '') !== s) {
     s = s.replace(/\(\)|\[\]|\{\}/g, '');
  }
  return s === '';
};

/**
 * 高票思路
 * @param {string} s
 * @return {boolean}
 */
var isValidVoted = function(s) {
  var st = []
  for(var l of s) {
    let i;
    if ((i="({[]})".indexOf(l))>-1) {
      if (st[st.length-1]+i===5) {
        st.length--;
      }   
      else {
        st.push(i);
      }
    }
      
  }
      
  return st.length===0;
};