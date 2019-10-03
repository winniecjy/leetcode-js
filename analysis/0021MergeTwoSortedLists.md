## 题解：[20191003]#0021 Merge Two Sorted Lists
- **题干**  
合并两个有序链表，返回一个新链表。   
    示例：   
    ```javascript
    Input: 1->2->4, 1->3->4
    Output: 1->1->2->3->4->4
    ``` 
- **思路**   
这个问题让我想到了归并排序，归并排序是一种分治思路，将排序划分为小问题，合并两个有序链表。比较两个链表当前的头结点，将较小者放到新的结果链表中，同时其下一节点作为新的头结点。复杂度O(n)。          
Runtime: 60 ms, faster than 84.24% of JavaScript online submissions for Merge Two Sorted Lists.  
Memory Usage: 35.7 MB, less than 30.77% of JavaScript online submissions for Merge Two Sorted Lists.   
- **优化思路**   
无。    

- **高票答案对比**   
最高票：https://leetcode.com/problems/merge-two-sorted-lists/discuss/9715/Java-1-ms-4-lines-codes-using-recursion   
作者通过递归的写法，使得代码更加简洁，思路是一致的，不过对于一个O(n)复杂度的问题使用递归，个人感觉没必要。    
Runtime: 76 ms, faster than 15.86% of JavaScript online submissions for Merge Two Sorted Lists.   
Memory Usage: 35.6 MB, less than 74.36% of JavaScript online submissions for Merge Two Sorted Lists.   