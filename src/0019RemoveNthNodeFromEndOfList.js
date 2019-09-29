/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 * 第一思路
 */
var removeNthFromEndNormal = function(head, n) {
  let pA = new ListNode(0); // 被删除节点的前一节点
  let pB = head; // 被删除节点
  let pC = head; // 移动到最后一个节点
  pA.next = head;
  for (let i=0; i<n-1; i++) {
    if (pC !== null) pC = pC.next;
  }
  if (pC.next === null) { // 删除的是头结点
    return head.next;
  }
  else {
    while(pC.next !== null) {
      pA = pA.next;
      pB = pB.next;
      pC = pC.next;
    }
    pA.next = pB.next;
    pB = null;
    return head;
  }
};

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 * 优化思路
 */
var removeNthFromEndBetter = function(head, n) {
  let pA = head; // 被删除节点的前一节点
  let pB = head; // 移动到最后一个节点
  for (let i=0; i<n; i++) {
    if (pB.next !== null) pB = pB.next;
    else return head.next;
  }
  while(pB.next !== null) {
    pA = pA.next;
    pB = pB.next;
  }
  pA.next = pA.next.next;
  return head;
};

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 * 优化思路
 */
var removeNthFromEndVoted = function(head, n) {
  let newHead = new ListNode(0);
  newHead.next = head;
  let pA = newHead; // 被删除节点的前一节点
  let pB = newHead; // 移动到最后一个节点
  for (let i=0; i<n; i++) {
    if (pB.next !== null) pB = pB.next;
    else return head.next;
  }
  while(pB !== null) {
    pA = pA.next;
    pB = pB.next;
  }
  pA.next = pA.next.next;
  return newHead.next;
};