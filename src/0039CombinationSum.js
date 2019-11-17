/**
 * 第一思路
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSumBetter = function(candidates, target) {
  candidates.sort((a, b) => a - b);
  let ret = [];
  function recursion(target, preArr, index) {
    if (target < candidates[index]) return;
    for (let i=index; i<candidates.length && target>=candidates[i]; i++) {
      preArr.push(candidates[i]);
      if (target === candidates[i]) ret.push([...preArr]);
      else {
        recursion(target-candidates[i], [...preArr], i);
      }
      preArr.pop();
    }
  }
  
  recursion(target, [], 0);
  return ret;
};

/**
 * 优化思路
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSumBetter = function(candidates, target) {
  candidates.sort((a, b) => a - b);
  let ret = [];
  function recursion(target, preArr, index) {
    if (target === 0) ret.push(preArr);
    if (target < candidates[index]) return;
    for (let i=index; i<candidates.length && target>=candidates[i]; i++) {
      preArr.push(candidates[i]);
      recursion(target-candidates[i], [...preArr], i);
      preArr.pop();
    }
  }
  
  recursion(target, [], 0);
  return ret;
};


var combinationSumVoted = function(candidates, target) {
  candidates.sort((a, b) => a - b);
  let dp = [];
  // 1 ~ target的结果集合
  for (let t=0; t<=target; t++) {
    let combList = [];
    for (let j=0; j<candidates.length && candidates[j]<=t; j++) {
      if (t === candidates[j]) combList.push([candidates[j]]);
      else if (i-candidates[j]-1 >= 0) {
        for (const list in dp[i-candidates[j]]) {
          if (candidates[j] <= list[0]) {
            let cl = [candidates[j], ...list];
            newList.push(cl);
          }
        }
      }
    }
    dp[t] = newList;
  }

  return dp[target];
};