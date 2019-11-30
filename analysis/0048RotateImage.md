## 题解：[20191130]#0048 Rotate Image
- **题干**   
输入一个n x n的二维矩阵代表一个图片，顺时针旋转图片90度。    
说明：    
必须直接旋转输入的2D矩阵，不能够重新开辟空间旋转矩阵。   
示例：   
  ```
  // e.g. 1
  输入:
  [
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ]
  旋转输入的矩阵:
  [
    [7,4,1],
    [8,5,2],
    [9,6,3]
  ]

  // e.g. 2
  输入:   
  [
    [ 5, 1, 9,11],
    [ 2, 4, 8,10],
    [13, 3, 6, 7],
    [15,14,12,16]
  ]
  旋转输入的矩阵:
  [
    [15,13, 2, 5],
    [14, 3, 4, 1],
    [12, 6, 8, 9],
    [16, 7,10,11]
  ]
  ```

- **第一思路**   
对于nxn矩阵，旋转90度后，(row, col)位置的数据为旋转前(n-1-col, row)。通过map记录旋转前矩阵数值，遍历数组替换数值，时间复杂度为O(n)，空间复杂度为O(n)。   
Runtime: 52 ms, faster than 85.41% of JavaScript online submissions for Rotate Image.   
Memory Usage: 34.3 MB, less than 10.53% of JavaScript online submissions for Rotate Image.   

- **优化思路**   
可以看到空间复杂度还是比较高的，考虑是否可以直接交换两个数据的位置完成旋转。这样就不需要记录旋转前矩阵。可以通过以下的方法：   
  ```JavaScript
  // 1. 翻转行顺序
  // 2. 交换(row, col)和(col, row)    
  // 简单的示例如下
  a b c      g h i      g d a
  d e f  =>  d e f  =>  h e b
  g h i      a b c      i f c
  ```
  时间复杂度为O(n)，空间复杂度为O(1)。  
  Runtime: 52 ms, faster than 85.41% of JavaScript online submissions for Rotate Image.   
  Memory Usage: 33.7 MB, less than 100.00% of JavaScript online submissions for Rotate Image.   

- **高票答案对比**   
高票思路：https://leetcode.com/problems/rotate-image/discuss/18872/A-common-method-to-rotate-the-image    
同优化思路。   