## 题解：[20191119]#0042 Trapping Rain Water
- **题干**   
给出n个非负整数代表高度图，每个柱子的宽度为1，计算当下雨之后可以存储多少雨水。   
![示例图](https://assets.leetcode.com/uploads/2018/10/22/rainwatertrap.png)   
如果所示，高度图通过一个数组[0,1,0,2,1,0,1,3,2,1,2,1]表示。在示例中，6单位的雨水（蓝色部分）被存储。感谢Marcos提供的图片。   
  示例：   
  ```
  // eg.1
  Input: [0,1,0,2,1,0,1,3,2,1,2,1]
  Output: 6
  ```
- **思路**   
记录当前遇到的最高的柱子的下标，当遇到比当前已知柱子更高或等高的柱子，计算中间的储存水量。这样需要从左到右、从右到左分别遍历一次（第二次只需要遍历到最高柱子）。时间复杂度O(2n) = O(n);   
Runtime: 64 ms, faster than 63.04% of JavaScript online submissions for Trapping Rain Water.   
Memory Usage: 35.1 MB, less than 92.86% of JavaScript online submissions for Trapping Rain Water.   

- **优化思路**   
这个题目与[0011](https://github.com/jinglecjy/leetcode-js/blob/master/analysis/0011ContainerWithMostWater.md)十分类似，想起了熟悉双指针大法。   
还是按照第一思路的做法，启用双指针，左右指针分别从数组的左右两端开始，当左指针大于右指针时，右指针移动；反之左指针移动，直到两个指针相遇。这样可以保证最后相遇的位置一定是最高的柱子。中间的储水量是可计算的，永远是当前遍历的第二高的柱子到最高柱子的中间水量。这样只需要一次遍历就可以了，时间复杂度O(n)。       
Runtime: 60 ms, faster than 80.89% of JavaScript online submissions for Trapping Rain Water.   
Memory Usage: 35.1 MB, less than 92.86% of JavaScript online submissions for Trapping Rain Water.    
 

- **高票答案对比**   
高票思路：https://leetcode.com/problems/trapping-rain-water/discuss/17357/Sharing-my-simple-c%2B%2B-code%3A-O(n)-time-O(1)-space   
同优化思路，由于我的优化思路是由第一思路演变过来，受到了一些影响，有一些冗余变量，比如记录临时储水量，实际上直接加到结果中就可以了。   
Runtime: 56 ms, faster than 92.48% of JavaScript online submissions for Trapping Rain Water.   
Memory Usage: 35 MB, less than 100.00% of JavaScript online submissions for Trapping Rain Water.      