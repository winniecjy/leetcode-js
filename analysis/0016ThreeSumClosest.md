## 题解：[20190922]#0016 3Sum Closest
- **题干**   
给出包含n个整数的数组nums，和一个目标值target。找出其中三个整数，相加之和最接近target并返回其相加之和。    
    示例：   
    ```javascript
    // e.g.1
    Given array nums = [-1, 2, 1, -4], and target = 1.
    The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
    ```
- **思路**   
这个题目与0015思路是一致的，实质上就是一个变形而已。a+b+c=target等价于b+c=target-a，假设a<=b<=c，则先对数组进行排序，然后先确定a的值，在其后寻找b和c。b和c的初始值分别为剩余数组的两端，当b+c>target-a时，较大值往中间走，当b+c<target-a时，较小值往中间走，当b+c==target-a时，直接返回结果，找到b+c与target-a最相近即为解。复杂度O(n^2)。      
Runtime: 60 ms, faster than 95.15% of JavaScript online submissions for 3Sum Closest.   
Memory Usage: 35.1 MB, less than 100.00% of JavaScript online submissions for 3Sum Closest.   
- **优化思路**   
无。

- **高票答案对比**   
最高票：https://leetcode.com/problems/3sum-closest/discuss/7872/Java-solution-with-O(n2)-for-reference   