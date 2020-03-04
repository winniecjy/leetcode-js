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
模拟人处理的方式，将字符串分割为每一层，从左到右对于每一层进行处理：      
  - 对于`.`可以直接移除当前层
  - 对于`..`则去除当前层及上一层
  - 对于末尾`/`直接去除      

  Runtime: 56 ms, faster than 94.91% of JavaScript online submissions for Simplify Path.   
  Memory Usage: 36.1 MB, less than 33.33% of JavaScript online submissions for Simplify Path.   
- **优化思路**   
可以发现空间复杂度比较不理想，因为第一思路新开了一个数组来存储每一个层的数据，然后进行处理。实际上这是一个数组从左到右的累加处理，可以用`reduce`函数进行处理。       
Runtime: 56 ms, faster than 94.91% of JavaScript online submissions for Simplify Path.   
Memory Usage: 35.2 MB, less than 100.00% of JavaScript online submissions for Simplify Path.   
- **高票答案对比**   
高票思路：https://leetcode.com/problems/simplify-path/discuss/25686/Java-10-lines-solution-with-stack   
高票作者使用栈来处理，这是一个符合底层逻辑的思路，对于普通文件路径压入栈中，对于`.`不处理，对于`..`弹出栈顶元素。     
Runtime: 56 ms, faster than 94.91% of JavaScript online submissions for Simplify Path.   
Memory Usage: 35.6 MB, less than 66.67% of JavaScript online submissions for Simplify Path.   