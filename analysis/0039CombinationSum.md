## 题解：[20191115]#0039 Combination Sum
- **题干**   
给出一个不重复的数字集合和一个目标值，找出所有数字子集相加等于目标值。   
数字集合中的数字都可以被无限次重复。   
说明：   
所有数字（包括目标值）都是正整数。    
结果集必须不包含重复的集合。   
  示例：   
  ```
  // eg.1
  Input: candidates = [2,3,6,7], target = 7,
  Output:
  [
    [7],
    [2,2,3]
  ]

  // eg.2
  Input: candidates = [2,3,5], target = 8
  Output:
  [
    [2,2,2,2],
    [2,3,3],
    [3,5]
  ]
  ```
- **思路**   
回溯，由于数字集合中的所有数字都可以无限次使用，所以每次的候选数字都是全集合；另外数字集合中不重复，所以可以不处理结果重复，思路如下。时间复杂度O(target^2)。    
  ```
  1. 对candidate进行从小到大排序
  2. 从下标index（初始为0）开始遍历数组
  3. 当target > candidate[i]时，将candidate[i]放入可能的临时结果数组中，index=i，重复步骤2
  4. 当target === candidate[i]时，将candidate[i]放入可能的临时结果数组中，记录该数组，停止遍历
  ```
  Runtime: 80 ms, faster than 49.78% of JavaScript online submissions for Combination Sum.   
  Memory Usage: 37.3 MB, less than 26.67% of JavaScript online submissions for Combination Sum.   

- **优化思路**   



- **高票答案对比**   
最高票：https://leetcode.com/problems/valid-sudoku/discuss/15472/Short%2BSimple-Java-using-Strings   
