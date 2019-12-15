## 题解：[20191218]#0063 Unique Paths II
- **题干**   
机器人位于一个m x n地图的左上角（在下图用'Start'标记）。   
机器人一次移动只能向下走或者向右走，机器人尝试到达地图右下角（在下图用'Finish'标记）。   
假如下图中加入一些障碍，求有多少种不同的路径。    
![示例地图](https://assets.leetcode.com/uploads/2018/10/22/robot_maze.png)    
障碍物和空白区域在网格地图中分别用1和0表示。    
  示例：    
  ```JavaScript
  // e.g.1
  Input:
  [
    [0,0,0],
    [0,1,0],
    [0,0,0]
  ]
  Output: 2
  Explanation:
  There is one obstacle in the middle of the 3x3 grid above.
  There are two ways to reach the bottom-right corner:
  1. Right -> Right -> Down -> Down
  2. Down -> Down -> Right -> Right
  ```

- **第一思路**   
0062立下的flag在0063中得以验证，加入障碍物之后，使用动态规划顺理成章，当前位置的路径数量 = 上方位置的路径数量 + 左侧位置的路径数量。如果当前位置为障碍物，则路径数量=0，时间复杂度O(n^2)，空间复杂度O(n^2)。   
Runtime: 52 ms, faster than 95.15% of JavaScript online submissions for Unique Paths II.   
Memory Usage: 35.6 MB, less than 100.00% of JavaScript online submissions for Unique Paths II.   
- **优化思路**   
无  
- **高票答案对比**   
高票思路：https://leetcode.com/problems/unique-paths-ii/discuss/23250/Short-JAVA-solution   
同第一思路。第一思路使用的是二维数组记录，高票答案作者使用的是一维数据。dp数组记录的是上一行的dp结果，所以当前行的数据dp[i] = dp[i] + dp[i-1] = 上方位置的数量 + 左侧位置的数量。时间复杂度O(n^2)，空间复杂度O(n)。    
Runtime: 56 ms, faster than 85.44% of JavaScript online submissions for Unique Paths II.   
Memory Usage: 35.1 MB, less than 100.00% of JavaScript online submissions for Unique Paths II.    