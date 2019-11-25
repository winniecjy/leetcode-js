## 题解：[20191125]#0044 Wildcard Matching
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
字符串是个限制也是个很好的提示。显然这是一个大数相乘的题目，从低位按位计算结果（模拟人的计算方法），时间复杂度O(len1 * len2)。   
Runtime: 72 ms, faster than 70.12% of JavaScript online submissions for Multiply Strings.   
Memory Usage: 38.8 MB, less than 25.00% of JavaScript online submissions for Multiply Strings.     


- **优化思路**   
无。  
 

- **高票答案对比**   
高票思路：https://leetcode.com/problems/multiply-strings/discuss/17605/Easiest-JAVA-Solution-with-Graph-Explanation   
和第一思路是一致的，但是为了便于进位，我的第一思路是用数组从低位到高位存储结果，当有进位的时候就push新数据。作者是直接给出了足够的存储空间，数组从高位到低位存储结果，这样最后返回结果的时候就不需要再进行逆序。  
Runtime: 72 ms, faster than 70.12% of JavaScript online submissions for Multiply Strings.   
Memory Usage: 38.8 MB, less than 25.00% of JavaScript online submissions for Multiply Strings.     
