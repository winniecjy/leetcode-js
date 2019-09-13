## 题解：[20190913]#0006 ZigZag Conversion
- **题干**   
字符串"PAYPALISHIRING"通过Z字形变换排列，给出行数，返回按从左到右从上到下的顺序返回一个字符串。     
示例：   
    ```javascript
    // e.g. 1
    Input: s = "PAYPALISHIRING", numRows = 3
    Output: "PAHNAPLSIIGYIR"
    Explanation:
    P   A   H   N
    A P L S I I G
    Y   I   R

    // e.g.2
    Input: s = "PAYPALISHIRING", numRows = 4
    Output: "PAHNAPLSIIGYIR"
    Explanation:
    P     I    N
    A   L S  I G
    Y A   H R
    P     I 
    ```
- **思路**   
第一思路是找规律，按照Z字排布的规律，每个下标的所属的行数是固定的，比如对于行数为4，其归属函数为012321012321...，按照规律得到每一行的字符串并拼接。假设字符串长度为n，则复杂度为O(n)；       
Runtime: 92 ms, faster than 62.64% of JavaScript online submissions for ZigZag Conversion.   
Memory Usage: 38.2 MB, less than 88.89% of JavaScript online submissions for ZigZag Conversion.   
- **优化思路**   
按照行对应下标规律来构造字符串，可以减少一些判断，对于除了首行和尾行以外的行数，其完整列（也就是每一列都包含字符）间隔为numRows*2-2，每一个完整列之间有一个字符，其对应下标为`完整列下标 - (完整列间隔 - 当前行数*2)`，举个例子如下：   
  ```
    0 1 2 3 4 5 6 
  0 P     I     N
  1 A   L S   I G
  2 Y A   H R
  3 P     I
  ```
  0，3，6为完整列，对于第0行和第3行，完整列之间无其他字符，对于第1行，第0列和第3列的元素A和S需要经过YPALI五个元素，之间的字符位于第2列，A和L中需要经过YAP三个元素。可以计算到第3列和第0列元素的下标间隔为`interval = numRows*2-2 = 6`，第0列和第2列元素的下标间隔为`interval - 当前行*2`。    
  Runtime: 76 ms, faster than 96.47% of JavaScript online submissions for ZigZag Conversion.   
  Memory Usage: 38.5 MB, less than 88.89% of JavaScript online submissions for ZigZag Conversion.    
- **高票答案对比**   
最高票：https://leetcode.com/problems/zigzag-conversion/discuss/3403/Easy-to-understand-Java-solution       
将Z行走位划分为竖向和斜向，这样就不要看规律了，直接模拟行为就可以了。   
Runtime: 76 ms, faster than 96.47% of JavaScript online submissions for ZigZag Conversion.   
Memory Usage: 38.8 MB, less than 77.78% of JavaScript online submissions for ZigZag Conversion.   
