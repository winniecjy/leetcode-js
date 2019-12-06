## 题解：[20191205]#0051 N-Queens
- **题干**   
实现pow(x, n)函数，计算x的n次方。
N皇后问题，在一个NxN的棋盘上放上N个皇后，使得皇后之间彼此不能互相攻击。   
![8皇后问题的一种解法](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/10/12/8-queens.png)   
给定一个整数 n，返回不同的解决方案个数。         
示例：    
  ```
  // e.g.1
  Input: 4
  Output: 2
  Explanation: 4皇后问题有两个不同的解决方案
  [
    [".Q..",  // 解法 1
      "...Q",
      "Q...",
      "..Q."],

    ["..Q.",  // 解法 2
      "Q...",
      "...Q",
      ".Q.."]
  ]
  ```
- **第一思路**   
皇后之间不互相攻击的条件是不能位于同行同列和同一对角线。可以通过回溯算法来确定每一个皇后的位置。回溯的过程中用一个数组board记录每一行的列数，(i,board[i])表示皇后位置。检查(row, col)是否合法，直接遍历board数组，当`board[i] === col || i+board[i] === row+col || i-board === row-col`，则该位置不合法。时间复杂度O(n^2)。        
对于行列冲突的情况比较好确认，对于对角线需要通过两个式子来确认：   
  ```
  对于坐标(i, j)有两条对角线
  1. 从右上角到左下角：当(i,j)与(m,n)位于同一对角线，则i+j=m+n
  2. 从左上角到右下角：当(i,j)与(m,n)位于同一对角线，则i-j=m-n
  ```  
  Runtime: 52 ms, faster than 97.42% of JavaScript online submissions for N-Queens II.   
  Memory Usage: 35.9 MB, less than 80.00% of JavaScript online submissions for N-Queens II.   
- **优化思路**   
无。   

- **高票答案对比**   
