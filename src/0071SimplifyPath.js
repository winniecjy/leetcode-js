/**
 * 第一思路
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  let pathArr = path.split(/\/+/g)
  for (let i=0; i<pathArr.length; i++) {
    if (pathArr[i] === '.') {
      pathArr.splice(i,1)
      i--
    }
    else if (pathArr[i] === '..') {
      if (i>1) {
        pathArr.splice(i-1,2)
        i-=2
      }
      else {
        pathArr.splice(i,1)
        i--
      }
    }
  }
  path = pathArr.join('/')
  path = path.replace(/\/$/g, '')
  if(!/^\//g.test(path)) path = '/'+path
  return path
};


/**
 * 优化思路
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  let ret = path.split(/\/+/g).reduce((total, item) => {
    if (item === '.') return total
    else if (item === '..') return total.replace(/\/[^\/]*$/g, '')
    else return `${total}/${item}`
  })
  ret = ret.replace(/\/$/g, '')
  if(!/^\//g.test(ret)) ret = '/'+ret
  return ret
};


/**
 * 高票思路
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
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
      pop,
    };
  };
  let stack = Stack(), ret = '';
  path.split(/\/+/g).forEach((item) => {
    if(item === '..') stack.pop()
    else if(item !== '.' && item !== '') stack.push(item)
  })
  while(stack.top() !== null) {
    ret = '/'+stack.pop()+ret
  }
  return ret==''?'/':ret
};