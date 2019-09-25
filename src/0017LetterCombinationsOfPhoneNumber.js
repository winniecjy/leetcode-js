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
var letterCombinationsBetter = function(digits) {
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

/**
 * 高票思路
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinationsVoted = function(digits) {
  if (digits.length === 0) return [];
  let map = ['0', '1', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
  function Queue() {
    let arr = [];
    let add = (str) => {
      arr.push(str);
    }
    let pop = () => {
      if (arr.length === 0) return null;
      let temp = arr[0];
      arr = arr.slice(1);
      return temp;
    }
    let front = () => {
      if (arr.length === 0) return null;
      return arr[0];
    }
    let getArr = () => {
      return arr;
    }

    return {
      add,
      front,
      pop,
      getArr,
    }
  }
  let q = new Queue();
  q.add('');
  while(q.front().length !== digits.length) {
    let front = q.pop();
    let digit = digits[front.length];
    for (let i=0; i<map[digit].length; i++) {
      q.add(front+map[digit][i]);
    }
  }

  return q.getArr();
};

/**
 * js高票思路
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinationsVotedJS = function(digits) {
  if (digits.length === 0) return [];
  let map = ['0', '1', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
  let mapped = [];
  for (let i=0; i<digits.length; i++) {
    mapped.push(map[digits[i]].split(''));
  }
  return mapped.reduce((prev, curr, index) => {
    let arr = [];
    prev.forEach((e) => {
      curr.forEach((v) => {
        arr.push(e+v); 
      })
    })
    return arr;
  })
};