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
  ```javascript
  let testArr = [1,1,'true','true',true,true,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 'string', 'string',{},{}, {a:1}, {a:1}];
  // 方法1：通过ES6 Set来去重
  // 有点：代码最简洁
  // 缺点：封装性太好导致，现在有一个疑问是，这个方法是否能够保持数组顺序，需要去看一下底层实现
  //      Object无法去重
  function unique(arr) {
    return Array.from(new Set(arr));
  }

  // 方法2：朴素的双重嵌套
  // 优点：保留数组顺序
  // 缺点：复杂度较高O(n^2)，NaN和Object无法去重
  function unique(arr) {
    let map = {};
    for (let i=0; i<arr.length; i++) {
      for (let j=i+1; j<arr.length; j++) {
        if (arr[i] === arr[j]) {
          arr.splice(j,1);
          j--;
        }
      }
    }
    return arr;
  }

  // 方法3：利用sort排序后处理，也就是本题目的做法
  // 优点：时间复杂度O(nlogn+n)和空间复杂度O(1)兼优化
  // 缺点：改变了数组的顺序，NaN和Object无法去重
  function unique(arr) {
    arr = arr.sort();
    let count = 0;
    for(let i=0; i<arr.length; i++) {
      if(arr[i] == arr[i-1]) count++;
      else arr[i-count] = arr[i];
    }
    arr.splice(arr.length-count);
    return arr;
  };
  
  // 方法4：利用hasOwnProperty
  // 优点：速度优于indexOf（其底层的实现原理是hash查找，indexOf就是普通的循环）
  // 缺点：空间复杂度O(2n)，Object无法去重
  function unique(arr) {
    let hashMap = {};
    let newArr = [];
    for (let i=0; i<arr.length; i++) {
      if (!hashMap.hasOwnProperty(arr[i])) {
        hashMap[arr[i]] = true;
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }

  /*** 以上4种是基础，以下均为一些延伸方案 ***/

  // 方法5：通过indexOf/includes去重
  // 优点：保留数组顺序
  // 缺点：时间复杂度为O(n^2)，空间复杂度为O(n)，都较高
  // 注意：indexOf对于NaN和Object无法去重，includes对于Object无法去重
  function unique(arr) {
    let newArr = [];
    for (let i=0; i<arr.length; i++) {
      if (newArr.indexOf(arr[i]) === -1) {
        newArr.push(arr[i]);
      }
      // if (!newArr.includes(arr[i])) {
      //   newArr.push(arr[i]);
      // }
    }
    return newArr;
  }

  // 方法6：利用filter去重
  // 优点：代码简洁
  // 缺点：处理NaN有问题，对于arr.indexOf(NaN)永远为-1，所以会被直接去除，而不像其他方案只是保留重复数据
  function unique(arr) {
    return arr.filter((item, index, arr) => {
      return arr.indexOf(item, 0) === index;
    })
  }

  // 方法7：利用reduce+includes
  // 优点：代码简洁，实际上就是includes方案的代码简化版本
  // 缺点：includes对于Object无法去重
  function unique(arr) {
    return arr.reduce((prev, cur) => prev.includes(cur) ? prev : [...prev,cur],[]);
  }
  ```

- **去重方法参考**   
[[1] JavaScript数组去重（12种方法，史上最全）](https://segmentfault.com/a/1190000016418021#articleHeader4)