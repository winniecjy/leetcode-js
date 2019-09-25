## 题解：[20190922]#0017 Letter Combinations of a Phone Number
- **题干**   
输入一个字符只包含2~9，返回所有可能的字母字符串代表。数字和字母的映射与手机九键一致，如下所示，注意1不匹配任何字母。   
![手机九键](https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Telephone-keypad2.svg/200px-Telephone-keypad2.png)    
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
第一思路实现用的是DFS递归方法。修改为BFS非递归方案，时间复杂度优化效果不是很好，但是空间复杂度优化了。   
Runtime: 56 ms, faster than 45.42% of JavaScript online submissions for Letter Combinations of a Phone Number.   
Memory Usage: 33.8 MB, less than 92.86% of JavaScript online submissions for Letter Combinations of a Phone Number.     

- **高票答案对比**   
最高票：https://leetcode.com/problems/letter-combinations-of-a-phone-number/discuss/8064/My-java-solution-with-FIFO-queue   
作者的思路也是BFS实现，但是借助了队列实现，对于第i个数字，队列中存储了前i-1个数字的全排列结果，取出队首的字符结果，拼接数字i的所有可能结果，进入队列排队，直到当前队首的字符串长度等于i，则开始处理i+1个数字。   
Runtime: 44 ms, faster than 96.70% of JavaScript online submissions for Letter Combinations of a Phone Number.    
Memory Usage: 33.9 MB, less than 32.14% of JavaScript online submissions for Letter Combinations of a Phone Number.     
顺便看了一眼JavaScript下的最高票，发现了一个之前不太用到的函数`reduce`，该函数为数组中的每一个元素依次执行回调函数，接受四个参数：初始值（或者上一次回调函数的返回值），当前元素值，当前索引，调用 reduce 的数组。在数组去重的实现中常常可以见到。      
    ```
    var res = arr.reduce((pre, curr, index) => {
        if (pre.includes(curr)) {
            return pre;
        } else {
            return pre.concat(curr);
        }
    }, []) // 当arr为空时会报错，所以设置初始值会较为安全；
    ```