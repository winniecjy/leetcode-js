/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 第一思路
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoListsNormal = function(l1, l2) {
  if(l1 == null) return l2;
  if(l2 == null) return l1;
  let head = new ListNode(0);
  let curr = head;
  while(l1 !== null || l2 !== null) {
    if (l1 !== null && l2 !== null) {
      if (l1.val <= l2.val) {
        curr.next = l1;
        l1 = l1.next;
      } else {
        curr.next = l2;
        l2 = l2.next;
      }
      curr = curr.next;
    } else if (l1 !== null) {
      curr.next = l1;
      break;
    } else {
      curr.next = l2;
      break;
    }
  }
  return head.next;
};

/**
 * 高票思路
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoListsVoted = function(l1, l2) {
  if(l1 == null) return l2;
  if(l2 == null) return l1;
  if(l1.val < l2.val){
    l1.next = mergeTwoListsVoted(l1.next, l2);
    return l1;
  } else{
    l2.next = mergeTwoListsVoted(l1, l2.next);
    return l2;
  }
};