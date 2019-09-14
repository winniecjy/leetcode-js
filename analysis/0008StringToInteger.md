## 题解：[20190914]#0008 String to Integer (atoi)
- **题干**   
输入一个字符串，从第一个非空字符开始将其转换为整数（包含正负），后置的非数字字符不影响结果，如果第一个非空字符不是合法数字或不存在非空数字，则返回0。    
示例：   
    ```javascript
    Input: "42"
    Output: 42

    // e.g.2
    Input: "   -42"
    Output: -42
    Explanation: 第一个非空字符为负号'-', 获取后面的数字位可以得到42

    // e.g.3
    Input: "4193 with words"
    Output: 4193
    Explanation: 转换在数字3停止了，因为后续的字符不是数字

    // e.g.4
    Input: "words and 987"
    Output: 0
    Explanation: 第一个非空字符为'w'，不是数字或者是正负符号，因此不转换直接返回0

    // e.g.5
    Input: "-91283472332"
    Output: -2147483648
    Explanation: 数字"-91283472332"超出32位整数表示返回，因此返回-2^31
    ```
- **思路**   
遍历一次字符，从第一个非空字符开始分情况判断，溢出和非法情况需要特殊处理，复杂度O(n)。      
Runtime: 80 ms, faster than 53.38% of JavaScript online submissions for String to Integer (atoi).   
Memory Usage: 37 MB, less than 14.29% of JavaScript online submissions for String to Integer (atoi).     
- **优化思路**   
计算出数字对应的开始下标和结束下标，再进行纯粹的字符串转数字，可以减少一些判断和中间变量。        
Runtime: 68 ms, faster than 93.93% of JavaScript online submissions for String to Integer (atoi).   
Memory Usage: 36.7 MB, less than 14.29% of JavaScript online submissions for String to Integer (atoi).   
- **高票答案对比**   
最高票：https://leetcode.com/problems/string-to-integer-atoi/discuss/4654/My-simple-solution    
一个比较正统的写法，上述的两个思路都用了一些js自带的函数，这个方案没有，包括通过`'0'<str[index]<'9'`来判断是否是数字（上述写法用了正则），也是有一段时间没用了，可以参考一下。   
顺带一提，真正的最高票实际上是个吐槽，这个不是算法问题，是个if-else的问题。   