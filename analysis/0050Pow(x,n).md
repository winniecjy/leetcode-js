## 题解：[20191204]#0050 Pow(x, n)
- **题干**   
实现pow(x, n)函数，计算x的n次方。    
示例：    
  ```
  // e.g.1
  Input: 2.00000, 10
  Output: 1024.00000
  // e.g.2
  Input: 2.10000, 3
  Output: 9.26100
  // e.g.3
  Input: 2.00000, -2
  Output: 0.25000
  Explanation: 2^(-2) = 1/2^2 = 1/4 = 0.25
  ```
  说明：
  - -100.0 < x < 100.0
  - n是一个32位有符号整数，大小范围为[-2^31, 2^31-1]
- **第一思路**   
在所有运算之中，幂运算是最复杂的一种。如果直接进行运算，时间复杂度为O(n)。有题干可知n是32位有符号整数，当n极大时，程序运算时间会较长。           
之前有见过幂乘题目的一个优化思路，以pow(5, 6)大概思路如下：   
  - 5^6 = 5^(4+2) = 5^4\*5^2   
    5^4 = 5^2\*5^2   
  - 将6转换为二进制表示6 = 4+2 = 2^2+2^1 = 110(2)    
    按照二进制顺序从右到左，2^(i+1) = 2^i+2^i    
    5^4 = 5^(2^2) = 5^(2^1+2^1) = 5^(2^1) \* 5^(2^1)   

  对于n<0，可以将x转换为小数x^(-1*n) = (x^-1)^n，时间复杂度为O(logn)。   
  Runtime: 56 ms, faster than 80.47% of JavaScript online submissions for Pow(x, n).     
  Memory Usage: 33.9 MB, less than 70.59% of JavaScript online submissions for Pow(x, n).   


- **优化思路**   
无

- **高票答案对比**   
高票思路：https://leetcode.com/problems/powx-n/discuss/19546/Short-and-easy-to-understand-solution   
同第一思路，但是采用了递归实现，更加易于理解，代码更加简洁。    
Runtime: 64 ms, faster than 36.29% of JavaScript online submissions for Pow(x, n).   
Memory Usage: 33.9 MB, less than 47.06% of JavaScript online submissions for Pow(x, n).   