## 题解：[20191212]#0062 Unique Paths
- **题干**   
机器人位于一个m x n地图的左上角（在下图用'Start'标记）。   
机器人一次移动只能向下走或者向右走，机器人尝试到达地图右下角（在下图用'Finish'标记）。   
有多少种不同的路径？   
![示例地图](https://assets.leetcode.com/uploads/2018/10/22/robot_maze.png)    
  示例：    
  ```javascript
  // e.g.1
  Input: m = 3, n = 2
  Output: 3
  Explanation:
  From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
  1. Right -> Right -> Down
  2. Right -> Down -> Right
  3. Down -> Right -> Right
  // e.g.2
  Input: m = 7, n = 3
  Output: 28
  ```

- **第一思路**   
一个比较清晰的动态规划题目，当前位置的路径数量 = 上方位置的路径数量 + 左侧位置的路径数量。时间复杂度O(n^2)。   
Runtime: 64 ms, faster than 24.39% of JavaScript online submissions for Unique Paths.   
Memory Usage: 34 MB, less than 54.55% of JavaScript online submissions for Unique Paths.   

- **优化思路**   
这道题目用dp感觉有些大材小用了，因为没有什么状态判断（比如障碍物之类的），一画图发现是杨辉三角（也就是帕斯卡矩阵）。对于第m行第n列的数字，则是通过m-1个位置来存储n-1的向下走的动作，转换成了一个排列组合问题。C(n-1, n+m-2) = (n+m-2)!/((n-1)!(m-1)!)为所求。       
Runtime: 48 ms, faster than 94.86% of JavaScript online submissions for Unique Paths.    
Memory Usage: 33.7 MB, less than 90.91% of JavaScript online submissions for Unique Paths.    
 
- **高票答案对比**   
高票思路：https://leetcode.com/problems/unique-paths/discuss/22954/C%2B%2B-DP     