## 题解：[20200901]#0076 Minimum Window Substring
- **题干**   
输入字符串S和T，找出S中包含T所有字符的最小子串，复杂度要求为O(n)。     
  ```javascript
  // e.g.1
  Input: S = "ADOBECODEBANC", T = "ABC"
  Output: "BANC"
  ```
  注意：
  - 如果不存在这样的子串，返回空字符串""；
  - 如果存在这样的子串，那么S中只会存在唯一一个这样的子串；
- **第一思路**   
第一思路是空间换时间，最短子串一定是T中的字符作为开始和结尾。对于每一个可能的开始位置，记录结束位置ed和已有的字符映射情况Map。遍历一次之后就可以得到最短子串。仔细一想这个方法接近O(n^2)，每次找到T中的字符，都需要更新所有可能性。   
重新考虑，由于这个问题类似逼近的问题，可以尝试用双指针法来解决，往中间   

- **优化思路**   

- **高票答案对比**   
高票思路：https://leetcode.com/problems/sort-colors/discuss/26472/Share-my-at-most-two-pass-constant-space-10-line-solution   
同第一思路。   
