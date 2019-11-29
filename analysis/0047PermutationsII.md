## 题解：[20191130]#0047 Permutations II
- **题干**   
给出一个整数集合，可能包含重复数字，返回所有可能的排列。      
示例：   
  ```
  Input: [1,1,2]
  Output:
  [
    [1,1,2],
    [1,2,1],
    [2,1,1]
  ]
  ```

- **第一思路**   
全排列问题，思路同0046第一思路回溯，循环固定全排列的第一个元素，剩下的数据再去进行全排列，拼接固定元素和全排列。固定一个元素时，对于重复元素可以跳过。   
Runtime: 76 ms, faster than 72.77% of JavaScript online submissions for Permutations II.   
Memory Usage: 41.7 MB, less than 11.11% of JavaScript online submissions for Permutations II.   

- **优化思路**   
同0046高票思路，从未包含的候选数组中，按顺序分别插入全排列结果中。对于当前排列是否包含候选者，通过map来查找确认。同样同一位置按顺序插入时，需要跳过重复元素。   
Runtime: 68 ms, faster than 95.54% of JavaScript online submissions for Permutations II.   
Memory Usage: 37.6 MB, less than 22.22% of JavaScript online submissions for Permutations II.   

- **高票答案对比**   
高票思路：https://leetcode.com/problems/permutations-ii/discuss/18594/Really-easy-Java-solution-much-easier-than-the-solutions-with-very-high-vote   
同优化思路，作者的代码简练在于对重复元素过滤的方法，首先对数组进行排序，通过map记录已经使用的候选元素，回溯过程中需要两个过滤条件：   
  - 当前排列中已经插入该元素：map[i] === true      
  - 当前元素与前一个元素重复，而且非第一元素（即该元素第一次出现）排列构造过程：i>0 && nums[i-1]==nums[i] && !map[i-1]   

  Runtime: 64 ms, faster than 99.01% of JavaScript online submissions for Permutations II.   
  Memory Usage: 37.4 MB, less than 55.56% of JavaScript online submissions for Permutations II.    
