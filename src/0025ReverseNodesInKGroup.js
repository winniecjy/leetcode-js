/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  if (head === null || k<=1) return head;
  // 1. 检查长度是否大于等于k
  let nextGroupHead = head;
  for (let i=1; i<k; i++) {
    nextGroupHead = nextGroupHead.next;
    if (nextGroupHead === null) return head;
  }
  let reverseNum = 1;
  let a = head,
      b = a!==null?a.next:null,
      c= (a!==null&&b!==null)?b.next:null;
  a.next = null;
  while(reverseNum < k && a!==null && b!==null) {
    reverseNum++;
    b.next = a;
    if (reverseNum !== k) {
       a = b;
      b = c;
    console.log(reverseNum, k)
    if (c!==null) {
      c = c.next;
    }
    }
  }
  head.next = reverseKGroup(c, k);
  return b;
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