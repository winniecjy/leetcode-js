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
  Runtime: 104 ms, faster than 8.44% of JavaScript online submissions for Merge Intervals.   
  Memory Usage: 38.2 MB, less than 7.69% of JavaScript online submissions for Merge Intervals.   
- **优化思路**   
这个时间复杂度显然有较大优化空间，考虑是否可以不对区间进行排序。       


- **高票答案对比**   
高票思路：https://leetcode.com/problems/jump-game/discuss/20917/Linear-and-simple-solution-in-C%2B%2B    
遍历数组，比较当前位置可到达的最远距离和已知的可达到最远距离，记录目前位置可到达的最远距离。如遍历到下标大于可到达的最远距离，则退出遍历。           
Runtime: 56 ms, faster than 83.07% of JavaScript online submissions for Jump Game.   
Memory Usage: 35.6 MB, less than 40.00% of JavaScript online submissions for Jump Game.   