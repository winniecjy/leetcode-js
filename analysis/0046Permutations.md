## 题解：[20191129]#0046 Permutations
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

- **第一思路**   
全排列问题，可以通过递归回溯实现。   
Runtime: 68 ms, faster than 68.91% of JavaScript online submissions for Permutations.   
Memory Usage: 37.6 MB, less than 8.00% of JavaScript online submissions for Permutations.   

- **优化思路**   
无。全排列的思路比较经典了，没有想到什么优化的地方，区别是在于递归的具体实现方案。            

- **高票答案对比**   
高票思路：https://leetcode.com/problems/permutations/discuss/18239/A-general-approach-to-backtracking-questions-in-Java-(Subsets-Permutations-Combination-Sum-Palindrome-Partioning)              
参考了一下高票思路和JavaScript区代码。总体其实都是递归。   
高票作者的思路是从未包含的候选数组中，按顺序分别插入全排列结果中。对于当前排列是否包含候选者，通过indexOf来查找确认。    
第一思路是循环固定全排列的第一个元素，剩下的数据再去进行全排列，拼接固定元素和全排列。   
相比较于高票思路，第一思路的代码更简洁，但是递归重复计算部分会更多。    
Runtime: 56 ms, faster than 98.97% of JavaScript online submissions for Permutations.   
Memory Usage: 36.2 MB, less than 84.00% of JavaScript online submissions for Permutations.   
