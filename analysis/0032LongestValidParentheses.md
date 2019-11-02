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
一个最暴力的思路，遍历字符串，检查从下标i到下标j的子串是否为合法子串，记录最长子串长度，时间复杂度O(n^2)。     
Runtime: 1348 ms, faster than 6.80% of JavaScript online submissions for Longest Valid Parentheses.   
Memory Usage: 34.9 MB, less than 100.00% of JavaScript online submissions for Longest Valid Parentheses.   

- **优化思路**   
括号匹配一般都会使用栈来辅助，这个题目其实是判断是否括号匹配字符串的一个变形，遍历字符串，当前字符如果为'('，则入栈，当前字符如果为')'，则检测当前栈顶元素，如果为'('则出栈，否则将')'入栈。遍历完一次字符串后，字符串中包含的匹配括号的子串都已经被过滤，这个时候只需要比较栈中，相邻元素下标间隔，最长间隔即为所求，时间复杂度O(n)。   
Runtime: 84 ms, faster than 26.63% of JavaScript online submissions for Longest Valid Parentheses.   
Memory Usage: 37.3 MB, less than 100.00% of JavaScript online submissions for Longest Valid Parentheses.   

- **高票答案对比**   
最高票：https://leetcode.com/problems/longest-valid-parentheses/discuss/14126/My-O(n)-solution-using-a-stack    
思路同优化思路，评论区给出了一个很机智的动态规划的思路，通过数组V，V[0]=0，V[i]表示以i-1为子串结束下标的最长匹配子串长度，对于V[i]：   
```
1. 如果V[i]为'('，则可匹配的左括号加1
2. 如果V[i]为')'，且有可匹配的左括号，则V[i] = 2 + V[i-1]，V[i] + V[i-V[i]]可匹配的左括号减1，如果V[i]大于当前记录的最大值，则更新   

// 图示帮助理解
( ) ( ( ( ) ) ) ( )
| |________________________ i = 2, open = 1
|__________________________ v[i-1] = 0, v[i] = 2 + v[i-1] = 2
___________________________ v[i-v[i]] = v[2 - 2] = v[0] = 0, v[i] = v[i] + v[i-V[i]] = 2

( ) ( ( ) ) ( )
  |     | |____________ i = 6, open = 1
  |     |______________ v[i-1] = 2, v[i] = 2 + v[i-1] = 4，找到最大层叠括号匹配，形如(((...)))
  |____________________ v[i-v[i]] = v[6 - 4] = v[2] = 2，v[i] = v[i] + v[i-V[i]] = 6，找到最大同层匹配，形如()()...()


```
Runtime: 60 ms, faster than 85.53% of JavaScript online submissions for Longest Valid Parentheses.   
Memory Usage: 37 MB, less than 100.00% of JavaScript online submissions for Longest Valid Parentheses.   