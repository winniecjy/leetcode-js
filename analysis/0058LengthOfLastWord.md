## 题解：[20191212]#0058 Length of Last Word
- **题干**   
输入一个字符串s，有大写/小写字母和空格字符' '组成，返回字符串中的最后一个单词。    
如果不存在最后一个单词，则返回0。   
单词的定义是只由非空格字符组成。   
示例：    
  ```
  // e.g.1
  Input: "Hello World"
  Output: 5
  ```

- **第一思路**   
先去除前后空格，从后往前遍历字符串，直到遇到第一个空格元素，则得到结果。   
Runtime: 52 ms, faster than 77.80% of JavaScript online submissions for Length of Last Word.   
Memory Usage: 33.9 MB, less than 50.00% of JavaScript online submissions for Length of Last Word.    

- **优化思路**   
无  
- **高票答案对比**   
高票思路：https://leetcode.com/problems/length-of-last-word/discuss/21892/7-lines-4ms-C%2B%2B-Solution   
同第一思路。                 
Runtime: 56 ms, faster than 53.46% of JavaScript online submissions for Length of Last Word.   
Memory Usage: 33.9 MB, less than 38.46% of JavaScript online submissions for Length of Last Word.   