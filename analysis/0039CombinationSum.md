## 题解：[20191117]#0039 Combination Sum
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
回溯，由于数字集合中的所有数字都可以无限次使用，所以每次的候选数字都是全集合；另外数字集合中不重复，所以可以不处理结果重复，思路如下。时间复杂度O(2^n)。    
  ```
  1. 对candidate进行从小到大排序
  2. 从下标index（初始为0）开始遍历数组
  3. 当target > candidate[i]时，将candidate[i]放入可能的临时结果数组中，index=i，重复步骤2
  4. 当target === candidate[i]时，将candidate[i]放入可能的临时结果数组中，记录该数组，停止遍历
  ```
  Runtime: 80 ms, faster than 49.78% of JavaScript online submissions for Combination Sum.   
  Memory Usage: 37.3 MB, less than 26.67% of JavaScript online submissions for Combination Sum.   

- **优化思路**   
大体思路没有什么优化方向，可以考虑优化细节。比如递归的结束判断，如果放在循环中，每次循环中都需要判断，所以将其放在循环外，当到达条件时直接放入结果集中。   
  ```
  // 优化前
  function recursion(target, preArr, index) {
    for (let i=index; i<candidates.length; i++) {  
      if (target === candidates[i]) ret.push([...preArr]);
      ...
    }
  }
  // 优化后
  function recursion(target, preArr, index) {
    if (target === 0) ret.push(preArr);
    for (let i=index; i<candidates.length; i++) {
      ...
    }
  }
  ```
  Runtime: 72 ms, faster than 81.95% of JavaScript online submissions for Combination Sum.
  Memory Usage: 37.1 MB, less than 33.33% of JavaScript online submissions for Combination Sum.


- **高票答案对比**   
最高票：https://leetcode.com/problems/combination-sum/discuss/16509/Iterative-Java-DP-solution   
最高票同优化思路，讨论区给出了DP的方案，一般来说DP总是优于递归的，DP通过记录前阶段的结果，来避免重复的计算。   
Runtime: 68 ms, faster than 92.21% of JavaScript online submissions for Combination Sum.   
Memory Usage: 37.7 MB, less than 13.33% of JavaScript online submissions for Combination Sum.   
