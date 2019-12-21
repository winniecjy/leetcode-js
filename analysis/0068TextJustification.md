## 题解：[20191223]#0068 Text Justification
- **题干**   
输入一个单词数组和一个数字maxWidth表示最大宽度，构造文本使得每一行都刚好有maxWidth个字符，且是左右两端对齐的文本。   
单词以贪心策略打包在同一行，也就是同一行应当包含尽量多的单词。如果有必要则使用' '来补充剩余空间，使得每一行都恰好是maxWidth个字符。    
要求尽可能均匀分配单词间的空格数量。如果某一行单词间的空格不能均匀分配，则左侧放置的空格数要多于右侧的空格数。    
文本的最后一行应为左对齐，且单词之间不插入额外的空格。    
说明:
  - 单词是指由非空格字符组成的字符序列。   
  - 每个单词的长度大于 0，小于等于 maxWidth。   
  - 输入单词数组 words 至少包含一个单词。   
  示例：    
  ```JavaScript
  // e.g.1
  Input:
  words = ["This", "is", "an", "example", "of", "text", "justification."]
  maxWidth = 16
  Output:
  [
    "This    is    an",
    "example  of text",
    "justification.  "
  ]

  // e.g.2
  Input:
  words = ["What","must","be","acknowledgment","shall","be"]
  maxWidth = 16
  Output:
  [
    "What   must   be",
    "acknowledgment  ",
    "shall be        "
  ]
  Explanation: Note that the last line is "shall be    " instead of "shall     be",
              because the last line must be left-justified instead of fully-justified.
              Note that the second line is also left-justified becase it contains only one word.
  
  // e.g.3
  Input:
  words = ["Science","is","what","we","understand","well","enough","to","explain",
          "to","a","computer.","Art","is","everything","else","we","do"]
  maxWidth = 20
  Output:
  [
    "Science  is  what we",
    "understand      well",
    "enough to explain to",
    "a  computer.  Art is",
    "everything  else  we",
    "do                  "
  ]
  ```

- **第一思路**   
循环数组构造每一行，单词之间通过空白隔断，需要分情况讨论，对于最后一行需要左对齐，对于中间空白间隔无法均分，前部分的空格数量需要加一，时间复杂度O(n)。   
Runtime: 52 ms, faster than 77.23% of JavaScript online submissions for Text Justification.   
Memory Usage: 33.9 MB, less than 40.00% of JavaScript online submissions for Text Justification.   
- **优化思路**   
无  
- **高票答案对比**   
高票思路：https://leetcode.com/problems/text-justification/discuss/24891/Concise-python-solution-10-lines.       
同第一思路，作者将空格的添加视作Round-Robin，即轮询单词间的位置，加入空白，这个思路的代码会更简洁。            
Runtime: 52 ms, faster than 77.23% of JavaScript online submissions for Text Justification.   
Memory Usage: 33.7 MB, less than 100.00% of JavaScript online submissions for Text Justification.   