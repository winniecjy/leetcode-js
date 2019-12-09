## 题解：[20191209]#0056 Merge Intervals
- **题干**   
输入一组区间，合并有交叠的区间并返回。    
示例：    
  ```
  // e.g.1
  Input: [[1,3],[2,6],[8,10],[15,18]]
  Output: [[1,6],[8,10],[15,18]]
  Explanation: [1,3]和[2,6]有交叠，合并区间为[1,6]
  // e.g.2
  Input: [[1,4],[4,5]]
  Output: [[1,5]]
  Explanation: 区间[1,4]和[4,5]可以看做是有重叠的
  ```

- **第一思路**   
对于两个区间[a,b]，[c,d]，可以进行合并的条件是`c>=b`，已知在区间中`b>=a`，则`c>=b>=a`。所以首先对区间进行排序，对于区间[a,b]/[c,d]比较规则如下：   
  - a<c，则[a,b]位于[c,d]之前
  - a>c，则[c,d]位于[a,b]之前
  - a==c, 则比较b,d，如果b<=d则[a,b]位于前，否则[c,d]位于前
  
  排序完成后对遍历一次数组，当`c>=b`时，则合并区间。时间复杂度O(nlogn)。   
  Runtime: 96 ms, faster than 13.36% of JavaScript online submissions for Merge Intervals.   
  Memory Usage: 38 MB, less than 7.69% of JavaScript online submissions for Merge Intervals.
- **优化思路**   
这个时间复杂度不太满意，主要耗时操作是在排序上，目前感觉排序还是需要的，所以考虑优化一下排序比较规则。当a==c时的状况是可以不处理的，因为在后续合并区间的时候还是需要比较b和d。       
Runtime: 76 ms, faster than 68.80% of JavaScript online submissions for Merge Intervals.   
Memory Usage: 37.7 MB, less than 15.38% of JavaScript online submissions for Merge Intervals.   

- **高票答案对比**   
高票思路：https://leetcode.com/problems/merge-intervals/discuss/21222/A-simple-Java-solution   
同第一思路，作者不在原数组操作，而是新建一个结果数组，最后合并时遍历区间数组，与结果数组中的最后一个区间比较，根据比较结果，修改最后区间的结束位置即可。             
Runtime: 60 ms, faster than 99.62% of JavaScript online submissions for Merge Intervals.   
Memory Usage: 37 MB, less than 76.92% of JavaScript online submissions for Merge Intervals.   