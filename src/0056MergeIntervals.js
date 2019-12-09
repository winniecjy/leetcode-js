/**
 * 第一思路
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var mergeNormal = function (intervals) {
  function compareFn(interval1, interval2) {
    if (interval1[0] < interval2[0]) return -1;
    else if (interval1[0] > interval2[0]) return 1;
    else {
      if (interval1[1] < interval2[1]) return 1;
      else return -1;
    }
  }
  intervals.sort(compareFn);
  for (let i = 1; i < intervals.length;) {
    if (intervals[i][0] <= intervals[i - 1][1]) {
      const temp = [intervals[i - 1][0], intervals[i][1] > intervals[i - 1][1] ? intervals[i][1] : intervals[i - 1][1]];
      intervals.splice(i - 1, 2, temp);
    } else i++;
  }

  return intervals;
};

/**
 * 优化思路
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var mergeBetter = function (intervals) {
  if (intervals.length <= 1) return intervals;
  intervals.sort((a, b) => a[0] - b[0]);
  for (let i = 1; i < intervals.length;) {
    if (intervals[i][0] <= intervals[i - 1][1]) {
      intervals[i - 1][1] = Math.max(intervals[i][1], intervals[i - 1][1]);
      intervals.splice(i, 1);
    } else i++;
  }

  return intervals;
};

/**
 * 高票思路
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var mergeVoted = function (intervals) {
  if (intervals.length <= 1) return intervals;
  intervals.sort((a, b) => a[0] - b[0]);
  let result = [];
  let newInterval = intervals[0];
  result.push(newInterval);
  for (const interval of intervals) {
    if (interval[0] <= newInterval[1]) {
      newInterval[1] = Math.max(newInterval[1], interval[1]);
    } else {
      newInterval = interval;
      result.push(newInterval);
    }
  }

  return result;
};