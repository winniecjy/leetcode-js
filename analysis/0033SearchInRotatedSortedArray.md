## 题解：[20191103]#0033 Search in Rotated Sorted Array
- **题干**   
假设按照升序排序的数组在未知的某个点上进行了旋转(例如数组[0,1,2,4,5,6,7]可能变为[4,5,6,7,0,1,2])。    
搜索一个给定的目标值，如果数组中存在这个目标值，则返回它的下标，否则返回-1。   
假设数组中不存在重复的元素，算法时间复杂度必须是O(log n)级别。     
  示例：   
  ```javascript
  // eg.1
  Input: nums = [4,5,6,7,0,1,2], target = 0
  Output: 4

  // eg.2
  Input: nums = [4,5,6,7,0,1,2], target = 3
  Output: -1
  ``` 
    
- **思路**   
看到这个实际复杂度要求，猜测会不会是二分查找的变形。初始思路是先用二分查找找到旋转点，然后根据target与nums[0]和nums[len-1]的比较，在旋转点的左侧/右侧再进行二分查找，时间复杂度O(logn)。    
Runtime: 60 ms, faster than 44.98% of JavaScript online submissions for Search in Rotated Sorted Array.   
Memory Usage: 33.9 MB, less than 50.00% of JavaScript online submissions for Search in Rotated Sorted Array.   


- **优化思路**   
考虑合并两次二分查找，降低一些时间复杂度。   
Runtime: 48 ms, faster than 95.54% of JavaScript online submissions for Search in Rotated Sorted Array.   
Memory Usage: 33.9 MB, less than 42.31% of JavaScript online submissions for Search in Rotated Sorted Array.   

- **高票答案对比**   
最高票：https://leetcode.com/problems/search-in-rotated-sorted-array/discuss/14425/Concise-O(log-N)-Binary-search-solution   
思路同。   