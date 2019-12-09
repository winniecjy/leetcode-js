## 题解：[20191208]#0054 Spiral Matrix
- **题干**   
给出一个m x n的矩阵，按照顺时针顺序输出矩阵所有元素。    
    
  示例：    
  ```
  // e.g.1
  Input:
  [
  [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ]
  ]
  Output: [1,2,3,6,9,8,7,4,5]
  // e.g.2
  Input:
  [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9,10,11,12]
  ]
  Output: [1,2,3,4,8,12,11,10,9,5,6,7]
  ```
- **第一思路**   
用回溯的算法，每次顺时针遍历数组的最外层一圈元素，时间复杂度O(n)。   
Runtime: 52 ms, faster than 70.91% of JavaScript online submissions for Spiral Matrix.   
Memory Usage: 33.9 MB, less than 18.18% of JavaScript online submissions for Spiral Matrix.   
- **优化思路**   
无。   

- **高票答案对比**   
高票思路：https://leetcode.com/problems/spiral-matrix/discuss/20599/Super-Simple-and-Easy-to-Understand-Solution   
同第一思路。评论区有一个游戏开发者提出可以加入一个方向偏移数组来指示，螺旋遍历的方向是右->下->左->上循环。通过方向遍历数组可以简化代码，避免4个方向类似代码重复。    
Runtime: 48 ms, faster than 88.44% of JavaScript online submissions for Spiral Matrix.    
Memory Usage: 33.8 MB, less than 36.36% of JavaScript online submissions for Spiral Matrix.   