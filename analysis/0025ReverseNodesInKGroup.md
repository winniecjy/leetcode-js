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
时间复杂度较高，考虑到递归的过程中都首先对链表长度进行了判断，实际上可以整合在翻转过程中，时间复杂度上就降低了一半，由O(2n)降为O(n)。   
Runtime: 72 ms, faster than 84.85% of JavaScript online submissions for Reverse Nodes in k-Group.   
Memory Usage: 37.7 MB, less than 100.00% of JavaScript online submissions for Reverse Nodes in k-Group.   

- **高票答案对比**   
最高票：https://leetcode.com/problems/reverse-nodes-in-k-group/discuss/11423/Short-but-recursive-Java-code-with-comments   
思路是一致的，评论区大佬给出了一个简洁的非递归方案如下，明明是一样的思路，大佬的代码可读性和简洁性上都好了很多，值得学习。       
  ```javascript
  var reverseKGroup = function(head, k) {
    // 得到链表长度
    let len = 0;
    for (let i = head; i !== null; len++, i = i.next);
    let dmy = new ListNode(0);
    dmy.next = head;

    // 每一组翻转
    for(let prev = dmy, tail = head; len >= k; len -= k) {
      for (let i = 1; i < k; i++) {
        let next = tail.next.next;
        tail.next.next = prev.next;
        prev.next = tail.next;
        tail.next = next;
      }
      prev = tail;
      tail = tail.next;
    }
    return dmy.next;
  }
  ```
  
  Runtime: 80 ms, faster than 43.11% of JavaScript online submissions for Reverse Nodes in k-Group.   
  Memory Usage: 37.4 MB, less than 100.00% of JavaScript online submissions for Reverse Nodes in k-Group.   