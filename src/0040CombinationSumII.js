/**
 * 第一思路
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2NormalRecursion = function(candidates, target) {
  candidates.sort((a, b) => a - b);
  let ret = [], uniqueMap = {};
//   console.log(candidates)
  function recursion(target, preArr, index) {
    if (target === 0) {
      if (!uniqueMap[preArr.join('-')]) {
        ret.push(preArr);
        uniqueMap[preArr.join('-')] = true;
      }
      return;
    }
    if (target < candidates[index]) return;
    for (let i=index; i<candidates.length && target>=candidates[i]; i++) {
      preArr.push(candidates[i]);
      recursion(target-candidates[i], [...preArr], i+1);
      preArr.pop();
    }
  }
  recursion(target, [], 0);
  return ret;
};
var combinationSum2NormalDP = function(candidates, target) {
  candidates.sort((a, b) => a - b);
  let dp = [];
  let numMap = {};
  for(let i=0; i<candidates.length; i++) {
    numMap[candidates[i]] = numMap[candidates[i]] ? numMap[candidates[i]]+1:1;
  }
  // 1 ~ target的结果集合
  for (let t=0; t<=target; t++) {
    // 和为t的结果结合
    let combList = [];
    for (let j=0; j<candidates.length && candidates[j]<=t; j++) {
      // 候选数字本身等于t
      if (t === candidates[j] && candidates[j-1] !== candidates[j]) combList.push([candidates[j]]);
      // 通过前结果集合组合得到当前结果
      else if (t-candidates[j]-1 >= 0 && (candidates[j] !== candidates[j-1])) {
        for (const list of dp[t-candidates[j]]) {
          if (candidates[j] < list[0]) {
            let cl = [candidates[j], ...list];
            combList.push(cl);
          } else if (candidates[j] === list[0]) {
            let sameNum = 0;
            for (let k=0; k<list.length && list[k] === candidates[j]; k++) sameNum++;
            if (numMap[candidates[j]] > sameNum) {
              let cl = [candidates[j], ...list];
              combList.push(cl);
            }
          } 
        }
      }
    }
    dp[t] = combList;
  }

  return dp[target];
};


var combinationSumVoted = function(candidates, target) {
  candidates.sort((a, b) => a - b);
  let dp = [];
  // 1 ~ target的结果集合
  for (let t=0; t<=target; t++) {
    // 和为t的结果结合
    let combList = [];
    for (let j=0; j<candidates.length && candidates[j]<=t; j++) {
      // 候选数字本身等于t
      if (t === candidates[j]) combList.push([candidates[j]]);
      // 通过前结果集合组合得到当前结果
      else if (t-candidates[j]-1 >= 0) {
        for (const list of dp[t-candidates[j]]) {
          if (candidates[j] <= list[0]) {
            let cl = [candidates[j], ...list];
            combList.push(cl);
          }
        }
      }
    }
    dp[t] = combList;
  }

  return dp[target];
};