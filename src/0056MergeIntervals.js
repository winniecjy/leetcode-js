/**
 * 第一思路
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  function compareFn(interval1, interval2) {
    if (interval1[0]<interval2[0]) return -1;
    else if (interval1[0]>interval2[0]) return 1;
    else {
      if (interval1[1]<interval2[1]) return -1;
      else return 1;
    }
  }
  intervals.sort(compareFn);
  for(let i=1; i<intervals.length; ) {
    if (intervals[i][0] <=intervals[i-1][1]) {
      const temp = [intervals[i-1][0], intervals[i][1]>intervals[i-1][1]?intervals[i][1]:intervals[i-1][1]];
      intervals.splice(i-1,2,temp);
    } else i++;
  }
  
  return intervals;
};