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
最高票：https://leetcode.com/problems/roman-to-integer/discuss/6529/My-solution-for-this-question-but-I-don't-know-is-there-any-easier-way   
Runtime: 140 ms, faster than 74.62% of JavaScript online submissions for Roman to Integer.   
Memory Usage: 39.7 MB, less than 61.70% of JavaScript online submissions for Roman to Integer.   
基本一致，但是减少了判断，作者从末尾开始判断，当遇到1/10/100的时候，判断当前结果是否已经大于等于5/50/500，如果是则需要-1/-10/-100，否则+1/+10/+100。   
