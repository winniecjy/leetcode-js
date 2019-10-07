## 题解：[20191007]#0023 Merge k Sorted Lists
- **题干**  
合并k个有序链表，返回一个有序链表。分析其复杂度。   
    示例：   
    ```javascript
    Input:
    [
      1->4->5,
      1->3->4,
      2->6
    ]
    Output: 1->1->2->3->4->4->5->6
    ``` 
- **思路**   
这个问题是[0021](https://gitee.com/ccharlotte/leetcode-js/blob/master/analysis/0021MergeTwoSortedLists.md)问题的一个延伸，实际上就是归并排序的某一个阶段问题，将其两两归并后，就可以得出结果，对于n个链表，需要通过logn个阶段来完成，每个阶段的时间复杂度为O(n)，即总节点数，最终时间复杂度为O(nlogn)。   
Runtime: 72 ms, faster than 99.27% of JavaScript online submissions for Merge k Sorted Lists.   
Memory Usage: 37.9 MB, less than 54.05% of JavaScript online submissions for Merge k Sorted Lists.   
- **优化思路**   
无。   

- **高票答案对比**   
最高票：https://leetcode.com/problems/merge-k-sorted-lists/discuss/10528/A-java-solution-based-on-Priority-Queue     
作者通过优先队列来解决这个问题，优先队列中的元素被赋予优先级，当前具有最高优先级的元素先出。优先队列是通过二叉堆实现的，这样每次入队和出队的时间复杂度则为O(logn)，对于所有链表一共个节点，需要入队n次，时间复杂度为O(nlogn)。个人感觉这个问题的实现没必要用到优先队列的结构，作者使用的是java有现成类可以直接调用，刚好复习一下优先队列二叉堆实现。         
Runtime: 88 ms, faster than 76.90% of JavaScript online submissions for Merge k Sorted Lists.   
Memory Usage: 39.7 MB, less than 18.92% of JavaScript online submissions for Merge k Sorted Lists.   