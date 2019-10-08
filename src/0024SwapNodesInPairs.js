/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 第一思路
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  let vhead = new ListNode(999);
  vhead.next = head;
  let a = vhead;
  let b = a === null ? null : a.next;
  let c = b === null ? null : b.next;
  while(c !== null) {
    b.next = c.next;
    c.next = b;
    a.next = c;
    a = b;
    b = b.next;
    c = b === null ? null : b.next;
  }
  return vhead.next;
};

/**
 * 高票思路
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  if ((head == null)||(head.next == null)) return head;
  let n = head.next;
  head.next = swapPairs(head.next.next);
  n.next = head;
  return n;
};