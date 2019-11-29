## 题解：[20191127]#0045 Jump Game II
- **题干**   
给出一个非重复的整数集合，返回所有可能的排列。    
示例：   
  ```
  Input: [1,2,3]
  Output:
  [
    [1,2,3],
    [1,3,2],
    [2,1,3],
    [2,3,1],
    [3,1,2],
    [3,2,1]
  ]
  ```

- **思路**   
全排列问题，可以通过递归回溯实现。   
Runtime: 68 ms, faster than 68.91% of JavaScript online submissions for Permutations.   
Memory Usage: 37.6 MB, less than 8.00% of JavaScript online submissions for Permutations.   

- **优化思路**   
无。全排列的思路比较经典了，没有想到什么优化的地方。目前性能瓶颈应该是在内置函数的使用方案上了。            

- **高票答案对比**   
高票思路：https://leetcode.com/problems/permutations/discuss/431747/Javasctipt-56-ms-faster-than-99.05          

Runtime: 56 ms, faster than 98.97% of JavaScript online submissions for Permutations.   
Memory Usage: 36.2 MB, less than 84.00% of JavaScript online submissions for Permutations.   
