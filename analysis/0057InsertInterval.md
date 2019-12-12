## 题解：[20191212]#0057 Insert Interval
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
由于区间集合初始就是有序的，所以将新区间插入，从插入位置开始检查合并区间，时间复杂度O(n)。  
Runtime: 72 ms, faster than 39.86% of JavaScript online submissions for Insert Interval.   
Memory Usage: 37.3 MB, less than 25.00% of JavaScript online submissions for Insert Interval.   

- **优化思路**   
由于插入区间重合的情况较复杂，所以可以反向考虑一下，不重合的区间插入只有两种情况：   
  ```javascript
  // 情况1：位于之前，则区间的最大值都小于原区间最小值 d<a
  -----------------[a---b]--- 原区间集合
  ---[c------d]-------------- 待插入区间
  // 情况2：位于之后，则区间的最小值都大于原区间最大值 c>b
  --[a--b]------------------- 原区间集合
  -----------[c--d]---------- 待插入区间
  ```
  第一思路是将区间插入后进行合并检测，需要两次遍历。实际上通过一次遍历是可以找出所有会被影响的区间），记录被影响区间们和插入区间的区间最小值和区间最大值，一次遍历搞定。另外数组的插入和删除也是耗时操作，这个方案只需要一次插入/更新区间值即可。     
  Runtime: 56 ms, faster than 97.40% of JavaScript online submissions for Insert Interval.     
  Memory Usage: 36.7 MB, less than 87.50% of JavaScript online submissions for Insert Interval.     
- **高票答案对比**   
高票思路：https://leetcode.com/problems/insert-interval/discuss/21602/Short-and-straight-forward-Java-solution   
同优化思路，但是作者的思路更简洁。直接遍历找到第一个不符合情况1的位置，从此位置以情况2为停止条件进行区间合并。                 
Runtime: 60 ms, faster than 90.63% of JavaScript online submissions for Insert Interval.  
Memory Usage: 37.9 MB, less than 25.00% of JavaScript online submissions for Insert Interval.   