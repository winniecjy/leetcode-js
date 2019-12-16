## 题解：[20191219]#0064 Minimum Path Sum
- **题干**   
输入一个只包含非负数字的m x n数字，找到从左上角到右下角的最短路径和。    
说明：每一次移动都只能向下或者向右。    
  示例：    
  ```JavaScript
  // e.g.1
  Input:
  [
    [1,3,1],
    [1,5,1],
    [4,2,1]
  ]
  Output: 7
  Explanation: Because the path 1→3→1→1→1 minimizes the sum.
  ```

- **第一思路**   
动态规划，当前位置的最短路径 = MIN (上方的最短路径, 左侧的最短路径) + 当前位置消费。时间复杂度O(n^2)，空间复杂度O(n^2)。   
Runtime: 52 ms, faster than 95.15% of JavaScript online submissions for Unique Paths II.   
Memory Usage: 35.6 MB, less than 100.00% of JavaScript online submissions for Unique Paths II.   
- **优化思路**   
无  
- **高票答案对比**   
高票思路：https://leetcode.com/problems/unique-paths-ii/discuss/23250/Short-JAVA-solution   
同第一思路。第一思路使用的是二维数组记录，高票答案作者使用的是一维数据。dp数组记录的是上一行的dp结果，所以当前行的数据dp[i] = dp[i] + dp[i-1] = 上方位置的数量 + 左侧位置的数量。时间复杂度O(n^2)，空间复杂度O(n)。    
Runtime: 56 ms, faster than 85.44% of JavaScript online submissions for Unique Paths II.   
Memory Usage: 35.1 MB, less than 100.00% of JavaScript online submissions for Unique Paths II.    