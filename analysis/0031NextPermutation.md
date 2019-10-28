## 题解：[20191028]#0031 Next Permutation
- **题干**   
实现获取下一个排列的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列。   
如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。     
必须原地修改，只允许使用额外常数空间。    

  示例：   
  ```javascript
  以下是一些例子，输入位于左侧列，其相应输出位于右侧列。
  1,2,3 → 1,3,2
  3,2,1 → 1,2,3
  1,1,5 → 1,5,1
  ``` 
    
- **思路**   
一个暴力的思路，首先分析下一个更大的排列的规律，下一个更大的排列的关键在于从后往前，找到最长的最大排列，下一个更大排列时，会尽可能小幅度的增大其前一位，最长最大排列转为最小排列，如下所示，下一更大排列为[2, 1, 3, 3, 1, 2, 4]：   
  ```
  2 1 3 2 | 4 3 1
          |————————————> 该位置之后是最长最大排列，下一更大排列时，
                        尽可能小的增大其前一位（找到最长最大排列中大于2的最小数字为3，
                        交换2和3），该位置后转化为最小排列
  ```  
  整理一下思路如下：    
  从后往前遍历数组nums，当前下标为i，数组长度为len：
  1. 如果当前已知最大元素nums[len-1] > nums[i-1]：找到nums\[j\](j>i-1)，nums[j]为大于nums[i-1]的最小数字，交换nums[j]和nums[i-1]，
  重新排序nums[i] ~ nums[len-1]，保持其从小到大排序，nums为所求；
  2. 否则将nums[i-1]冒泡排序到nums数组末端，保持nums[i-1] ~ nums[len-1]为一个从小到大排列的数列，重复第1步；   

  Runtime: 56 ms, faster than 96.99% of JavaScript online submissions for Next Permutation.   
  Memory Usage: 34.9 MB, less than 33.33% of JavaScript online submissions for Next Permutation.   

- **优化思路**   
无

- **高票答案对比**   
最高票：https://leetcode.com/problems/next-permutation/discuss/13867/C%2B%2B-from-Wikipedia    
思路同第一思路，这个问题的难点大概在于理解题目，如果能够清楚下一个更大排列的特征就能够很快解决问题！   