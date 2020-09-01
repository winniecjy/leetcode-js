/**
 * 第一思路
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  var tMapTpl = {};
  var stMap = {};
  for(let i=0; i<t.length; i++) {
    tMapTpl[t[i]] = -1;
  }
  for(let i=0; i<s.length; i++) {
    var c = s[i];
    if (tMapTpl[c]) {
      
    }
  }
};