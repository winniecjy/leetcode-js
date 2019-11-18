## 题解：[20191115]#0040 Combination Sum II
- **题干**   
给出一个数字集合和一个目标值，找出所有数字子集相加等于目标值。   
数字集合中的候选数字可能重复，数字集合中的数字在一个结果集中只能使用一次。   
说明：   
所有数字（包括目标值）都是正整数。    
结果集必须不包含重复的集合。   
  示例：   
  ```
  // eg.1
  Input: candidates = [10,1,2,7,6,1,5], target = 8
  Output:
  [
    [1, 7],
    [1, 2, 5],
    [2, 6],
    [1, 1, 6]
  ]

  // eg.2
  Input: candidates = [2,5,2,1,2], target = 5
  Output:
  [
    [1,2,2],
    [5]
  ]
  ```
- **思路**   
这个题目和0039的思路是一致的，只需要另外处理候选数字在结果集不可重复和结果去重的问题。    
回溯思路如下：    
  ```
  1. 对candidate进行从小到大排序
  2. 从下标index（初始为0）开始遍历数组
  3. 当target > candidate[i]时，将candidate[i]放入可能的临时结果数组中，index=i+1，重复步骤2
  4. 当target === candidate[i]时，将candidate[i]放入可能的临时结果数组中，检查该组合是否已存在（通过哈希表），若不存在记录该数组，停止遍历
  ```
  Runtime: 76 ms, faster than 55.96% of JavaScript online submissions for Combination Sum II.   
  Memory Usage: 37.7 MB, less than 20.00% of JavaScript online submissions for Combination Sum II.   
     
  DP思路：计算结果为1~target的结果集合，对于目标为t的结果集合，可以通过前置的结果计算出。      
  Runtime: 64 ms, faster than 95.94% of JavaScript online submissions for Combination Sum II.   
  Memory Usage: 38.1 MB, less than 20.00% of JavaScript online submissions for Combination Sum II.   
- **优化思路**   
无。   

- **高票答案对比**   
最高票：https://leetcode.com/problems/combination-sum-ii/discuss/16861/Java-solution-using-dfs-easy-understand    
最高票同第一思路。   
