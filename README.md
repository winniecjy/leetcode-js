# leetcode-js
记录刷leetcode分析过程，希望一点点进步！
- leetcode地址
https://leetcode.com/problemset/algorithms/

- 刷题顺序
按照顺序刷第一遍

- 记录思路
题目分析/关键 -> 思路 -> 实现 -> 优化思路 -> 对比高票答案 -> 结论/问题回顾

## 链表

## 动态规划

## 排序

## 树

## 搜索查找
- hash table
    - #0001 Two Sum


### [20190908] #0001 Two Sum
- **题目分析**   
给出一个数字数组和目标结果，数组中的两个数字相加会等于目标结果（唯一解），每个数字只能使用一次，要求返回这两个数字的下标。
示例：
    ```javascript
    Input: nums = [2, 7, 11, 15], target = 9,
    // Because nums[0] + nums[1] = 2 + 7 = 9,
    Output: [0, 1].
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