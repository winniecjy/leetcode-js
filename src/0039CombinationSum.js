/**
 * 第一思路
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  function sortNumber(a,b) {
    return a - b
  }
  candidates.sort(sortNumber);
  const len = candidates.length;
  let ret = [];
  function recursion(candidates_sorted, target, preArr, index) {
    if (target < candidates_sorted[index]) return;
    for (let i=index; i<len && target>=candidates_sorted[i]; i++) {
      if (target === candidates_sorted[i]) ret.push(preArr.concat([candidates_sorted[i]]));
      else {
        recursion(candidates_sorted, target-candidates_sorted[i], preArr.concat([candidates_sorted[i]]), i);
      }
    }
  }
  recursion(candidates, target, [], 0);
  return ret;
};