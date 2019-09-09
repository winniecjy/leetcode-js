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
暴力解，遍历数组相加结果，复杂度O(n^2)。   
Runtime: 116 ms, faster than 34.16% of JavaScript online submissions for Two Sum.   
Memory Usage: 34.8 MB, less than 38.02% of JavaScript online submissions for Two Sum.   
- **优化思路**   
由于已知目标，对应数组中的每一个数字所需要的另一个数字对是确定的，即对于目标9和当前数字2，可以确定需要数字7，所以通过一个Map结构记录每个数字对应的需求数字，遍历一次数组就可以得出结果，复杂度O(n)。   
Runtime: 56 ms, faster than 83.12% of JavaScript online submissions for Two Sum.   
Memory Usage: 35.1 MB, less than 23.97% of JavaScript online submissions for Two Sum.   
- **高票答案对比**   
最高票：https://leetcode.com/problems/two-sum/discuss/17/Here-is-a-Python-solution-in-O(n)-time   
与优化思路近似，反向实现，记录已经出现的数字下标，后面的数字通过查找需求数字是否已出现。   
Runtime: 56 ms, faster than 83.12% of JavaScript online submissions for Two Sum.   
Memory Usage: 35 MB, less than 26.45% of JavaScript online submissions for Two Sum.   