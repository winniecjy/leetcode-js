## 题解：[20191111]#0037 Sudoku Solver
- **题干**   
数独题求解。一个数独的解需要满足以下条件：    
  - 每一行必须包含不重复的数字1-9   
  - 每一列必须包含不重复的数字1-9   
  - 9个3x3的小方格必须包含不重复的数字1-9   

  空单元格用`.`表示：   
  ![一个的数独题目](https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Sudoku-by-L2G-20050714.svg/250px-Sudoku-by-L2G-20050714.svg.png)    
  ![数独题的解](https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Sudoku-by-L2G-20050714_solution.svg/250px-Sudoku-by-L2G-20050714_solution.svg.png)    

  说明：   
  - 给出的数独面板只包含数字1-9和字符'.'。   
  - 可以假设数独题目都拥有唯一有效解。   
  - 给出的数独面板大小永远为9x9。   
- **思路**   
哈希表+递归的思路，每一个单元格都必须在行/列/九宫格中合法，从左到右从上到下穷举。   
Runtime: 192 ms, faster than 11.55% of JavaScript online submissions for Sudoku Solver.   
Memory Usage: 39.3 MB, less than 100.00% of JavaScript online submissions for Sudoku Solver.   

- **优化思路**   
除了递归目前没有其他思路，所以考虑是否可以去除哈希表，减少哈希表初始化和赋值，可以去除一次遍历数组。    
Runtime: 60 ms, faster than 99.13% of JavaScript online submissions for Sudoku Solver.   
Memory Usage: 36.3 MB, less than 100.00% of JavaScript online submissions for Sudoku Solver.   


- **高票答案对比**   
最高票：https://leetcode.com/problems/sudoku-solver/discuss/15752/Straight-Forward-Java-Solution-Using-Backtracking   
最高票思路和优化思路一致。在讨论区发现了一个可以优化的点是先获取所有需要填写的空格位置，仅递归这些位置，可以减少递归层级。    
Runtime: 84 ms, faster than 68.63% of JavaScript online submissions for Sudoku Solver.   
Memory Usage: 37.5 MB, less than 100.00% of JavaScript online submissions for Sudoku Solver.   