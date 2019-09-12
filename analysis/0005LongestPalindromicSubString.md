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
双指针法，回文字符串的特点在于从中间展开，左右字符是对称的。当回文字符串长度为奇数时，其中心为一个元素，即`bab`，当回文字符串长度为偶数时，其中心为两个一致的元素，则`aa`。针对这两种形式，可以通过双指针法遍历两次，得出结果；第一次双指针初始下标分别为0/1，第二次双指针初始下标分别为0/2，双指针同时向右移动，当双指针数值相同时，则到达了回文字符的中心。再向两侧扩展，得到回文字符的长度。         
Runtime: 140 ms, faster than 49.29% of JavaScript online submissions for Longest Palindromic Substring.   
Memory Usage: 42 MB, less than 26.09% of JavaScript online submissions for Longest Palindromic Substring.       
- **优化思路**   
考虑是否可以将两个情况合二为一，当b和a之间距离小于等于1时，b向右走，a不动，否则a向右走，b不动。代码量优化了，但是性能没有什么差别。    
Runtime: 140 ms, faster than 49.29% of JavaScript online submissions for Longest Palindromic Substring.
Memory Usage: 42.1 MB, less than 23.91% of JavaScript online submissions for Longest Palindromic Substring.   
- **高票答案对比**   
最高票：https://leetcode.com/problems/longest-palindromic-substring/discuss/2928/Very-simple-clean-java-solution       
思路比较一致，但是减少了一些判断和变量，通过一个下标i，i+1和i+2分别指示偶数长度回文串和奇数长度回文串。另外回文串扩展完成后再生成字符串，而不是一边判断一边修改回文串。  
Runtime: 72 ms, faster than 93.37% of JavaScript online submissions for Longest Palindromic Substring.   
Memory Usage: 36.2 MB, less than 65.22% of JavaScript online submissions for Longest Palindromic Substring.   
