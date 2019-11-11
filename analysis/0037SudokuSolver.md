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
哈希表+递归的思路，每一个单元格都必须在行/列/九宫格中合法，由于行/列合法相对比较容易确认，因此以九宫格为一个单位，确定其解，逐步递归直到所有九宫格的解都合法。由于中间的九宫格的影响较大，所以递归的顺序为中间九宫格->上中/下中/左中/右中->左上角/右上角/左下角/右下角。       

- **优化思路**   
第一思路对于行/列/九宫格都分别使用一个哈希表，每次开始时需要重置。可以通过一个统一的哈希表，记录当前出现过的所有数字的下标(row*9+col)，每次发现有重复数据时，比较下标，确认是否为同一个行/列/九宫格，假设当前下标为e，已知前置元素下标为i，规则匹配如下：       
  - 行：e/9 === i/9  
  - 列：e%9 === i%9    
  - 九宫格： parseInt(parseInt(e/9)/3)*3+parseInt((e%9)/3) == parseInt(parseInt(i/9)/3)*3+parseInt((i%9)/3)   

  Runtime: 72 ms, faster than 85.18% of JavaScript online submissions for Valid Sudoku.   
  Memory Usage: 37.8 MB, less than 80.00% of JavaScript online submissions for Valid Sudoku.   

- **高票答案对比**   
最高票：https://leetcode.com/problems/valid-sudoku/discuss/15472/Short%2BSimple-Java-using-Strings   
同第二思路，作者给出了一个可读性更佳的方案。hashMap通过字符串的方式记录，形式如`1 in row 0/1 in col 0/1 in block 0`，当哈希表中存在一样的字符串则表示数独不合法。       
Runtime: 92 ms, faster than 20.50% of JavaScript online submissions for Valid Sudoku.   
Memory Usage: 41.3 MB, less than 26.67% of JavaScript online submissions for Valid Sudoku.   