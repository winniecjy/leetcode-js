## 题解：[20191011]#0026 Remove Duplicates from Sorted Array
- **题干**  
给你一个有序数组，移除数组中的重复元素，使得每个元素在数组中只出现一次，返回新数组的长度。   
要求不能使用另外的空间来生成一个新的数组，你必须要在输入的数组上进行操作，且空间复杂度为O(1)。    
    示例：   
    ```javascript
    Given nums = [0,0,1,1,1,2,2,3,3,4],
    Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively.
    It doesn't matter what values are set beyond the returned length.
    ``` 
  说明:
  - 为什么输入的是数组，返回的却是整数？注意该函数为引用传参，即对参数的操作会反映到调用方上。     
- **思路**   
由于题目要求不能使用另外的空间生成数组，那么解法就比较有限了，对于一个有序数组，只需要遍历一次，对于重复的数字进行去除，时间复杂度为O(n)。   
Runtime: 92 ms, faster than 24.67% of JavaScript online submissions for Remove Duplicates from Sorted Array.   
Memory Usage: 37.6 MB, less than 25.00% of JavaScript online submissions for Remove Duplicates from Sorted Array.   

- **优化思路**   
数据看起来普普通通，考虑到数组中的删除操作复杂度较高，所以可以将删除操作合并处理（后来发现不删除也可以AC），通过变量记录当前已处理的下标，初始为0，分情况处理：  
- nums[curr] === nums[len-1]：循环过滤
- nums[curr] !== nums[len-1]：将nums[len]赋值为nums[curr]
Runtime: 68 ms, faster than 84.47% of JavaScript online submissions for Remove Duplicates from Sorted Array.   
Memory Usage: 36.7 MB, less than 100.00% of JavaScript online submissions for Remove Duplicates from Sorted Array.    

- **高票答案对比**   
最高票：https://leetcode.com/problems/remove-duplicates-from-sorted-array/discuss/11782/Share-my-clean-C%2B%2B-code   
思路一致。   
这个题目比较简单，不过借此也可以回忆一下，js中常用的数组去重方案：   
  ```
  let arr = [0,0,0,1,23,4]

  // 方法1：通过ES6 Set来去重
  // 有点：代码最简洁
  // 缺点：不适用于对象数组；
  //      封装性很好，现在有一个疑问是，这个方法是否能够保持数组顺序
  Array.from(new Set(arr))

  // 方法2：朴素的双重嵌套
  // 优点：保留数组顺序
  // 缺点：复杂度较高，O(n^2)
  let map = {};
  for (let i=0; i<arr.length; i++) {
    for (let j=i+1; j<arr.length; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j,1);
        j--;
      }
    }
  }

  // 方法3：通过indexOf去重
  // 优点：保留数组顺序，复杂度优化O(n)
  // 缺点：空间复杂度提升了
  let newArr = [];
  for (let i=0; i<arr.length; i++) {
    if (newArr.indexOf(arr[i]) === -1) {
      newArr.push(arr[i]);
    }
  }

  // 方法4：利用sort排序后处理，也就是本题目的做法
  // 优点：时间复杂度和空间复杂度兼优化
  // 缺点：改变了数组的顺序
  ```