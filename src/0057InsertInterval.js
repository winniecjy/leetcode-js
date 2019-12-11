/**
 * 第一思路
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  if (intervals.length === 0) {
    intervals.push(newInterval);
    return intervals;
  }
  let stIndex = -1;
  for(let i=0; i<intervals.length; i++) {
    if (intervals[i][0] >= newInterval[0] && stIndex===-1) {
      intervals.splice(i, 0, newInterval);
      stIndex = i;
      break;
    }
  }
  if (stIndex === -1) {
    intervals.push(newInterval);
    stIndex = intervals.length-2;
  }
  stIndex = stIndex===0?1:stIndex;
  for(let i=stIndex;i<intervals.length;) {
    if (intervals[i-1][1]>=intervals[i][0]) {
      intervals[i - 1][1] = Math.max(intervals[i][1], intervals[i - 1][1]);
      intervals.splice(i, 1);
    } else if(i !== stIndex) {
      break;
    } else {
      i++;
    }
  }

  return intervals;
};