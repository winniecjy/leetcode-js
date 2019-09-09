## 题解：[20190909]#0002 Add Two Numbers
- **题干**   
给出两个非空链表，逆序记录两个非负整数的每一位数字，将这两个数字相加，并返回一个逆序结果链表。除了数字0外，其他数字不存在前补零。   
示例：   
    ```javascript
    Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
    Output: 7 -> 0 -> 8
    // Explanation: 342 + 465 = 807.
    ```
- **思路**   
大数相加的思路，按位相加，记录进位和当前位加和结果，构造结果链表，复杂度O(n)。   
Runtime: 112 ms, faster than 73.83% of JavaScript online submissions for Add Two Numbers.   
Memory Usage: 39.2 MB, less than 13.89% of JavaScript online submissions for Add Two Numbers.        
- **优化思路**   
参照第一思路的数据，可以发现内存使用的效果比较不理想，用了比较多的空间，所以考虑直接将链表转化为普通数字相加，果然不出所料的大数溢出了。
- **高票答案对比**   
最高票：https://leetcode.com/problems/add-two-numbers/discuss/1010/Is-this-Algorithm-optimal-or-what    
实际实现效果差不多，主要的优化在于代码量，记录的是相加的和，而不是分为进位和当前位，另外返回值添加了一个虚拟头结点，减少了头结点判断。    
Runtime: 112 ms, faster than 73.83% of JavaScript online submissions for Add Two Numbers.   
Memory Usage: 39.6 MB, less than 11.11% of JavaScript online submissions for Add Two Numbers.   
