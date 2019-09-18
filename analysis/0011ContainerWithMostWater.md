## 题解：[20190918]#0011 Container With Most Water
- **题干**   
给出n个非负整数数组arr，arr[i]标识在二维平面的点(i, arr[i])，二维平面中有n条竖线，其端点为(i,0)和(i,arr[i])。找出两条竖线使得他们之间能装最多的水，返回区域的面积。   
![示例](https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg) 
示例：   
    ```javascript
    Input: [1,8,6,2,5,4,8,3,7]
    Output: 49
    // 蓝色区域代表装水区域，容量为49
    ```
- **思路**   
以每根柱子为起点，计算到其后的柱子的面积，取最大值，复杂度O(n^2)。    
Runtime: 824 ms, faster than 10.95% of JavaScript online submissions for Container With Most Water.   
Memory Usage: 35.7 MB, less than 39.39% of JavaScript online submissions for Container With Most Water.   
- **优化思路**   
又想不出来，我要头秃了。      
- **高票答案对比**   
最高票：https://leetcode.com/problems/container-with-most-water/discuss/6099/Yet-another-way-to-see-what-happens-in-the-O(n)-algorithm   
Runtime: 56 ms, faster than 86.89% of JavaScript online submissions for Container With Most Water.   
Memory Usage: 35.5 MB, less than 66.67% of JavaScript online submissions for Container With Most Water.    
用两个指针分别指示容器的左右边界，左指针初始位于最左，右指针初始位于最右。比较当前容器大小与历史记录的大小，更新最大值。指针中的高度较小者向中间靠拢，计算最大值并更新，以此循环更新，直到左指针的位置>=右指针的位置，复杂度为O(n)。   
对于指针移动的简单理解：初始时两个指针间间距是最大的，当移动时，间距减小，那么容器容量大于当前值，只可能出现在高度高于当前容器的情况。由于容器的高度取决于高度较小者，当移动较大者时，容器高度只可能小于或等于当前容器高度，所以可以排除，移动高度较小者，假如下一柱体高度大于当前较小者，那么容器容量可能大于当前。   
