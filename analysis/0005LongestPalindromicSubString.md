## 题解：[20190912]#0005 Longest Palindromic Substring
- **题干**   
求字符串s中的最长回文子串，s的长度不超过1000。   
示例：   
    ```javascript
    // e.g. 1
    Input: "babad"
    Output: "bab"
    Note: "aba" is also a valid answer.

    // e.g.2
    Input: "cbbd"
    Output: "bb"
    ```
- **思路**   
归并排序的思路，排序后的数组取中位数。      
Runtime: 556 ms, faster than 7.67% of JavaScript online submissions for Longest Substring Without Repeating Characters.   
Memory Usage: 86.8 MB, less than 5.31% of JavaScript online submissions for Longest Substring Without Repeating Characters.       
- **优化思路**   
双指针？   
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
