/**
 * 第一思路
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustifyNormal = function(words, maxWidth) {
  let res = [];
  for (let i=0; i<words.length;) {
    let len = 0, ed = i, content='';
    while(len <= maxWidth && ed<words.length) { 
      if (len>0) len++
      len += words[ed++].length
    }
    if (len>maxWidth && len-words[ed-1].length-1>0) len -= words[--ed].length+1
    let padNum = ed-i-1
    let space = maxWidth-len+padNum
    let pad = parseInt(space/padNum)
    if (padNum === 0 || ed === words.length) {
      content = words.slice(i,ed).join(' ')
      content += Array(maxWidth-content.length).fill(' ').join('')
      i = ed
    } else {
      for(; i<ed; i++) {
        content += words[i]
        if (space-padNum*pad>0) {
          content += Array(pad+1).fill(' ').join('')
          space--;
        } else if (i < ed-1){
          content += Array(pad).fill(' ').join('')
        }
      }
    }
    res.push(content)
  }
  return res
};

/**
 * 高票思路
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustifyVoted = function(words, maxWidth) {
  let res = [];
  let curr = [];
  let numOfLetters = 0;
  for (const word of words) {
    let w = word;
    // numOfLetters代表当前行的非空字符长度
    // w.length表示想加入的单词长度
    // curr.length代表最小空格位置
    if (numOfLetters+w.length+curr.length>maxWidth) {
       for (let i=0; i<maxWidth-numOfLetters; i++) {
         curr[i%(curr.length-1) || 0] += ' '
       }
      res.push(curr.join(''))
      curr = []
      numOfLetters = 0
    }
    curr.push(w)
    numOfLetters += w.length
  }
  res.push(curr.join(' ')+Array(maxWidth-numOfLetters-curr.length+1).fill(' ').join(''))
  return res
};