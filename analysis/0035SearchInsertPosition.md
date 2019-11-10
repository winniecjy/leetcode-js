## 题解：[20191109]#0035 Search Insert Position
- **题干**   
给出一个有序数组和一个目标值，如果数组中存在该目标值，则返回其下标；否则返回目标值插入该数组的下标。    

  示例：   
  ```javascript
  // eg.1
  Input: [1,3,5,6], 5
  Output: 2

  // eg.2
  Input: [1,3,5,6], 2
  Output: 1

  // eg.3
  Input: [1,3,5,6], 7
  Output: 4

  // eg.4
  Input: [1,3,5,6], 0
  Output: 0
  ``` 
    
- **思路**   
二分查找，复杂度O(logn)。   
Runtime: 52 ms, faster than 81.15% of JavaScript online submissions for Search Insert Position.   
Memory Usage: 33.8 MB, less than 81.25% of JavaScript online submissions for Search Insert Position.    


- **优化思路**   
无

- **高票答案对比**   
最高票：https://leetcode.com/problems/search-insert-position/discuss/15080/My-8-line-Java-solution    
思路一致。
