## 题解：[20191113]#0038 Count and Say
- **题干**   
报数序列是一个整数序列，按照其中的整数的顺序进行报数，得到下一个数。其前五项如下：
  ```
  1.     1
  2.     11
  3.     21
  4.     1211
  5.     111221
  ```
  1 被读作  "one 1"  ("一个一") , 即 11。   
  11 被读作 "two 1s" ("两个一"）, 即 21。   
  21 被读作 "one 2",  "one 1" （"一个二" ,  "一个一") , 即 1211。   
  给定一个正整数 n（1 ≤ n ≤ 30），输出报数序列的第 n 项。
  注意：整数顺序将表示为一个字符串。
  示例：   
  ```
  // eg.1
  Input: 1
  Output: "1"
  // eg.2
  Input: 4
  Output: "1211"
  ```
- **思路**   
用循环遍历上一结果，对于连续数字记录其长度，存到新字符串里即可。为了避免麻烦的头尾，每次遍历的时候都在上一结果的头尾加上字符，这样就只需要判断是否当前字符与上一字符是否相等即可。   
Runtime: 60 ms, faster than 52.40% of JavaScript online submissions for Count and Say.   
Memory Usage: 35.5 MB, less than 41.67% of JavaScript online submissions for Count and Say.             

- **优化思路**   
看到n<=30我真的忍不住想暴力解，快乐AC，复杂度O(1)。   
Runtime: 52 ms, faster than 91.06% of JavaScript online submissions for Count and Say.   
Memory Usage: 33.8 MB, less than 100.00% of JavaScript online submissions for Count and Say.   


- **高票答案对比**   
最高票：https://leetcode.com/problems/count-and-say/discuss/15995/Examples-of-nth-sequence    
高票思路在吐槽题目有歧义，实际与第一思路一致。   