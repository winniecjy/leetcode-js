## 题解：[20191113]#0038 Count and Say
- **题干**   
报数序列是一个整数序列，按照其中的整数的顺序进行报数，得到下一个数。其前五项如下：
  ```
  1.     1
  2.     11
  3.     21
  4.     1211
  5.     111221
  ```
  1 被读作  "one 1"  ("一个一") , 即 11。   
  11 被读作 "two 1s" ("两个一"）, 即 21。   
  21 被读作 "one 2",  "one 1" （"一个二" ,  "一个一") , 即 1211。   
  给定一个正整数 n（1 ≤ n ≤ 30），输出报数序列的第 n 项。
  注意：整数顺序将表示为一个字符串。
  示例：   
  ```
  // eg.1
  Input: 1
  Output: "1"
  // eg.2
  Input: 4
  Output: "1211"
  ```
- **思路**   
哈希表+递归的思路，每一个单元格都必须在行/列/九宫格中合法，由于行/列合法相对比较容易确认，因此以九宫格为一个单位，确定其解，逐步递归直到所有九宫格的解都合法。由于中间的九宫格的影响较大，所以递归的顺序为中间九宫格->上中/下中/左中/右中->左上角/右上角/左下角/右下角。       

- **优化思路**   
看到n<=30我真的忍不住想暴力解，列出所有结果直接匹配。   


- **高票答案对比**   
最高票：https://leetcode.com/problems/valid-sudoku/discuss/15472/Short%2BSimple-Java-using-Strings   
同第二思路，作者给出了一个可读性更佳的方案。hashMap通过字符串的方式记录，形式如`1 in row 0/1 in col 0/1 in block 0`，当哈希表中存在一样的字符串则表示数独不合法。       
Runtime: 92 ms, faster than 20.50% of JavaScript online submissions for Valid Sudoku.   
Memory Usage: 41.3 MB, less than 26.67% of JavaScript online submissions for Valid Sudoku.   