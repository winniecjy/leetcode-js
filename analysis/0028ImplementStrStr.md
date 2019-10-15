## 题解：[20191012]#0028 Implement strStr()
- **题干**   
实现strStr()函数，给出一个原始字符串和一个目标字符串，找出目标字符串在原始字符串中第一次出现的下标，如果不存在返回-1。   
    示例：   
    ```javascript
    // e.g.1
    Input: haystack = "hello", needle = "ll"
    Output: 2
    // e.g.2
    Input: haystack = "aaaaa", needle = "bba"
    Output: -1
    ``` 
  说明:
  当目标字符串为空时需要返回什么呢？这在面试的时候是一个好问题，与C中的strstr()和Java中的indexOf()保持一致，此时将会返回0。   
- **思路**   
一个普通的思路，遍历比较一下，时间复杂度O(n*l)，n为原始字符串长度，l为目标字符串长度。   
Runtime: 60 ms, faster than 46.63% of JavaScript online submissions for Implement strStr().   
Memory Usage: 34.9 MB, less than 64.29% of JavaScript online submissions for Implement strStr().   

- **优化思路**   
实际上第二次循环是不必要的，可以截取出needle长度的子字符串，比较needle和子字符串即可，时间复杂度O(n)。    
Runtime: 52 ms, faster than 84.97% of JavaScript online submissions for Implement strStr().    
Memory Usage: 33.8 MB, less than 89.29% of JavaScript online submissions for Implement strStr().    

- **高票答案对比**   
思路和第一思路是一致的，就是双重循环，由于减少了一些判断，所以数据也好一些。    
Runtime: 56 ms, faster than 66.80% of JavaScript online submissions for Implement strStr().   
Memory Usage: 35.2 MB, less than 39.29% of JavaScript online submissions for Implement strStr().   

顺便学习了一个英语成语：needle in a haystack，在干草堆里找针，表示大海捞针，非常困难。   