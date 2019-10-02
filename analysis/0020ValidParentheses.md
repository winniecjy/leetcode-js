## 题解：[20191002]#0020 Valid Parentheses
- **题干**  
给出一个字符串只包含字符"("，")"，"{"，"}"，"["和"]"，确定该字符串是否合法。    
一个合法的输入应当符合以下条件：    
  - 左括号必须用相同类型的右括号闭合。    
  - 左括号必须以正确的顺序闭合。   

  注意空字符串可被认为是有效字符串。   
    示例：   
    ```javascript
    // e.g.1
    Input: "()[]{}"
    Output: true
    // e.g.2
    Input: "([)]"
    Output: false
    // e.g.3
    Input: "{[]}"
    Output: true
    ``` 
- **思路**   
这是一个典型的栈问题，对于所有的左括号先压入栈中，对于右括号，比较其与栈顶元素是否匹配，如果匹配将栈顶左括号出栈，否则返回结果false。匹配到最后栈为空，则返回结果为true。    
Runtime: 60 ms, faster than 37.01% of JavaScript online submissions for Valid Parentheses.   
Memory Usage: 41.1 MB, less than 6.67% of JavaScript online submissions for Valid Parentheses.       
- **优化思路**   
这个经典解法效果很一般，考虑到这个题目中没有干扰项，也就是只包含括号，所以考虑另一种思路，是通过string.replace函数，将所有匹配的括号对去除，直到无法去除检查结果字符串是否为空。代码只有三行，但是效率并不好。基于第一思路，加入了字符串长度奇偶判断，结果也不理想。          
Runtime: 88 ms, faster than 6.25% of JavaScript online submissions for Valid Parentheses.   
Memory Usage: 36.1 MB, less than 6.67% of JavaScript online submissions for Valid Parentheses.     

- **高票答案对比**   
最高票：https://leetcode.com/problems/valid-parentheses/discuss/9178/Short-java-solution    
思路与第一思路一致。对于这个时间复杂度感到迷惑，看了一眼js解法的高票答案：   
https://leetcode.com/problems/valid-parentheses/discuss/9457/8-lines-in-javascript       
作者的解法实际上也是栈的解法，但是用了一种很讨巧的手法，通过一个字符串mapStr'([{}])'，此时所有匹配的括号下标相加之和都为5，所以遍历字符串s，记录字符在mapStr的下标到一个数组中，每次取出数组的最后一位与当前的下标，如果和为5，则将下标移出数组。最后假如数组长度为0，则为true。否则为false。   
Runtime: 52 ms, faster than 83.00% of JavaScript online submissions for Valid Parentheses.   
Memory Usage: 35.4 MB, less than 11.67% of JavaScript online submissions for Valid Parentheses.     