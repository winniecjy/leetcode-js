/**
 * 第一思路
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insertNormal = function(intervals, newInterval) {
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

/**
 * 优化思路
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insertBetter = function(intervals, newInterval) {
  if (intervals.length === 0) {
    intervals.push(newInterval);
    return intervals;
  }
  let stInterval = -1
  let edInterval = -1
  let insertInterval = newInterval
  let directInsertIndex = -1
  for(let i=0; i<intervals.length; i++) {
    if (!(intervals[i][1] < insertInterval[0] || intervals[i][0] > insertInterval[1])) {
      if (stInterval === -1) edInterval = stInterval = i;
      else edInterval++;
      if (intervals[i][0] < insertInterval[0]) insertInterval[0] = intervals[i][0]
      if (intervals[i][1] > insertInterval[1]) insertInterval[1] = intervals[i][1]
    }
    if ((i===0 && newInterval[1]<intervals[i][0]) ||
       (newInterval[1]<intervals[i][0] && newInterval[0]>intervals[i-1][1])) {
      directInsertIndex = i;
      break;
    } 
    if (i===intervals.length-1 && newInterval[0]>intervals[i][1]) {
      directInsertIndex = i+1;
    }
  }
  if (stInterval !== -1) {
    intervals.splice(stInterval, edInterval-stInterval+1, insertInterval)
  } else {
    intervals.splice(directInsertIndex, 0, insertInterval)
  }

  return intervals;
};

/**
 * 高票思路
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insertVoted = function(intervals, newInterval) {
  let i=0;
  while(i<intervals.length && intervals[i][1]<newInterval[0]) i++;
  while(i<intervals.length && intervals[i][0]<=newInterval[1]) {
    newInterval = [Math.min(intervals[i][0], newInterval[0]), Math.max(intervals[i][1], newInterval[1])];
    intervals.splice(i,1);
  }
  intervals.splice(i,0,newInterval)
  
  return intervals;
};