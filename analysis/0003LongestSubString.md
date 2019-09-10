## 题解：[20190909]#0003 Longest Substring Without Repeating Characters
- **题干**   
求最长的不重复子串长度。   
示例：   
    ```javascript
    // e.g. 1
    Input: "abcabcbb"
    Output: 3 
    Explanation: The answer is "abc", with the length of 3. 

    // e.g.2
    Input: "bbbbb"
    Output: 1
    Explanation: The answer is "b", with the length of 1.
    ```
- **思路**   
朴素思路遍历查询以每一位字符开头的最长不重复子串长度，复杂度O(n^2)。    
Runtime: 556 ms, faster than 7.67% of JavaScript online submissions for Longest Substring Without Repeating Characters.
Memory Usage: 86.8 MB, less than 5.31% of JavaScript online submissions for Longest Substring Without Repeating Characters.       
- **优化思路**   
1. 优化起始字符的选择，从第一个字符开始，遍历到第一次出现重复，则以该重复字符上一次出现未知的下一个为起点，再次遍历，递归实现。
Runtime: 440 ms, faster than 13.97% of JavaScript online submissions for Longest Substring Without Repeating Characters.
Memory Usage: 171.8 MB, less than 5.31% of JavaScript online submissions for Longest Substring Without Repeating Characters.
- **高票答案对比**   
最高票：https://leetcode.com/problems/add-two-numbers/discuss/1010/Is-this-Algorithm-optimal-or-what    
实际实现效果差不多，主要的优化在于代码量，记录的是相加的和，而不是分为进位和当前位，另外返回值添加了一个虚拟头结点，减少了头结点判断。    
Runtime: 112 ms, faster than 73.83% of JavaScript online submissions for Add Two Numbers.   
Memory Usage: 39.6 MB, less than 11.11% of JavaScript online submissions for Add Two Numbers.   
