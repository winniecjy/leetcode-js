## 题解：[20191224]#0069 Sqrt(x)
- **题干**   
实现sqrt(x)。   
计算返回x的平方根，x保证为非负整数。   
返回类型必须为整数，对于非整数的结果，只截取整数部分返回。    
  示例：    
  ```JavaScript
  // e.g.1
  Input: 4
  Output: 2

  // e.g.2
  Input: 8
  Output: 2
  Explanation: The square root of 8 is 2.82842..., and since 
              the decimal part is truncated, 2 is returned.
  ```

- **第一思路**   
二分查找，以[1, x]为初始区间，时间复杂度O(logx)。   
Runtime: 68 ms, faster than 89.09% of JavaScript online submissions for Sqrt(x).   
Memory Usage: 35.8 MB, less than 38.89% of JavaScript online submissions for Sqrt(x).   
- **优化思路**   
无  
- **高票答案对比**   
高票思路：https://leetcode.com/problems/sqrtx/discuss/25047/A-Binary-Search-Solution   
同高票思路，作者给出了非递归方案。   
Runtime: 60 ms, faster than 98.89% of JavaScript online submissions for Sqrt(x).   
Memory Usage: 35.7 MB, less than 58.33% of JavaScript online submissions for Sqrt(x).   