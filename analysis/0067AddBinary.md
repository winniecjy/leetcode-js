## 题解：[20191222]#0067 Add Binary
- **题干**   
输入两个二进制字符串，返回两者之和。     
输入的字符串非空且只包含0或者1。    
  示例：    
  ```JavaScript
  // e.g.1
  Input: a = "11", b = "1"
  Output: "100"

  // e.g.2
  Input: a = "1010", b = "1011"
  Output: "10101"
  ```

- **第一思路**   
只是普通的相加，比较麻烦的处理是位数不同且需要进位时，情况判断问题，如11(2)+111(2)。所以现将两个字符串补位成统一长度且加上一个前置零，即0011(2)+0111(2)，进行相加后，将结果的前置零去除后即可得到结果。    
Runtime: 56 ms, faster than 94.79% of JavaScript online submissions for Add Binary.   
Memory Usage: 36.3 MB, less than 14.29% of JavaScript online submissions for Add Binary.   
- **优化思路**   
无
- **高票答案对比**   
高票思路：https://leetcode.com/problems/add-binary/discuss/24488/Short-AC-solution-in-Java-with-explanation        
第一思路陷入了一个误区就是进位记录可以是大于1的，所以不需要去补位，直接循环相加记录进位就可以了，循环结束时，再判断进位，此时进位必定<=1，若为1则在结果补进位即可。   
Runtime: 64 ms, faster than 67.89% of JavaScript online submissions for Add Binary.   
Memory Usage: 36.3 MB, less than 14.29% of JavaScript online submissions for Add Binary.   