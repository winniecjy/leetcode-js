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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if (head === null) return head
  let len = 0;
  let tail = head;
  while(tail.next !== null) {
    len++;
    tail = tail.next;
  }
  len++;
  tail.next = head
  k = (len - k%len) - 1
  while(k>=0) {
    tail = tail.next;
    k--;
  }
  let ret = tail.next;
  tail.next = null;
  return ret;
};