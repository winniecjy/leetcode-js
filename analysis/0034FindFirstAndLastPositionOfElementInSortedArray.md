## 题解：[20191107]#0034 Find First and Last Position of Element in Sorted Array
- **题干**   
给出一个升序排列的整数数组，找出目标值target的范围。如果目标值不存在则返回[-1, -1]。    
要求算法的时间复杂度为O(logn)。         

  示例：   
  ```javascript
  // eg.1
  Input: nums = [5,7,7,8,8,10], target = 8
  Output: [3,4]

  // eg.2
  Input: nums = [5,7,7,8,8,10], target = 6
  Output: [-1,-1]
  ``` 
    
- **思路**   
二分查找。   
Runtime: 60 ms, faster than 44.98% of JavaScript online submissions for Search in Rotated Sorted Array.   
Memory Usage: 33.9 MB, less than 50.00% of JavaScript online submissions for Search in Rotated Sorted Array.   


- **优化思路**   
考虑合并两次二分查找，降低一些时间复杂度。   
Runtime: 48 ms, faster than 95.54% of JavaScript online submissions for Search in Rotated Sorted Array.   
Memory Usage: 33.9 MB, less than 42.31% of JavaScript online submissions for Search in Rotated Sorted Array.   

- **高票答案对比**   
最高票：https://leetcode.com/problems/search-in-rotated-sorted-array/discuss/14425/Concise-O(log-N)-Binary-search-solution   
思路同。   