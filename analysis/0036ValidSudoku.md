## 题解：[20191110]#0036 Valid Sudoku
- **题干**   
检测一个9x9的数独题目是否是合法的。一个数独的解需要满足以下条件：    
  - 每一行必须包含不重复的数字1-9   
  - 每一列必须包含不重复的数字1-9   
  - 9个3x3的小方格必须包含不重复的数字1-9   

  一个合法的数独如下：   
  ![一个合法的数独](https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Sudoku-by-L2G-20050714.svg/250px-Sudoku-by-L2G-20050714.svg.png)    
  示例：   
  ```javascript
  // eg.1
  Input:
  [
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
  ]
  Output: true

  // eg.2
  Input:
  [
    ["8","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
  ]
  Output: false
  Explanation: 同eg.1，但是arr[0][0]被改为8，左上角的3x3方格包含了两个数字8，所以不合法
  ``` 
  说明：   
  - 一个合法的数独板（局部填写）可以是合法的但无解的。     
  - 只有已填充的单元格需要是合法的。   
  - 给出的数独面板只包含数字1-9和字符'.'。   
  - 给出的数独面板大小永远为9x9。   
- **思路**   
由于不需要检测是否有解，所以一个最普通的思路就是哈希表，直接确认行/列/小方格是否都符合条件即可，遍历一次数组就可以得到结果。   
Runtime: 68 ms, faster than 93.07% of JavaScript online submissions for Valid Sudoku.   
Memory Usage: 38.6 MB, less than 53.33% of JavaScript online submissions for Valid Sudoku.   

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