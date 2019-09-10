## 题解：[20190909]#0003 Longest Substring Without Repeating Characters
- **题干**   
求最长的不重复子串长度。   
示例：   
    ```javascript
    // e.g. 1
    Input: "abcabcbb"
    Output: 3 
    Explanation: The answer is "abc", with the length of 3. 

    // e.g.2
    Input: "bbbbb"
    Output: 1
    Explanation: The answer is "b", with the length of 1.
    ```
- **思路**   
朴素思路遍历查询以每一位字符开头的最长不重复子串长度，复杂度O(n^2)。      
Runtime: 556 ms, faster than 7.67% of JavaScript online submissions for Longest Substring Without Repeating Characters.   
Memory Usage: 86.8 MB, less than 5.31% of JavaScript online submissions for Longest Substring Without Repeating Characters.       
- **优化思路**   
1. 优化起始字符的选择，从第一个字符开始，遍历到第一次出现重复，则以该重复字符上一次出现位置的下一个为起点，再次遍历，递归实现。举个例子，对于`abcabcbb`，当到达第3位a时，发现有重复，则记录当前长度，并从a第一次出现，也就是第0位的下一位，第1位开始遍历。   
Runtime: 440 ms, faster than 13.97% of JavaScript online submissions for Longest Substring Without Repeating Characters.   
Memory Usage: 171.8 MB, less than 5.31% of JavaScript online submissions for Longest Substring Without Repeating Characters.    
2. 在优化1的基础上，可知上次重复字符的下一位到当前字符之间无重复，可以直接从当前字符的下一位开始查询，举个例子，同样对于`abcabcbb`，当从第1位开始遍历时，实际已知第1位到第3位之间无重复，所以可以直接从第4位开始判断。   
Runtime: 380 ms, faster than 16.33% of JavaScript online submissions for Longest Substring Without Repeating Characters.   
Memory Usage: 172.8 MB, less than 5.31% of JavaScript online submissions for Longest Substring Without Repeating Characters.   
优化效果不理想，应该是换一个思路的做法。   
- **高票答案对比**   
最高票：https://leetcode.com/problems/longest-substring-without-repeating-characters/discuss/1729/11-line-simple-Java-solution-O(n)-with-explanation    
大体思路是差不多的，但是作者使用了双指针法，两个指针初始位于0位置，指针A保持不动，指针B向后移动，并通过map记录已经出现的字符及其下标，当指针B遇到已经出现的字符C时，比较当前指针A和指针B之间的距离与最大距离，记录较大者，然后将指针A移动到字符C上次出现位置的下一位，并重复上述过程。   
这种实现方法只需要遍历一次数组即可，复杂度O(n)。   
Runtime: 72 ms, faster than 98.38% of JavaScript online submissions for Longest Substring Without Repeating Characters.    
Memory Usage: 37.6 MB, less than 96.46% of JavaScript online submissions for Longest Substring Without Repeating Characters.   
