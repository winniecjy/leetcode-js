## 题解：[20191009]#0025 Reverse Nodes in k-Group
- **题干**  
给你一个链表，每 k 个节点一组进行翻转，请你返回翻转后的链表。   
k 是一个正整数，它的值小于或等于链表的长度。   
如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。   
    示例：   
    ```javascript
    Given this linked list: 1->2->3->4->5
    For k = 2, you should return: 2->1->4->3->5
    For k = 3, you should return: 3->2->1->4->5
    ``` 
  说明:
  - 你的算法只能使用常数的额外空间。   
  - 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。   
- **思路**   
0024问题的一个扩展，可以参考0024高票答案的思路，将每k个节点都视作一组独立的节点，通过递归的方式来处理每k个节点。对于每组节点，进行翻转，也就是对于a->b->c->d，初始通过3个指针pa，pb，pc来分别记录节点a，b，c：
  - 节点b的next指向节点a，此时链表为a<-b c->d，a/b翻转完成   
  - pa/pb/pc分别记录节点b/c/d   
  - 节点c的next指向节点b，此时链表为a<-b<-c d，a/b/c翻转完成
  - 重复...   

Runtime: 172 ms, faster than 5.44% of JavaScript online submissions for Reverse Nodes in k-Group.   
Memory Usage: 45.2 MB, less than 100.00% of JavaScript online submissions for Reverse Nodes in k-Group.   

- **优化思路**   
时间复杂度较高 

- **高票答案对比**   
最高票：https://leetcode.com/problems/swap-nodes-in-pairs/discuss/11030/My-accepted-java-code.-used-recursion.   
作者通过递归来解决这个问题，这样子是将每一个阶段都视为头结点来进行处理，代码也可以达到更简洁，5行代码解决，相较而言较简洁的代码习惯是：对于需要多个变量来记录的循环，最好通过for循环来定义，而非定义在外部。       
  ```javascript
  var swapPairs = function(head) {
    if ((head == null)||(head.next == null)) return head;
    let n = head.next;
    head.next = swapPairs(head.next.next);
    n.next = head;
    return n;
  };
  ```
  Runtime: 48 ms, faster than 93.54% of JavaScript online submissions for Swap Nodes in Pairs.   
  Memory Usage: 33.8 MB, less than 68.42% of JavaScript online submissions for Swap Nodes in Pairs.   