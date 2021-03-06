## 题解：[20191119]#0041 First Missing Positive
- **题干**   
从未排序的数组中，找到最小的不存在于数组中的正整数。   
  示例：   
  ```
  // eg.1
  Input: [1,2,0]
  Output: 3

  // eg.2
  Input: [3,4,-1,1]
  Output: 2

  // eg.3
  Input: [7,8,9,11,12]
  Output: 1
  ```
  说明：   
  算法的时间复杂度为O(n)，使用额外空间为常数级别。   
- **思路**   
没有什么思路，尝试从题干倒推理一下：      
  - 首先时间复杂度要求为O(n)，说明不需要对数组进行排序（最快的排序也需要O(nlogn)）。   
  - 最小正整数有两种落点情况：      
    ```
    ..., k, k+1, k+2,  j, j+1, j+2, ...
      |              |-------------------- 情况1：当k===1 && j>k+3，即数组中存在1，
      |                                    最小数字的最长连续数组的下一位k+3为所求
      |----------------------------------- 情况2：当k>1，即数组中不存在1，则为1

    情况2可以通过1次遍历得出结果（即不存在1）   
    若非情况2，可知当前数组中存在最小正整数1，有一种特殊情况是数组为1~len的连续正整数数组，则结果为len+1
    ```
  - 由于要求空间复杂度为O(1)，所以只有两个思路，一个是通过固定数量的变量；一个是在数组本身动手   

  从特殊情况（数组为1~len的连续正整数数组）和情况2一定从1开始，可以发现一个规律，**如果进行了排序，此时最小数字的最长连续数组数值，永远都为下标+1**。   
  由于我们不关心数组中其他数字的位置，所以可以将val\<len的数字与arr[val-1]的数字交换位置（一次遍历O(n)）。再遍历一次数组，找到第一个`index+1 !== arr[index]`即为所求。   
  Runtime: 56 ms, faster than 74.45% of JavaScript online submissions for First Missing Positive.   
  Memory Usage: 34.4 MB, less than 75.00% of JavaScript online submissions for First Missing Positive.    
- **优化思路**   
无。   

- **高票答案对比**   
高票答案：https://leetcode.com/problems/first-missing-positive/discuss/17071/My-short-c%2B%2B-solution-O(1)-space-and-O(n)-time   
同第一思路，优化一些判断。     
  Runtime: 52 ms, faster than 91.76% of JavaScript online submissions for First Missing Positive.  
  Memory Usage: 34.4 MB, less than 66.67% of JavaScript online submissions for First Missing Positive.  