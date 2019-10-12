## 题解：[20191012]#0027 Remove Element
- **题干**   
给定一个数组 nums 和一个值 val，你需要移除所有数值等于 val 的元素，返回移除后数组的新长度。    
要求不使用额外的数组空间，你必须在输入数组上修改，时间复杂度要求O(1)。     
元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。    
    示例：   
    ```javascript
    Given nums = [0,1,2,2,3,0,4,2], val = 2,
    Your function should return length = 5, with the first five elements of nums containing 0, 1, 3, 0, and 4.
    Note that the order of those five elements can be arbitrary.
    It doesn't matter what values are set beyond the returned length.
    ``` 
  说明:
  - 为什么输入的是数组，返回的却是整数？注意该函数为引用传参，即对参数的操作会反映到调用方上。     
- **思路**   
这个题目和0025是一模一样的思路，遍历数组，用一个数字记录已经确认正确的数组下标count，对于元素nums[i]!==val，nums[count++]=nums[i]。时间复杂度O(n)。   
Runtime: 52 ms, faster than 85.23% of JavaScript online submissions for Remove Element.   
Memory Usage: 33.7 MB, less than 94.44% of JavaScript online submissions for Remove Element.   

- **优化思路**   
无

- **高票答案对比**   
最高票：https://leetcode.com/problems/remove-element/discuss/12289/My-solution-for-your-reference    
思路一致。     