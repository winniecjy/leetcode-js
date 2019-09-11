## 题解：[20190911]#0004 Median of Two Sorted Arrays
- **题干**   
求两个有序数组的中位数，要求时间复杂度为O(m+n)，假设两个数组不能同时为空。
示例：   
    ```javascript
    // e.g. 1
    nums1 = [1, 3]
    nums2 = [2]
    The median is 2.0

    // e.g.2
    nums1 = [1, 2]
    nums2 = [3, 4]
    The median is (2 + 3)/2 = 2.5
    ```
- **思路**   
归并排序的思路，排序后取中位数。      
Runtime: 116 ms, faster than 62.74% of JavaScript online submissions for Median of Two Sorted Arrays.   
Memory Usage: 39 MB, less than 87.23% of JavaScript online submissions for Median of Two Sorted Arrays.   

- **优化思路**   
不需要对数组进行完全排序，只要遍历一半，得知中位数即可返回，另外也不需要记录排序后数组每一位，只需要知道中位数对应位置的数字即可，也就是双指针法。时间复杂度O((m+n)/2)。    
Runtime: 96 ms, faster than 97.89% of JavaScript online submissions for Median of Two Sorted Arrays.
Memory Usage: 38.7 MB, less than 97.87% of JavaScript online submissions for Median of Two Sorted Arrays.
  

- **高票答案对比**   
最高票：https://leetcode.com/problems/longest-substring-without-repeating-characters/discuss/1729/11-line-simple-Java-solution-O(n)-with-explanation    
作者用了二分查找来实现，其时间复杂度为O(min(m, n))。原理比较巧妙，解释如下：   
首先理解中位数的概念是：将集合切割为等分两个子集，其中一个子集的元素永远大于另一个子集。   
据此，可以首先对集合A和集合B进行切割，对于长度为m的集合A共有m+1种切割方法，假设切割位置为i（0~m）；对于长度为n的集合B共有n+1中切割方法，假设切割位置为j(0~n)。切割后的集合A和集合B都有左右两个子集，其中右边的子集永远大于左边的子集，将切割后的集合A和集合B，左右分别合并。   
```
          左子集          |          右子集
A[0], A[1], ..., A[i-1]  |  A[i], A[i+1], ..., A[m-1]
B[0], B[1], ..., B[j-1]  |  B[j], B[j+1], ..., B[n-1]
```
如果此时能够确保两个条件：   
1. 左子集长度 == 右子集长度
2. 左子集的最大值 <= 右子集最小值   

那么此时符合中位数的定义，可以知道 中位数 = (左子集最大值 + 右子集最小值) / 2。   
这两个条件可以描述为：   
1. i + j == m - i + n - j (或当为奇数个时：m - i + n - j + 1)   
2. A[i-1] <= B[j] and B[j-1] <= A[i]    

为了确保j非负数，可以假设n>=m，i = 0 ~ m, j = (m + n + 1)/2 - i   

基于以上条件，我们可以通过二分查找来确定i的数值：  
```
0. i的取值范围为imin = 0，imax = m
1. i = (imin + imax) / 2, j = (m + n + 1)/2 - i   
2. 此时条件1固定满足，所以只需判断第二个条件即可，有三种情况：  
    2-1 B[j-1] <= A[i] and A[i-1] <= B[j] ：条件满足，停止搜索
    2-2 B[j-1] > A[i] ：A[i]过小，增大i的数值，A[i]随之增大，重复步骤2
    2-3 A[i-1] > B[j] ：B[j]过小，减小i的数值，j随之增大，B[j]随之增大，重复步骤2
```  
需要注意一下边界条件，当i-1<0时，只需比较B[j-1] <= A[i]；当j-1<0时，只需比较A[i-1] <= B[j]。   
(当i-1<0，j必大于0，可证：当i-1<0，j = (m+n+1)/2-i > (m+n+1)/2-m > (2m+1)/2-m > 0)

Runtime: 108 ms, faster than 82.54% of JavaScript online submissions for Median of Two Sorted Arrays.
Memory Usage: 39.4 MB, less than 55.32% of JavaScript online submissions for Median of Two Sorted Arrays.