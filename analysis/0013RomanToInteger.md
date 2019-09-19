## 题解：[20190919]#0013 Roman to Integer
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

    输入罗马数字，返回整数。输入的范围为1~3999。     
    示例：   
    ```javascript
    // e.g.1
    Input: "III"
    Output: 3
    // e.g.2
    Input: "LVIII"
    Output: 58
    Explanation: L = 50, V = 5, III = 3.
    // e.g.3
    Input: "MCMXCIV"
    Output: 1994
    Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
    ```
- **思路**   
和0012很类似，所以直接同款偷懒，给出所有可能的位数，先匹配所有的4和9，剩下的再依次匹配。         
Runtime: 168 ms, faster than 14.76% of JavaScript online submissions for Roman to Integer.   
Memory Usage: 43.9 MB, less than 6.38% of JavaScript online submissions for Roman to Integer.   
- **优化思路**   
虽然AC但是效果不好，还是老老实实的IF...ELSE吧。       
Runtime: 128 ms, faster than 95.55% of JavaScript online submissions for Roman to Integer.   
Memory Usage: 39.9 MB, less than 46.81% of JavaScript online submissions for Roman to Integer.   
- **高票答案对比**   
最高票：https://leetcode.com/problems/roman-to-integer/discuss/6529/My-solution-for-this-question-but-I-don't-know-is-there-any-easier-way   
Runtime: 140 ms, faster than 74.62% of JavaScript online submissions for Roman to Integer.   
Memory Usage: 39.7 MB, less than 61.70% of JavaScript online submissions for Roman to Integer.   
基本一致，但是减少了判断，作者从末尾开始判断，当遇到1/10/100的时候，判断当前结果是否已经大于等于5/50/500，如果是则需要-1/-10/-100，否则+1/+10/+100。   
