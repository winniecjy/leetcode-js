## 题解：[20191008]#0024 Swap Nodes in Pairs
- **题干**  
给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。    
你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。   
    示例：   
    ```javascript
    Given 1->2->3->4, you should return the list as 2->1->4->3.
    ``` 
- **思路**   
对于链表...->a->b->c->d->...，交换节点b和c，有三个节点会受到影响，由于中间存在一定的拓扑顺序，所以应当按照如下顺序进行修改，b的next修改为c的next节点d，c的next修改为b，a的next修改为c。此时b和c交换完成。按照惯例加入虚拟头结点来避免头节点单独处理，同时通过3个指针来分别指向a，b，c节点，按照顺序处理链表，时间复杂度O(n)。      
Runtime: 48 ms, faster than 93.54% of JavaScript online submissions for Swap Nodes in Pairs.   
Memory Usage: 33.9 MB, less than 15.79% of JavaScript online submissions for Swap Nodes in Pairs.   
- **优化思路**   
这道题目比较简单，由于限制不允许修改节点值来达到目的，所以能想到的只有这个朴素的解法。      

- **高票答案对比**   
最高票：https://leetcode.com/problems/swap-nodes-in-pairs/discuss/11030/My-accepted-java-code.-used-recursion.   
作者通过递归来解决这个问题，这样子是将每一个阶段都视为头结点来进行处理，代码也可以达到更简洁，5行代码解决。       
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