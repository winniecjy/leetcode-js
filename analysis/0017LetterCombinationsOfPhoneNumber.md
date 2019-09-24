## 题解：[20190922]#0017 Letter Combinations of a Phone Number
- **题干**   
输入一个字符只包含2~9，返回所有可能的字母字符串代表。数字和字母的映射与手机九键一致，如下所示，注意1不匹配任何字母。   
![手机九键](http://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Telephone-keypad2.svg/200px-Telephone-keypad2.png)    
    示例：   
    ```javascript
    // e.g.1
    Input: "23"
    Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
    ```
    注意，虽然给出的示例是按照字典排序，但是答案可以以任意顺序输出。   
- **思路**   
一个全排列问题，第一思路是树的遍历，按照深度优先遍历DFS的思路先实现一波，复杂度O(V)，V表示节点数。   
Runtime: 56 ms, faster than 45.42% of JavaScript online submissions for Letter Combinations of a Phone Number.   
Memory Usage: 33.9 MB, less than 32.14% of JavaScript online submissions for Letter Combinations of a Phone Number.      
- **优化思路**   
第一思路实现用的是DFS递归方法。修改为BFS非递归方案，实际效果不是很好。   
Runtime: 56 ms, faster than 45.42% of JavaScript online submissions for Letter Combinations of a Phone Number.   
Memory Usage: 33.8 MB, less than 92.86% of JavaScript online submissions for Letter Combinations of a Phone Number.     

- **高票答案对比**   
最高票：https://leetcode.com/problems/3sum-closest/discuss/7872/Java-solution-with-O(n2)-for-reference   