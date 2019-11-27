## 题解：[20191127]#0045 Jump Game II
- **题干**   
输入一个非负整数数组，初始化位置为数组的第一个位置。     
每个元素代表在当前位置跳转出去的最远距离，目标是用最少的跳转次数到达数组最后位置。   
示例：    
```
输入：[2,3,1,1,4]
输出：2
解释：先跳1步，从下标0跳转到下标1；然后跳转3步到达最后下标
```
说明：   
可以假设总是能到达数组最后位置。    

- **思路**   
典型的动态规划问题，当前步骤的答案可以依赖上一步骤答案得出。时间复杂度O(sLen*pLen)。      
Runtime: 72 ms, faster than 70.12% of JavaScript online submissions for Multiply Strings.   
Memory Usage: 38.8 MB, less than 25.00% of JavaScript online submissions for Multiply Strings.     


- **优化思路**   
无。  
 

- **高票答案对比**   
高票思路：https://leetcode.com/problems/multiply-strings/discuss/17605/Easiest-JAVA-Solution-with-Graph-Explanation   
和第一思路是一致的，但是为了便于进位，我的第一思路是用数组从低位到高位存储结果，当有进位的时候就push新数据。作者是直接给出了足够的存储空间，数组从高位到低位存储结果，这样最后返回结果的时候就不需要再进行逆序。  
Runtime: 72 ms, faster than 70.12% of JavaScript online submissions for Multiply Strings.   
Memory Usage: 38.8 MB, less than 25.00% of JavaScript online submissions for Multiply Strings.     
