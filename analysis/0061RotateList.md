## 题解：[20191216]#0061 Rotate List
- **题干**   
输入一个链表，旋转链表，将链表每个节点向右移动k个位置，其中k是非负数。   

  示例：    
  ```
  // e.g.1
  Input: 1->2->3->4->5->NULL, k = 2
  Output: 4->5->1->2->3->NULL
  Explanation:
  rotate 1 steps to the right: 5->1->2->3->4->NULL
  rotate 2 steps to the right: 4->5->1->2->3->NULL
  // e.g.2
  Input: 0->1->2->NULL, k = 4
  Output: 2->0->1->NULL
  Explanation:
  rotate 1 steps to the right: 2->0->1->NULL
  rotate 2 steps to the right: 1->2->0->NULL
  rotate 3 steps to the right: 0->1->2->NULL
  rotate 4 steps to the right: 2->0->1->NULL 
  ```

- **第一思路**   
先遍历一次链表，将链表的首尾相接，然后在链表的尾部走 (len - k%len)-1 步，将当前节点的下一节点设置为null，则旋转完成，时间复杂度O(n)。     
Runtime: 52 ms, faster than 99.04% of JavaScript online submissions for Rotate List.   
Memory Usage: 35.5 MB, less than 100.00% of JavaScript online submissions for Rotate List.   
- **优化思路**   
无  
- **高票答案对比**   
高票思路：https://leetcode.com/problems/rotate-list/discuss/22735/My-clean-C%2B%2B-code-quite-standard-(find-tail-and-reconnect-the-list)   
同第一思路。                 