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
 * 优化思路
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
 * @param {number} k
 * @return {ListNode}
 */
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
