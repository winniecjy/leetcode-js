## 题解：[20191028]#0032 Longest Valid Parentheses
- **题干**   
给定一个只包含 '(' 和 ')' 的字符串，找出最长的包含有效括号的子串的长度。      

  示例：   
  ```javascript
  // eg.1
  Input: "(()"
  Output: 2
  Explanation: The longest valid parentheses substring is "()"

  // eg.2
  Input: ")()())"
  Output: 4
  Explanation: The longest valid parentheses substring is "()()"
  ``` 
    
- **思路**   
使用动态规划的思路， 
  Runtime: 56 ms, faster than 96.99% of JavaScript online submissions for Next Permutation.   
  Memory Usage: 34.9 MB, less than 33.33% of JavaScript online submissions for Next Permutation.   

- **优化思路**   
无

- **高票答案对比**   
最高票：https://leetcode.com/problems/next-permutation/discuss/13867/C%2B%2B-from-Wikipedia    
思路同第一思路，这个问题的难点大概在于理解题目，如果能够清楚下一个更大排列的特征就能够很快解决问题！   