## 题解：[20191214]#0059 Spiral Matrix II
- **题干**   
输入一个正整数n，生成一个由元素1~n^2按照螺旋顺序填充的矩阵。    
示例：    
  ```
  // e.g.1
  Input: 3
  Output:
  [
    [ 1, 2, 3 ],
    [ 8, 9, 4 ],
    [ 7, 6, 5 ]
  ]
  ```

- **第一思路**   
思路同0054，先生成一个n x n大小的空矩阵，按照螺旋循环为每一个位置赋值，注意循环过程中，每次完成一行/一列剩余待赋值矩阵总行数/列数就减去1，时间复杂度O(n)。     
Runtime: 52 ms, faster than 84.64% of JavaScript online submissions for Spiral Matrix II.   
Memory Usage: 34.1 MB, less than 100.00% of JavaScript online submissions for Spiral Matrix II.   

- **优化思路**   
无  
- **高票答案对比**   
高票思路：https://leetcode.com/problems/spiral-matrix-ii/discuss/22282/4-9-lines-Python-solutions   
作者给出了3种python方案（真·大佬），理解一波实现了js版本：   
- **方案1**：从一个空矩阵开始，从里到外逆向的在矩阵中添加数字直到添加到数字1，每次都顺时针旋转矩阵，然后向矩阵顶部添加一行。    
  ```python
  ||  =>  |9|  =>  |8|      |6 7|      |4 5|      |1 2 3|
                   |9|  =>  |9 8|  =>  |9 6|  =>  |8 9 4|
                                       |8 7|      |7 6 5|
  # code
  def generateMatrix(self, n):
    A, lo = [], n*n+1
    while lo > 1:
        lo, hi = lo - len(A), lo
        A = [range(lo, hi)] + zip(*A[::-1]) # 旋转原始数组，插入第一行为lo~hi元素
    return A
  ```
  Runtime: 60 ms, faster than 36.06% of JavaScript online submissions for Spiral Matrix II.   
  Memory Usage: 35.6 MB, less than 100.00% of JavaScript online submissions for Spiral Matrix II.   
- **方案2**：同方案1，但是减少了帮助变量，使得代码更短，但是降低了代码可读性。由于访问了A[0][0]，所以必须对n=0的情况进行特殊处理。   
  ```python
  # code
  def generateMatrix(self, n):
    A = [[n*n]]
    while A[0][0] > 1:
        A = [range(A[0][0] - len(A), A[0][0])] + zip(*A[::-1])
    return A * (n>0)
  ```
- **方案3**：同第一思路，初始化一个全零矩阵，按照顺时针螺旋路径，向矩阵中填入1~n*n的值。当前方元素已经不是非0数据，向右转（这个判断条件乍看理所当然但是确实很妙）。       
  ```
  // code
  def generateMatrix(self, n):
    A = [[0] * n for _ in range(n)]
    i, j, di, dj = 0, 0, 0, 1
    for k in xrange(n*n):
        A[i][j] = k + 1
        if A[(i+di)%n][(j+dj)%n]:
            di, dj = dj, -di
        i += di
        j += dj
    return A
  ```
  Runtime: 44 ms, faster than 99.33% of JavaScript online submissions for Spiral Matrix II.   
  Memory Usage: 34.4 MB, less than 100.00% of JavaScript online submissions for Spiral Matrix II.    