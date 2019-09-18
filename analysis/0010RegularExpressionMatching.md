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
Runtime: 68 ms, faster than 87.81% of JavaScript online submissions for Regular Expression Matching.   
Memory Usage: 36.4 MB, less than 76.47% of JavaScript online submissions for Regular Expression Matching.   
动态规划的思想是分阶段求解决方案的策略，动态规划解决的问题多数有重叠子问题这个特点，为减少重复计算，对每一个子问题只解一次，将其不同阶段的不同状态保存在一个二维数组中。动态规划的当前阶段最佳决策与上一阶段相关。太久没有搞算法，动态规划真的很苦手，只能对着代码一步一步的写注释，慢慢消化ing。   
![代码注释](https://img14.360buyimg.com/imagetools/jfs/t1/57065/30/11076/181656/5d8196a5E4ca20d1a/922d3d9fbc023138.png)