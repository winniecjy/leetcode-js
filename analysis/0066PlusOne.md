## 题解：[20191221]#0066 Plus One
- **题干**   
给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。   
最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。   
你可以假设除了整数 0 之外，这个整数不会以零开头。   
  示例：    
  ```JavaScript
  // e.g.1
  Input: [1,2,3]
  Output: [1,2,4]
  Explanation: The array represents the integer 123.

  // e.g.2
  Input: [4,3,2,1]
  Output: [4,3,2,2]
  Explanation: The array represents the integer 4321.
  ```

- **第一思路**   
水题，给数组的最末位置加1，需要考虑特殊情况999和9，需要连续进位而且需要改变数组长度，时间复杂度O(n)。   
Runtime: 60 ms, faster than 36.82% of JavaScript online submissions for Plus One.   
Memory Usage: 33.8 MB, less than 51.06% of JavaScript online submissions for Plus One.   
- **优化思路**   
无  
- **高票答案对比**   
高票思路：https://leetcode.com/problems/valid-number/discuss/23741/The-worst-problem-i-have-ever-met-in-this-oj    
同第一思路，如作者所说，这个题目有些不合理了，求正则不给全匹配要求。在AC代码中测试如'00'，'2e0'，返回结果都为true。          