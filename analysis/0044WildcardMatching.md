## 题解：[20191126]#0044 Wildcard Matching
- **题干**   
输入字符串s和正则表达式p，实现一个通配符匹配支持'?'和'*'。   
  - '?' 匹配任意一个字符
  - '*' 匹配任意字符序列（包含空序列）

  需要全局匹配输入的字符串s（非局部匹配）。    
  说明：   
    - 字符串s可为空，只包含小写字母a-z。    
    - 正则表达式p可为空，只包含小写字母a-z和字符?和*。   
  
  示例：   
  ```javascript
  // e.g.1
  Input:
  s = "aa"
  p = "a"
  Output: false
  Explanation: "a" does not match the entire string "aa".

  // e.g.2
  Input:
  s = "aa"
  p = "*"
  Output: true
  Explanation: '*' matches any sequence.

  // e.g.3
  Input:
  s = "cb"
  p = "?a"
  Output: false
  Explanation: '?' matches 'c', but the second letter is 'a', which does not match 'b'.

  // e.g.4
  Input:
  s = "adceb"
  p = "*a*b"
  Output: true
  Explanation: The first '*' matches the empty sequence, while the second '*' matches the substring "dce".

  // e.g.5
  Input:
  s = "acdcb"
  p = "a*c?b"
  Output: false
  ```

- **思路**   
典型的动态规划问题，当前步骤的答案可以依赖上一步骤答案得出。时间复杂度O(sLen*pLen)。      
Runtime: 140 ms, faster than 60.00% of JavaScript online submissions for Wildcard Matching.   
Memory Usage: 56.6 MB, less than 100.00% of JavaScript online submissions for Wildcard Matching.   


- **优化思路**   
无。  
 

- **高票答案对比**   
高票思路：https://leetcode.com/problems/wildcard-matching/discuss/17810/Linear-runtime-and-constant-space-solution      
作者的方案采用的是贪心算法，优化的关键点是：'*'匹配越少字符越好，记录上一个\*的位置和匹配到的字符位置，当遇到无法匹配的情况则回退到上一\*的位置，并匹配字符长度+1，在此位置开始重新计算。关键代码如下：   
```
// currS, currP分别记录字符串s和正则表达式当前匹配下标
// lastStarS, lastStarP分别记录距离最近的'*'，当前匹配位置
while (currS < s.length) {
  // 同时移动两个指针
  if ((currP < p.length && p[currP] == "?") || s[currS] == p[currP]) {
    currS++;
    currP++;
  }
  // 当前为'*'，只移动正则指针，则所有'*'初始匹配都为空字符串
  else if (currP < p.length && p[currP] === "*") {
    lastStarP = currP;
    lastStarS = currS;
    currP++;
  }
  // 当前匹配方案走不通，正则有前置位置为'*'，移动指针回退到该位置，让'*'多匹配一个字符重新开始
  else if (lastStarP != -1) {
    currP = lastStarP + 1;
    lastStarS++;
    currS = lastStarS;
  }
  // 当前正则不是'*'，正则前一位也不是'*'，字符串不匹配
  else return false;
}
```
这个算法的最差时间复杂度与DP一致（s:bbbbbbbb, p:\*bbbb），但是平均时间复杂度更优（因为不需要计算所有情况的结果），且空间复杂度为O(1)。    
Runtime: 104 ms, faster than 86.00% of JavaScript online submissions for Wildcard Matching.   
Memory Usage: 38.5 MB, less than 100.00% of JavaScript online submissions for Wildcard Matching.   

