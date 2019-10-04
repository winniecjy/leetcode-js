## 题解：[20191004]#0022 Generate Parentheses
- **题干**  
给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。    
    示例：   
    ```javascript
    // n=3
    [
      "((()))",
      "(()())",
      "(())()",
      "()(())",
      "()()()"
    ]
    ``` 
- **思路**   
全排列问题经常可以通过递归思路来解决，左括号和右括号的数量之和为0，初始状态码lcode，rcode为0，当放入一个左括号时，lcode+1，当放入一个右括号时，rcode+1，当lcode>0&&lcode<n&&lcode-rcode>0时可以放入右括号，当lcode<n时可以放入左括号，当rcode-lcode==0时，必须放入左括号，当lcode==n时，必须放入右括号。   
Runtime: 60 ms, faster than 47.25% of JavaScript online submissions for Generate Parentheses.   
Memory Usage: 35 MB, less than 69.23% of JavaScript online submissions for Generate Parentheses.   
- **优化思路**   
实际上通过一个状态码code就可以标记字符当前状态，添加左括号时code--，添加右括号时code++。当code<0时可以添加右括号，当str.length-code<n*2时，可以添加左括号。   
Runtime: 52 ms, faster than 87.22% of JavaScript online submissions for Generate Parentheses.   
Memory Usage: 34.9 MB, less than 92.31% of JavaScript online submissions for Generate Parentheses.   

- **高票答案对比**   
最高票：https://leetcode.com/problems/generate-parentheses/discuss/10100/Easy-to-understand-Java-backtracking-solution    
作者思路和第一思路一致，实际上这是回溯的算法，在尝试搜索的过程中，当发现不满足条件时，回溯上一步骤，尝试别的路径。    
Runtime: 52 ms, faster than 87.22% of JavaScript online submissions for Generate Parentheses.   
Memory Usage: 35 MB, less than 61.54% of JavaScript online submissions for Generate Parenthes.        