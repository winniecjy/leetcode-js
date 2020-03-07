## 题解：[20200308]#0074 Search a 2D Matrix
- **题干**   
从 m x n 的矩阵确认是否有目标值，输入矩阵有以下性质：       
  - 每一行的数字都是从左到右有序排列。   
  - 每一行的第一个数字都大于上一行的最后一个数字。   
  ```javascript
  // e.g.1
  Input:
  matrix = [
    [1,   3,  5,  7],
    [10, 11, 16, 20],
    [23, 30, 34, 50]
  ]
  target = 3
  Output: true

  // e.g.2
  Input:
  matrix = [
    [1,   3,  5,  7],
    [10, 11, 16, 20],
    [23, 30, 34, 50]
  ]
  target = 13
  Output: false
  ```
- **第一思路**   
由矩阵性质可知，矩阵中从左到右从上到下，数字从小到大排列。第一思路是将二维矩阵转化为一维数组，在一维数组中进行二分查找，时间复杂度O(nlogn)，空间复杂度O(mn)。      
Runtime: 56 ms, faster than 69.97% of JavaScript online submissions for Search a 2D Matrix.   
Memory Usage: 36.4 MB, less than 50.00% of JavaScript online submissions for Search a 2D Matrix.   

- **优化思路**   
为了优化复杂度，直接在二维矩阵里进行二分查找，时间复杂度O(nlogn)，空间复杂度O(1)。    
Runtime: 52 ms, faster than 86.34% of JavaScript online submissions for Search a 2D Matrix.   
Memory Usage: 34.5 MB, less than 50.00% of JavaScript online submissions for Search a 2D Matrix.   
- **高票答案对比**   
高票思路：https://leetcode.com/problems/search-a-2d-matrix/discuss/26220/Don't-treat-it-as-a-2D-matrix-just-treat-it-as-a-sorted-list    
同优化思路。    