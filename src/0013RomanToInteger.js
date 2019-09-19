/**
 * 第一思路
 * @param {string} s
 * @return {number}
 */
var romanToIntNormal = function(s) {
  let digitMap = [
    {
      roman: 'IV',
      integer: 4,
    },
    {
      roman: 'IX',
      integer: 9,
    },
    {
      roman: 'XL',
      integer: 40,
    },
    {
      roman: 'XC',
      integer: 90,
    },
    {
      roman: 'CD',
      integer: 400,
    },
    {
      roman: 'CM',
      integer: 900,
    },
    {
      roman: 'I',
      integer: 1,
    },
    {
      roman: 'V',
      integer: 5,
    },
    {
      roman: 'X',
      integer: 10,
    },
    {
      roman: 'L',
      integer: 50,
    },
    {
      roman: 'C',
      integer: 100,
    },
    {
      roman: 'D',
      integer: 500,
    },
    {
      roman: 'M',
      integer: 1000,
    },
  ];

  let ret = 0;
  for (let i=0; i<digitMap.length && s!==''; i++) {
    while(s.search(digitMap[i].roman) !== -1) {
      ret += digitMap[i].integer;
      s = s.substr(0, s.search(digitMap[i].roman)) + s.substr(s.search(digitMap[i].roman) + digitMap[i].roman.length);
    }
  }

  return ret;
};

/**
 * 优化思路
 * @param {string} s
 * @return {number}
 */
var romanToIntBetter = function(s) {
  let ret = 0;
  for (let i=0; i<s.length; i++) {
    switch (s[i]) {
      case 'I':
        ret += 1;
        break;
      case 'V':
        ret += (i>0 && s[i-1]==='I') ? 3 : 5;
        break;
      case 'X':
        ret += (i>0 && s[i-1]==='I') ? 8 : 10;
        break;
      case 'L':
        ret += (i>0 && s[i-1]==='X') ? 30 : 50;
        break;
      case 'C':
        ret += (i>0 && s[i-1]==='X') ? 80 : 100;
        break;
      case 'D':
        ret += (i>0 && s[i-1]==='C') ? 300 : 500;
        break;
      case 'M':
        ret += (i>0 && s[i-1]==='C') ? 800 : 1000;
        break;
      default:
        break;
    }
  }
  return ret;
};

/**
 * 高票思路
 * @param {string} s
 * @return {number}
 */
var romanToIntBetter = function(s) {
  let ret = 0;
  for (let i=s.length-1; i>=0; i--) {
    switch (s[i]) {
      case 'I':
        ret += ret >= 5? -1 : 1;
        break;
      case 'V':
        ret += 5;
        break;
      case 'X':
        ret += ret >= 50? -10 : 10;
        break;
      case 'L':
        ret += 50;
        break;
      case 'C':
        ret += ret >= 500? -100 : 100;
        break;
      case 'D':
        ret += 500;
        break;
      case 'M':
        ret += 1000;
        break;
      default:
        break;
    }
  }
  return ret;
};