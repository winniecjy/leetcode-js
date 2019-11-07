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
先通过二分查找初步找到目标值的位置，如果找不到则直接返回[-1,-1]，否则就在找到的位置向左右扩展，直到找到目标值的边界，返回结果。      
Runtime: 44 ms, faster than 99.36% of JavaScript online submissions for Find First and Last Position of Element in Sorted Array.   
Memory Usage: 35.4 MB, less than 10.00% of JavaScript online submissions for Find First and Last Position of Element in Sorted Array.    


- **优化思路**   
无

- **高票答案对比**   
最高票：https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/discuss/14699/Clean-iterative-solution-with-two-binary-searches-(with-explanation)    
通过两次二分查找，分别找到左边界和右边界，注意到第二次边界查询并不需要从数组首尾开始，而是在左边界~数组末尾之间查找。       
Runtime: 52 ms, faster than 87.55% of JavaScript online submissions for Find First and Last Position of Element in Sorted Array.   
Memory Usage: 35 MB, less than 80.00% of JavaScript online submissions for Find First and Last Position of Element in Sorted Array.    
