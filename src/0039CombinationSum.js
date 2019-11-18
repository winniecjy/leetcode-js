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