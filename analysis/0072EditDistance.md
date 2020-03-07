## 题解：[20200306]#0072 Edit Distance
- **题干**   
输入两个单词word1和word2，找出将word1转换为word2的最小操作数。   
有以下三个操作可以执行：   
  1. 插入一个字符
  2. 删除一个字符
  3. 替换一个字符    
  
  示例：      
  
  ```JavaScript
  // e.g.1
  Input: word1 = "horse", word2 = "ros"
  Output: 3
  Explanation: 
  horse -> rorse (replace 'h' with 'r')
  rorse -> rose (remove 'r')
  rose -> ros (remove 'e')

  // e.g.2
  Input: word1 = "intention", word2 = "execution"
  Output: 5
  Explanation: 
  intention -> inention (remove 't')
  inention -> enention (replace 'i' with 'e')
  enention -> exention (replace 'n' with 'x')
  exention -> exection (replace 'n' with 'c')
  exection -> execution (insert 'u')
  ```

- **第一思路**   
  动态规划实现，每一次动态规划算法的思路其实都是模式化的。   
  - 首先考虑`dp[i][0]`和`dp[0][j]`的赋值情况：   
  对于`dp[i][0]`，是将word1转换为空字符串''，操作数等于word1长度，即`dp[i][0] = i`；   
  对于`dp[0][j]`，是将空字符串''转换为word2，操作数等于word2长度，即`dp[0][j] = j`；   
  - 考虑`dp[i][j]`情况（表示word1(0,...,i-1)转化到word2(0,...,j-1)需要几步）：   
  假如`word1[i-1] === word2[j-1]`，则不用操作，`dp[i][j] = dp[i-1][j-1]`；   
  假如`word1[i-1] !== word2[j-1]`，有三种操作可选：    
  插入：`dp[i][j] = dp[i][j-1] + 1`   
  删除：`dp[i][j] = dp[i-1][j] + 1`       
  替换：`dp[i][j] = dp[i-1][j-1] + 1`     
  取最小值为所求。   
  Runtime: 80 ms, faster than 85.59% of JavaScript online submissions for Edit Distance.   
  Memory Usage: 41.3 MB, less than 50.00% of JavaScript online submissions for Edit Distance.   

- **优化思路**   
  无。   
- **高票答案对比**   
  高票思路：https://leetcode.com/problems/edit-distance/discuss/25846/C%2B%2B-O(n)-space-DP   
  高票作者给出了空间优化方案，当更新`dp[i][j]`时，只需要`dp[i-1][j-1]`、`dp[i-1][j]`、`dp[i][j-1]`，节省dp数组空间，降低为一维。   

  Runtime: 80 ms, faster than 84.94% of JavaScript online submissions for Edit Distance.   
  Memory Usage: 36.5 MB, less than 100.00% of JavaScript online submissions for Edit Distance.   
