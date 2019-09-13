## 题解：[20190913]#0007 Reverse Integer
- **题干**   
32位有符号整数翻转。
示例：   
    ```javascript
    Input: 123
    Output: 321

    // e.g.2
    Input: -123
    Output: -321

    // e.g.3
    Input: 120
    Output: 21
    ```
- **思路**   
记录正负，转换为正整数，然后转换为字符串，字符串翻转，转为正整数，恢复正负，溢出情况需要处理。      
Runtime: 76 ms, faster than 61.03% of JavaScript online submissions for Reverse Integer.   
Memory Usage: 35.9 MB, less than 41.67% of JavaScript online submissions for Reverse Integer.       
- **优化思路**   
第一思路的转换过程较多，尝试了一下直接通过数值每一位转换。      
Runtime: 68 ms, faster than 90.09% of JavaScript online submissions for Reverse Integer.   
Memory Usage: 35.8 MB, less than 70.83% of JavaScript online submissions for Reverse Integer.   
- **高票答案对比**   
最高票：https://leetcode.com/problems/reverse-integer/discuss/4060/My-accepted-15-lines-of-code-for-Java       
实际上和优化思路是完全一致的，但是在不同语言中，溢出判断方法有多种，所以有一些差别，在JavaScript中，由于不存在int类型，所以需要手动判断，当超出32位有符号整数时，返回0。   