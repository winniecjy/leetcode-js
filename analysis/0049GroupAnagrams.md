## 题解：[20191201]#0049 Group Anagrams
- **题干**   
输入一个字符串数组，将相同字母异序词组合在一起。   
示例：   
  ```
  // e.g. 1
  输入: ["eat", "tea", "tan", "ate", "nat", "bat"]
  输出:
  [
    ["ate","eat","tea"],
    ["nat","tan"],
    ["bat"]
  ]
  ```
  说明：   
  - 所有输入都是小写字符。   
  - 输出顺序是不相关的。   
- **第一思路**   
根据说明可知所有输入都是小写字符，可以将字符串字母序排序后，哈希表映射来进行匹配。时间复杂度为O(m*nlog(n))，其中m为数组长度，n为字符串长度。       
Runtime: 140 ms, faster than 39.63% of JavaScript online submissions for Group Anagrams.   
Memory Usage: 45.4 MB, less than 39.13% of JavaScript online submissions for Group Anagrams.    

- **优化思路**   
第一思路先用快排对字符串进行排序，时间复杂度O(nlogn)。由于字符串包含字符是有限集（26个小写字母），所以可以使用桶排序来实现，字符串排序的时间复杂度可以降低到O(n)。时间复杂度为O(m*n)。      
Runtime: 112 ms, faster than 96.19% of JavaScript online submissions for Group Anagrams.   
Memory Usage: 45.3 MB, less than 39.13% of JavaScript online submissions for Group Anagrams.   

- **高票答案对比**   
高票思路：https://leetcode.com/problems/group-anagrams/discuss/19176/Share-my-short-JAVA-solution    
同第一思路。   
Runtime: 140 ms, faster than 39.63% of JavaScript online submissions for Group Anagrams.   
Memory Usage: 45.5 MB, less than 34.78% of JavaScript online submissions for Group Anagrams.      