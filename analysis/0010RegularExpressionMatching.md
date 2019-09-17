## 题解：[20190917]#0010 Regular Expression Matching
- **题干**   
给出一个字符串s和一个正则匹配规则p（支持.和\*匹配），实现一个完全正则匹配并返回结果。s为a-z，p为a-z|.|\*。   
示例：   
    ```javascript
    // e.g.1
    Input:
    s = "aa"
    p = "a"
    Output: false
    Explanation: "a" does not match the entire string "aa".

    // e.g.2
    s = "aa"
    p = "a*"
    Output: true
    Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".

    // e.g.3
    s = "ab"
    p = ".*"
    Output: true
    Explanation: ".*" means "zero or more (*) of any character (.)".

    // e.g.4
    s = "aab"
    p = "c*a*b"
    Output: true
    Explanation: c can be repeated 0 times, a can be repeated 1 time. Therefore, it matches "aab".

    // e.g.5
    Input:
    s = "mississippi"
    p = "mis*is*p*."
    Output: false
    ```
- **思路**   
第一思路是递归，对于匹配规则p，遇到*的情况处理，遇到.的情况处理，其他按照正常匹配，超时了。   
- **优化思路**   
想不出来。偷偷看👀了眼答案标题，看到了动态规划，手表示了解了，脑子想了半个小时表示没有，所以我直接看答案了。      
- **高票答案对比**   
最高票：https://leetcode.com/problems/regular-expression-matching/discuss/5651/Easy-DP-Java-Solution-with-detailed-Explanation 
Runtime: 192 ms, faster than 67.76% of JavaScript online submissions for Palindrome Number.   
Memory Usage: 44.8 MB, less than 98.28% of JavaScript online submissions for Palindrome Number.   
这个答案是将数字翻转比较两个数字是否相等，这样的空间复杂度更优，时间复杂度稍差，实际上如果只是回文正整数那这个方案是更加合理的，因为在大部分的语言中都有数字溢出的概念，比如作者使用的Java，对于32位整数来说，数字的位数不会超过10位，所以减少的时间复杂度不值一提。作者提出的数字翻转溢出的情况实际上是不需要考虑的，假如翻转溢出了，那么说明这个数字不可能是回文数字（如果是，那么表示x也是溢出的）。另外给出一定不会是回文字符的数字判断`x < 0 || (x != 0 && x%10 === 0)`。     