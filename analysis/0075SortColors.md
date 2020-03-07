## 题解：[20200309]#0075 Sort Colors
- **题干**   
输入一个数组表示n个红白蓝色的物体，在原数组上对物体进行排序，使得同颜色的物体相邻，颜色顺序为红色、白色、蓝色。   
输入的数组中，用0，1，2分别表示红色、白色、蓝色。   
注意：不支持使用库中的排序函数。    
  ```javascript
  // e.g.1
  Input: [2,0,2,1,1,0]
  Output: [0,0,1,1,2,2]
  ```
  进阶：   
  - 一个直观的解决方案是使用计数排序的两趟扫描算法。
  首先，迭代计算出0、1 和 2 元素的个数，然后按照0、1、2的排序，重写当前数组。
  - 你能想出一个仅使用常数空间的一趟扫描算法吗？
- **第一思路**   
题干天花乱坠，其实就是个简单的排序，这个数组可以保证只有0、1、2三个数字。使用桶排序，遍历第一次记录0、1、2的个数，遍历第二次直接重写数组即可。     
Runtime: 52 ms, faster than 88.03% of JavaScript online submissions for Sort Colors.   
Memory Usage: 33.6 MB, less than 100.00% of JavaScript online submissions for Sort Colors.   

- **优化思路**   
如果只遍历一次，熟悉的双指针大法就可以派上用场了。左指针从数组最左侧开始，记录最后一个0的位置；右指针从数组最右侧开始，记录第一个2的位置；   
从左到右扫描一次数组，当遇到0时，则将当前元素与左指针后一位置交换；当遇到2，则将当前元素与右指针前一位置交换元素；   
时间复杂度O(n)，空间复杂度O(1)。      
Runtime: 48 ms, faster than 96.66% of JavaScript online submissions for Sort Colors.   
Memory Usage: 33.6 MB, less than 100.00% of JavaScript online submissions for Sort Colors.   

- **高票答案对比**   
高票思路：https://leetcode.com/problems/sort-colors/discuss/26472/Share-my-at-most-two-pass-constant-space-10-line-solution   
同第一思路。   
