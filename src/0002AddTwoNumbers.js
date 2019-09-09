/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * 第一思路
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbersNormal = function(l1, l2) {
  let res = null;
  let val1 = 0;
  let val2 = 0;
  let resBit = 0;
  let carry = 0;
  let prevNode = null;
  while(l1 !== null || l2 !== null || carry !== 0) {
    val1 = l1===null?0:l1.val;
    val2 = l2===null?0:l2.val;
    resBit = (val1+val2+carry)%10;
    if (prevNode === null) {
      prevNode = new ListNode(resBit);
      res = prevNode;
    } else {
      currNode = new ListNode(resBit);
      prevNode.next = new ListNode(resBit);
      prevNode = prevNode.next;
    }
    carry = parseInt((val1+val2+carry)/10);
    if (l1 !== null) l1 = l1.next;
    if (l2 !== null) l2 = l2.next;
  }

  return res;
};

/**
 * [error] 转换为数字相加再构造链表
 * 大数溢出
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbersTry1 = function(l1, l2) {
  let val1 = 0;
  let val2 = 0;
  let bit = 0;
  while(l1 !== null || l2 !== null || carry !== 0) {
    val1 += l1===null?0:l1.val*Math.pow(10, bit);
    val2 += l2===null?0:l2.val*Math.pow(10, bit);
    if (l1 !== null) l1 = l1.next;
    if (l2 !== null) l2 = l2.next;
    bit++;
  }
  let resNum = val1+val2;
  bit = 10;
  let retNode = null;
  let prevNode = null;
  while(resNum < bit) {
    if (prevNode === null) {
      prevNode = new ListNode(resNum%bit);
      retNode = prevNode;
    } else {
      prevNode.next = new ListNode(resNum%bit);
      prevNode = prevNode.next;
    }
    bit = bit*10;
  }

  return retNode;
};

/**
 * 第一思路
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbersBetter = function(l1, l2) {
  let res = new ListNode(0);
  let sum = 0;
  let prevNode = res;

  while(l1 !== null || l2 !== null) {
    sum = parseInt(sum/10);
    if (l1 !== null) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2 !== null) {
      sum += l2.val;
      l2 = l2.next;
    }
    prevNode.next = new ListNode(sum%10);
    prevNode = prevNode.next;
  }
  if (parseInt(sum/10) == 1) {
    prevNode.next = new ListNode(1);
  }

  return res.next;
};