## 题解：[20190917]#0009 Palindrome Number
- **题干**   
判断输入数字是否为回文数字。   
示例：   
    ```javascript
    Input: 121
    Output: true

    // e.g.2
    Input: -121
    Output: false
    Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

    // e.g.3
    Input: 10
    Output: false
    Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
    ```
- **思路**   
将数字先转为字符串，然后用双指针法，一个从头开始，一个从尾部开始向中间靠拢，判断字符是否一致，复杂度O(n/2)。       
Runtime: 172 ms, faster than 93.83% of JavaScript online submissions for Palindrome Number.   
Memory Usage: 45.9 MB, less than 33.62% of JavaScript online submissions for Palindrome Number.     
- **优化思路**   
想不出来。   
- **高票答案对比**   
最高票：https://leetcode.com/problems/palindrome-number/discuss/5127/9-line-accepted-Java-code-without-the-need-of-handling-overflow    
Runtime: 192 ms, faster than 67.76% of JavaScript online submissions for Palindrome Number.   
Memory Usage: 44.8 MB, less than 98.28% of JavaScript online submissions for Palindrome Number.   
这个答案是将数字翻转比较两个数字是否相等，这样的空间复杂度更优，时间复杂度稍差，实际上如果只是回文正整数那这个方案是更加合理的，因为在大部分的语言中都有数字溢出的概念，比如作者使用的Java，对于32位整数来说，数字的位数不会超过10位，所以减少的时间复杂度不值一提。作者提出的数字翻转溢出的情况实际上是不需要考虑的，假如翻转溢出了，那么说明这个数字不可能是回文数字（如果是，那么表示x也是溢出的）。另外给出一定不会是回文字符的数字判断`x < 0 || (x != 0 && x%10 === 0)`。     