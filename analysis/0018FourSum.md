## 题解：[20190922]#0018 4Sum
- **题干**   
给出包含n个整数的数组和一个目标值target，找出其中所有相加为target的四个整数，并返回，返回结果不可有重复。   
    示例：   
    ```javascript
    // e.g.1
    Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.
    A solution set is:
    [
        [-1,  0, 0, 1],
        [-2, -1, 1, 2],
        [-2,  0, 0, 2]
    ]
    ``` 
- **思路**   
第一思路是类似与16题 three sum closest 的解题思路，但是使用两组双指针。先对数组进行排序。固定最小值和最大值，再使用双指针去确定中间两个数值，假设a<=b<=c<=d，b和c初始分别位于a的下一位和d的前一位，当四数之和小于target时，b往前移动，当大于target时，c往后移动，否则找到解。   
Runtime: 100 ms, faster than 56.05% of JavaScript online submissions for 4Sum.   
Memory Usage: 36.5 MB, less than 100.00% of JavaScript online submissions for 4Sum.    
- **优化思路**   
没得

- **高票答案对比**   
最高票：https://leetcode.com/problems/4sum/discuss/8545/Python-140ms-beats-100-and-works-for-N-sum-(Ngreater2)     
作者的思路其实也是类似于第一思路，但是他给出了一个更加普遍化的解，用于类似的这个问题，即求N个数的解等于target，主要是通过递归的思路，将N个数进行拆解到两数之和，再通过双指针进行求解。答案下的很多回复也表示这样解可以AC但是时间数据上并没有办法达到作者所说的那么好。   
所以又跑去看了一眼js的答案区，发现优化方案主要是通过排除一些不可能有解的a&d（a<=b<=c<=d）情况，可以说是很抠细节了：    
    - a+最大三数之和 < target
    - a+d+最大两数之和 < target
    - a * 4 > target   

    Runtime: 76 ms, faster than 97.56% of JavaScript online submissions for 4Sum.   
    Memory Usage: 36.8 MB, less than 81.82% of JavaScript online submissions for 4Sum.   