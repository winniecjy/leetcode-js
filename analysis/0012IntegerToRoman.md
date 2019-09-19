## 题解：[20190919]#0012 Integer To Roman
- **题干**   
罗马数字通过7个不同的符号来代表：I，V，X，L，C，D和 M。   
    ```
    Symbol       Value
    I             1
    V             5
    X             10
    L             50
    C             100
    D             500
    M             1000
    ```
    举例，2在罗马数字中写作II，表示两个I相加；12写作XII，表示X+II；数字27写作XXVII，表示XX+V+II。   
    罗马数字通常从大到小，从左到右书写。但是有一些的特殊的顺序相反，用于表示减法，比如4用IX表示，具体规则如下：   
    - IV和IX分别表示4和9；   
    - XL和XC分别表示40和90；  
    - CD和CM分别表示400和900；   

    输入整数，返回其罗马数字表示。输入的范围为1~3999。     
    示例：   
    ```javascript
    // e.g.1
    Input: 3
    Output: "III"
    // e.g.2
    Input: 58
    Output: "LVIII"
    Explanation: L = 50, V = 5, III = 3.
    // e.g.3
    Input: 1994
    Output: "MCMXCIV"
    Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
    ```
- **思路**   
这个题目总是让我想到找零钱。罗马数字中每一位只有4种表示，1/4/5/9。直接模取每一位，先比较是否为4或9，否则用1和5加和表示，简单的if-else题目。由于最大也只有3999，我就偷懒直接写每一位的表示拼上去就好了，复杂度为O(d)，d表示位数。         
Runtime: 128 ms, faster than 92.63% of JavaScript online submissions for Integer to Roman.   
Memory Usage: 40.2 MB, less than 60.00% of JavaScript online submissions for Integer to Roman.   
- **优化思路**   
想不出，很头秃。     
- **高票答案对比**   
最高票：https://leetcode.com/problems/integer-to-roman/discuss/6274/Simple-Solution   
一模一样？？？可以，懒惰是人类一次性AC的阶梯。
