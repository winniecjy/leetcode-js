## 题解：[20191023]#0030 Substring with Concatenation of All Words
- **题干**   
给出一个字符串s和一个单词数组，每个单词的长度是一致的，找出s中恰好可以由words中所有单词串联形成的子串的起始位置。注意子串要与 words 中的单词完全匹配，中间不能有其他字符，不需要考虑words中单词串联的顺序。    
    示例：   
    ```javascript
    // e.g.1
    Input:
      s = "barfoothefoobarman",
      words = ["foo","bar"]
    Output: [0,9]
    Explanation: 从下标0和9开始的子串分别是"barfoo"和"foobar"。输出顺序是不相关的，即output可以为[9,0]
    // e.g.2
    Input:
      s = "wordgoodgoodgoodbestword",
      words = ["word","good","best","word"]
    Output: []
    ``` 
    
- **思路**   
第一思路首先尝试了一种大概率会超时的方案，循环words数组，找出每一个单词在字符串s中可能的下标，判断以此为起点是否能够形成一个符合条件的子串。复杂度已经到阶乘了，超时案例我自己都想好了，比如什么'ababababa'，单词数组为['ab', 'ba']，这种字符串中有一半都满足，当量级上升时一定会超时。          
Time Limit Exceeded

- **优化思路**   
注意到条件中有一个比较特殊的条件是：words中的所有单词长度一致，对于words含有k个单词，单词长度为l。可以假设字符串有符合条件的子串，则其长度为k\*l，且以l个字符为一个单位，需要一一匹配words中单词，此处可以通过哈希表来确定唯一对应。   
加入双指针a，b，a从字符串s的下标0开始，b位于字符串的下标k*l-1，指针a和b中间标识假设可行的子串，通过hash表匹配是否符合上述条件。   
Runtime: 348 ms, faster than 50.61% of JavaScript online submissions for Substring with Concatenation of All Words.   
Memory Usage: 43.7 MB, less than 50.00% of JavaScript online submissions for Substring with Concatenation of All Words.   

- **高票答案对比**   
最高票：https://leetcode.com/problems/substring-with-concatenation-of-all-words/discuss/13656/An-O(N)-solution-with-detailed-explanation    
这个思路与优化思路基本一致，有一个优化的点在于双指针遍历，优化思路指针遍历整个字符串s，实际上这中间有一些重复的判断，只需要遍历一个单词长度即可。这个优化基于words数组中每个单词长度一致，对于s = "barfoothefoobarman"，words = ["foo","bar"]，指针a从下标0开始遍历和从下标3（一个单词长度）开始遍历，有大量的重合。    
Runtime: 80 ms, faster than 88.89% of JavaScript online submissions for Substring with Concatenation of All Words.   
Memory Usage: 44.3 MB, less than 50.00% of JavaScript online submissions for Substring with Concatenation of All Words.    