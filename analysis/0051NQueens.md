## 题解：[20191205]#0051 N-Queens
- **题干**   
实现pow(x, n)函数，计算x的n次方。
N皇后问题，在一个NxN的棋盘上放上N个皇后，使得皇后之间彼此不能互相攻击。   
![8皇后问题的一种解法](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/10/12/8-queens.png)   
给定一个整数 n，返回所有不同的 n 皇后问题的解决方案。   
每一种解法包含一个明确的 n 皇后问题的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。      
示例：    
  ```
  // e.g.1
  Input: 4
  Output: [
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
皇后之间不互相攻击的条件是不能位于同行同列和同一对角线。可以通过回溯算法和哈希表来确定每一个皇后的位置。时间复杂度O(n^2)。        
对于行列冲突的情况比较好确认，对于对角线需要通过两个式子来确认：   
  ```
  对于坐标(i, j)有两条对角线
  1. 从右上角到左下角：当(i,j)与(m,n)位于同一对角线，则i+j=m+n
  2. 从左上角到右下角：当(i,j)与(m,n)位于同一对角线，则i-j=m-n
  ```  
  Runtime: 88 ms, faster than 27.89% of JavaScript online submissions for N-Queens.   
  Memory Usage: 38.4 MB, less than 100.00% of JavaScript online submissions for N-Queens.   
- **优化思路**   
无。   

- **高票答案对比**   
高票思路：https://leetcode.com/problems/n-queens/discuss/19808/Accepted-4ms-c%2B%2B-solution-use-backtracking-and-bitmask-easy-understand.   
高票思路同第一思路，但是可以看到时间复杂度还是比较有优化空间的。所以参考了一下讨论区JavaScript答案，虽然都是回溯的算法，运行时间短的方案去除了哈希表。回溯的过程中用一个数组board记录每一行的列数，(i,board[i])表示皇后位置。检查(row, col)是否合法，直接遍历board数组，当`board[i] === col || i+board[i] === row+col || i-board === row-col`，则该位置不合法。   
查了一些资料，有些博客提到了几个可能相关的JavaScript性能优化点：   
  - 访问直接量和局部变量的速度最快，相反，访问数组元素和对象成员相对较慢。        
  - 实现中使用了object来实现哈希表的效果，对object属性进行赋值时，需要查询当前对象及原型链上是否有相同属性。   

  具体是否关联待实际测试（也有可能是LeetCode judge的问题_(:з」∠)_先mark了！    
  Runtime: 60 ms, faster than 96.49% of JavaScript online submissions for N-Queens.   
  Memory Usage: 36.9 MB, less than 100.00% of JavaScript online submissions for N-Queens.   