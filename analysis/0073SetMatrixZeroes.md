## 题解：[20200307]#0073 Set Matrix Zeroes
- **题干**   
输入一个m x n的矩阵，如果有一个元素为0，则其所在列和所在行元素都变为0。需要在输入矩阵上修改。    
示例：   
  ```javascript
  // e.g. 1
  Input: 
  [
    [1,1,1],
    [1,0,1],
    [1,1,1]
  ]
  Output: 
  [
    [1,0,1],
    [0,0,0],
    [1,0,1]
  ]
  // e.g. 2
  Input: 
  [
    [0,1,2,0],
    [3,4,5,2],
    [1,3,1,5]
  ]
  Output: 
  [
    [0,0,0,0],
    [0,4,5,0],
    [0,3,1,0]
  ]
  ```  
  进阶:
  - 一个直接的解决方案是使用  O(mn) 的额外空间，但这并不是一个好的解决方案。   
  - 一个简单的改进方案是使用 O(m + n) 的额外空间，但这仍然不是最好的解决方案。   
  - 你能想出一个常数空间的解决方案吗？   

- **第一思路**   
还是从最简单直接的思路开始，遍历数据，用一个数组记录每一列的0情况。时间复杂度O(mn)，空间复杂度O(n)。   
Runtime: 76 ms, faster than 92.67% of JavaScript online submissions for Set Matrix Zeroes.      
Memory Usage: 38.1 MB, less than 10.00% of JavaScript online submissions for Set Matrix Zeroes.     

- **优化思路**   
要空间复杂度的优化为常数空间，主要的限制在于找位置标记行列的0情况，所以将矩阵的第0行和第0列作为标记为记录行列情况，对矩阵进行两次遍历，第一次记录0情况，第二次更新矩阵，事件复杂度O(n)，空间复杂度O(1)。     
Runtime: 72 ms, faster than 98.51% of JavaScript online submissions for Set Matrix Zeroes.   
Memory Usage: 37.4 MB, less than 70.00% of JavaScript online submissions for Set Matrix Zeroes.   
- **高票答案对比**   
高票思路：https://leetcode.com/problems/set-matrix-zeroes/discuss/26014/Any-shorter-O(1)-space-solution    
同优化思路。    