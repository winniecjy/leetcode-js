## 题解：[20191206]#0053 Maximum Subarray
- **题干**   
输入一个整数数组，找出和最大的连续子数组（至少包含一个数字），并返回其和。    
示例：    
  ```
  // e.g.1
  Input: [-2,1,-3,4,-1,2,1,-5,4],
  Output: 6
  Explanation: [4,-1,2,1] 是和最大的子数组，sum = 6.
  ```
  跟进：   
  如果已经得出O(n)的解决方案，可以试试使用分治的思路，实现方案更加巧妙。   
- **第一思路**   
比较简单的动态规划思路，以当前位置为结束位置的子序列最大和currMax，可以通过前一位置为结束位置的子序列最大和prevMax得出。则`currMax=prevMax+nums[i]>nums[i]?prevMax+nums[i]:nums[i]`，时间复杂度O(n)。    
Runtime: 56 ms, faster than 85.25% of JavaScript online submissions for Maximum Subarray.   
Memory Usage: 35.3 MB, less than 68.52% of JavaScript online submissions for Maximum Subarray.   
- **优化思路**   
首先声明，这个题目用分治的思路，实在是没啥必要。时间复杂度更高，为O(nlogn)。   
对于一个数组，可以将其从中间分割为左右两个数组，左右分别求取最大子序和，同时求取从中间位置分别向左右延展得到的最大子序和（这一部分个人觉得不大符合分治的思想），比较这三个和，最大者为所求。  
Runtime: 64 ms, faster than 44.37% of JavaScript online submissions for Maximum Subarray.   
Memory Usage: 37.9 MB, less than 5.55% of JavaScript online submissions for Maximum Subarray.     
- **高票答案对比**   
高票思路：https://leetcode.com/problems/maximum-subarray/discuss/20193/DP-solution-and-some-thoughts   
同第一思路。   