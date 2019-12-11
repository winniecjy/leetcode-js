## 题解：[20191209]#0056 Merge Intervals
- **题干**   
给出一组非重合的区间集合和新的区间，将新区间插入到集合中（当有重合时需要合并区间）。   
区间的初始顺序是按照区间开始时间排序的。   
示例：    
  ```
  // e.g.1
  Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
  Output: [[1,5],[6,9]]
  // e.g.2
  Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
  Output: [[1,2],[3,10],[12,16]]
  Explanation: 由于新区间[4,8]与区间[3,5]，[6,7]，[8,10]都有重复
  ```

- **第一思路**   
由于区间集合初始就是有序的，所以对其进行遍历与新区间[a,b]进行对比，找到第一个区间[c,d]，其中d<=a；然后继续遍历找到区间[e,f]，其中e>b；处理[c,d]和[e,f]之间的区间即可，时间复杂度O(n)。  

- **优化思路**   
这个时间复杂度不太满意，主要耗时操作是在排序上，目前感觉排序还是需要的，所以考虑优化一下排序比较规则。当a==c时的状况是可以不处理的，因为在后续合并区间的时候还是需要比较b和d。       
Runtime: 76 ms, faster than 68.80% of JavaScript online submissions for Merge Intervals.   
Memory Usage: 37.7 MB, less than 15.38% of JavaScript online submissions for Merge Intervals.   

- **高票答案对比**   
高票思路：https://leetcode.com/problems/merge-intervals/discuss/21222/A-simple-Java-solution   
同第一思路，作者不在原数组操作，而是新建一个结果数组，最后合并时遍历区间数组，与结果数组中的最后一个区间比较，根据比较结果，修改最后区间的结束位置即可。             
Runtime: 60 ms, faster than 99.62% of JavaScript online submissions for Merge Intervals.   
Memory Usage: 37 MB, less than 76.92% of JavaScript online submissions for Merge Intervals.   