## 题解：[20190928]#0019 Remove Nth Node From End of List
- **题干**  
给出一个链表，移除倒数第N个节点，返回结果链表的头节点。 
    示例：   
    ```javascript
    // e.g.1
    Given linked list: 1->2->3->4->5, and n = 2.
    After removing the second node from the end, the linked list becomes 1->2->3->5.
    ``` 
- **思路**   
像这种在链表中找某一位置的节点的问题，常常都是使用到双指针法，这个问题可以通过双指针法来解决，指针a从头结点出发，往前走n-1步，指针b位于头结点，指针a和指针b同时向前走，当指针a到达最后一个节点时，指针b就是需要移除的节点，注意处理一下删除的是头结点的情况即可，时间复杂度O(n)。   
Runtime: 56 ms, faster than 81.04% of JavaScript online submissions for Remove Nth Node From End of List.    
Memory Usage: 34.1 MB, less than 36.36% of JavaScript online submissions for Remove Nth Node From End of List.    
- **优化思路**   
稍微优化一下代码，按照第一思路需要3个指针，记录被删除节点和被删除节点的前一节点，实际上被删除节点可以忽视，只需要标记被删除节点的前一节点和最后节点的指针即可，降低代码量。   
Runtime: 56 ms, faster than 81.04% of JavaScript online submissions for Remove Nth Node From End of List.    
Memory Usage: 34.1 MB, less than 36.36% of JavaScript online submissions for Remove Nth Node From End of List.    

- **高票答案对比**   
最高票：https://leetcode.com/problems/remove-nth-node-from-end-of-list/discuss/8804/Simple-Java-solution-in-one-pass   
思路是一致的，但是作者加了一个虚拟头结点，两个指针从虚拟头结点作为起点出发，这样就不需要对删除头结点做单独的判断，思路上减少了情况判断，效果差不多。当我们需要对头结点做特殊处理时，都可以考虑加入一个虚拟头结点来减少情况考虑。   
Runtime: 60 ms, faster than 58.63% of JavaScript online submissions for Remove Nth Node From End of List.   
Memory Usage: 34 MB, less than 81.82% of JavaScript online submissions for Remove Nth Node From End of List.   