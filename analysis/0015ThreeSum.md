## 题解：[20190920]#0015 3Sum
- **题干**   
给出包含n个整数的数组，找出其中相加为0的三个整数，并返回。    
    示例：   
    ```javascript
    // e.g.1
    Given array nums = [-1, 0, 1, 2, -1, -4],
    A solution set is:
    [
    [-1, 0, 1],
    [-1, -1, 2]
    ]
    ```
- **思路**   
a+b+c=0等价于b+c=-a，假设a<=b<=c。即以0为中点，必有一个数字a在左侧，一个数字c在右侧，另一数字b在两数之间，对数组进行排序，找到0位置，在左右两侧，分别确定a和c的位置，查找b位置。      
Runtime: 308 ms, faster than 17.57% of JavaScript online submissions for 3Sum.   
Memory Usage: 55.3 MB, less than 6.00% of JavaScript online submissions for 3Sum.   
- **优化思路**   
第一思路是固定两个数字去找中间数字，实际上应当是固定一个数字去找两个数字更高效一些，比如固定最小值/最大值去找另外两个值，此时可以缩小另外两个值的范围，同时缩小了可能性范围。    
a+b+c=0等价于b+c=-a，假设a<=b<=c，则先对数组进行排序，然后先确定a的值，在其后寻找b和c。b和c的初始值分别为剩余数组的两端，当b+c>-a时，较大值往中间走，当b+c<-a时，较小值往中间走，当b+c==-a时，则得到结果。注意对于同一个a，当找到对应的b和c时，此时的b和c需要去重，即跳过重复的b和c值。复杂度O(n^2)。      
Runtime: 152 ms, faster than 88.95% of JavaScript online submissions for 3Sum.      
Memory Usage: 46.9 MB, less than 62.00% of JavaScript online submissions for 3Sum.         

- **高票答案对比**   
最高票：https://leetcode.com/problems/3sum/discuss/7380/Concise-O(N2)-Java-solution
与优化思路一致。   