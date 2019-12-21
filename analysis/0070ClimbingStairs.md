## 题解：[20191225]#0070 Climbing Stairs
- **题干**   
爬楼梯问题，楼梯一共有n阶。   
每一层可以爬一阶或者两阶，一共有多少种不同的爬到顶部的方式？    
说明：输入的n必须是正整数。   
  示例：    
  ```JavaScript
  // e.g.1
  Input: 2
  Output: 2
  Explanation: There are two ways to climb to the top.
  1. 1 step + 1 step
  2. 2 steps

  // e.g.2
  Input: 3
  Output: 3
  Explanation: There are three ways to climb to the top.
  1. 1 step + 1 step + 1 step
  2. 1 step + 2 steps
  3. 2 steps + 1 step
  ```

- **第一思路**   
动态规划搞起，`dp[i] = dp[i-1]+dp[i-2]`，初始化`dp[0]=dp[1]=1`，时间复杂度O(n)。       
Runtime: 48 ms, faster than 90.20% of JavaScript online submissions for Climbing Stairs.   
Memory Usage: 33.8 MB, less than 80.00% of JavaScript online submissions for Climbing Stairs.   
- **优化思路**   
无  
- **高票答案对比**   
高票思路：https://leetcode.com/problems/climbing-stairs/discuss/25299/Basically-it's-a-fibonacci.      
同第一思路，作者表示本质上其实是个斐波那契数列，记录当前位置前两位即可。            
Runtime: 48 ms, faster than 90.20% of JavaScript online submissions for Climbing Stairs.   
Memory Usage: 33.7 MB, less than 92.00% of JavaScript online submissions for Climbing Stairs.    