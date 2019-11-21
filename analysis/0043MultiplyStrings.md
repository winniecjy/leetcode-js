## 题解：[20191121]#0042 Trapping Rain Water
- **题干**   
输入两个非负整数num1和num2，用字符串形式表示。返回num1和num2的乘积，以字符串形式表示。   
  示例：   
  ```
  // eg.1
  Input: num1 = "2", num2 = "3"
  Output: "6"
  // eg. 2
  Input: num1 = "123", num2 = "456"
  Output: "56088"
  ```

  说明：  
  1. num1和num2的长度都小于110；   
  2. num1和num2只包含数字0-9；
  3. num1和num2都不包含前置零，除了数字0；
  4. 要求不使用内置的大数计算库或者是直接将输入的数字转为整数；   
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