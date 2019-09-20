## 题解：[20190920]#0014 Longest Common Prefix
- **题干**   
找出字符串们的最长共同前缀字符串，当没有共同前缀子串时，返回''。   
    示例：   
    ```javascript
    // e.g.1
    Input: ["flower","flow","flight"]
    Output: "fl"
    // e.g.2
    Input: ["dog","racecar","car"]
    Output: ""
    Explanation: There is no common prefix among the input strings.
    ```
- **思路**   
这道题目比想象中的简单，看题目还以为是找最长公共子串，结果是前缀，也就是说子串的起点一定是字符串的第一位，普通的遍历就可以了。          
Runtime: 56 ms, faster than 79.73% of JavaScript online submissions for Longest Common Prefix.   
Memory Usage: 34.9 MB, less than 59.38% of JavaScript online submissions for Longest Common Prefix.   
- **优化思路**   
无。   

- **高票答案对比**   
最高票：https://leetcode.com/problems/longest-common-prefix/discuss/6910/Java-code-with-13-lines
Runtime: 52 ms, faster than 92.67% of JavaScript online submissions for Longest Common Prefix.   
Memory Usage: 33.8 MB, less than 84.38% of JavaScript online submissions for Longest Common Prefix.   
用第一个字符串作为初始值，其他字符串中计算是否存在对应的子串从0开始，即`strs[i].indexOf(pre) === 0`。   
