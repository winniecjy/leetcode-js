/**
 * 第一思路
 * @param {string} s
 * @return {number}
 */
var longestValidParenthesesNormal = function (s) {
  let ret = 0;
  let prev = 0;

  for (let i=0; i<s.length; i++) {
    prev = 0;
    for (let j=i; j<s.length; j++) {
//       console.log(i, j, prev)
      if(prev === false) break;

      if(s[j] === '(') {
        prev -= 1;
      } else {
        prev = prev<0 ? prev+1:false;
      }
      if(prev === 0 && ret < j-i+1) ret = j-i+1;
    }
  }

  return ret;
};

/**
 * 优化思路
 * @param {string} s
 * @return {number}
 */
var longestValidParenthesesBetter = function(s) {
  const Stack = () => {
    let arr = [];
    let len = 0;
    const top = () => {
      return len > 0 ? arr[len - 1] : null;
    };
    const push = ele => {
      arr[len++] = ele;
    };
    const pop = () => {
      if(len>0) {
        len--;
        return arr[len];
      }
      return null;
    };
    return {
      top,
      push,
      pop
    };
  };

  let stack = Stack();
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push({
        isLeft: true,
        index: i
      });
    } else {
      let top = stack.top();
      if (top && top.isLeft) stack.pop();
      else {
        stack.push({
          isLeft: false,
          index: i
        });
      }
    }
  }

  let lastIndex = s.length;
  let ret = 0;
  while (stack.top() !== null) {
    let top = stack.pop();
    if (lastIndex - top.index - 1 > ret) ret = lastIndex - top.index - 1;
    lastIndex = top.index;
  }

  return ret > lastIndex ? ret : lastIndex;
};


/**
 * 高票思路
 * @param {string} s
 * @return {number}
 */
var longestValidParenthesesVoted = function(s) {
  let v = []; v[0] = 0;
  let open = 0;
  let ret = 0;
  for (let i=1; i<=s.length; i++) {
    if(s[i-1] === '(') {
      v[i] = 0;
      open++;
    }
    else if(open > 0) {
      v[i] = v[i-1] + 2;
      v[i] += v[i-v[i]];
      open--;
      if(v[i] > ret) ret = v[i];
    } else {
      v[i] = 0;
    }
  }
  return ret;
};