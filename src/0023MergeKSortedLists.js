/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 第一思路
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKListsNormal = function(lists) {
  if (lists.length === 0) return null;
  else {
    while(lists.length > 1) {
      let newArr = [];
      for (let i=0; i<lists.length; i+=2) {
        if (i === lists.length-1) {
          newArr.push(lists[i]);
          break;
        }
        else {
          let l1 = lists[i];
          let l2 = lists[i+1];
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
          newArr.push(head.next);
        }
      }
      lists = newArr;
    }
    return lists.length>0? lists[0]:[]; 
  }
};

/**
 * 高票思路
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKListsVoted = function(lists) {
  if (lists.length === 0) return null;
  else {
    let PriorityQueue = function (compareFn) { // 最小堆
      let arr = [];
      let arrLen = 0;
      compareFn = typeof compareFn === 'function' ? compareFn : (a, b) => {
        if (a < b) return -1;
        else if (a === b) return 0;
        else return 1;
      } 
      let push = (val) => {
        arr[arrLen++] = val;
        if (arrLen > 1) {
          for (let i=arrLen-1; parseInt((i-1)/2)>=0; i=parseInt((i-1)/2)) {
            let fIndex = parseInt((i-1)/2);
            if (i === fIndex || compareFn(arr[i], arr[fIndex])>=0) break;
            if (compareFn(arr[i], arr[fIndex]) < 0) {
              arr[i] = arr[fIndex];
              arr[fIndex] = val;
            }
          }
        }
      }
      let delMin = () => {
        if (arrLen === 0) return null;
        let retVal = arr[0];
        arr[0] = arr[arrLen-1];
        arrLen--;
        // 堆顶元素下沉
        let child = 1;
        for(let i=0; i*2+1<arrLen; i=child) {
          // 找出较小的子节点，比较替换
          child = i*2+1;
          if (child !== arrLen-1 && compareFn(arr[child+1], arr[child]) < 0) {
            child++;
          }
          if (compareFn(arr[child], arr[i]) < 0) {
            arr[i] = arr[child];
            arr[child] = arr[arrLen];
          }
          else break;
        }
        return retVal;
      }
      let isEmpty = () => {
        return arrLen === 0;
      }

      return {
        push,
        delMin,
        isEmpty
      }
    }
    let pQueue = new PriorityQueue();
    for (let i=0; i<lists.length; i++) {
      let ll = lists[i];
      while(ll !== null) {
        pQueue.push(ll.val);
        ll = ll.next;
      }
    }
    // 构建结果链表
    let head = new ListNode(0);
    let tailed = head;
    while(!pQueue.isEmpty()) {
      tailed.next = new ListNode(pQueue.delMin());
      tailed = tailed.next;
    }
    return head.next;
  }
};