## 题解：[20191019]#0029 Divide Two Integers
- **题干**   
给出一个除数和被除数，返回被除数除以除数的商，要求不使用乘法、除法和模运算。   
    示例：   
    ```javascript
    // e.g.1
    Input: dividend = 10, divisor = 3
    Output: 3
    // e.g.2
    Input: dividend = 7, divisor = -3
    Output: -2
    ``` 
    说明：   
    - 除数和被除数都是32位有符号整数。   
    - 除数不会是0。   
    假设当前的运行环境最大只能够存储32位有符号整数，即[-2^31, 2^31 - 1]，当除法结果溢出时，结果返回2^31 - 1。
    Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 231 − 1 when the division result overflows
- **思路**   
按照除法的本质，就是将【被除数】分为n份，每份大小为【除数】，n为所求。所以可以通过减法来直接实现（虽然有一种超时的预感，但还是要心怀梦想的试一试呐^-^   
Runtime: 3456 ms, faster than 22.86% of JavaScript online submissions for Divide Two Integers.   
Memory Usage: 36.3 MB, less than 33.33% of JavaScript online submissions for Divide Two Integers.   

- **优化思路**   
第一思路竟然过了，虽然数据很醉人。考虑优化的思路，其实可以通过一种类似贪心算法的思路，以除数为一步，一开始被除数减去除数，也就是跨一步，假如成功了，下次进行相减时，可以尝试跨两步，以此类推，直到差小于当前减数，则以差作为下一个被除数进行递归运算。   
Runtime: 76 ms, faster than 63.11% of JavaScript online submissions for Divide Two Integers.   
Memory Usage: 36.3 MB, less than 33.33% of JavaScript online submissions for Divide Two Integers.      

- **高票答案对比**   
最高票：https://leetcode.com/problems/divide-two-integers/discuss/13407/C%2B%2B-bit-manipulations   
Runtime: 64 ms, faster than 93.27% of JavaScript online submissions for Divide Two Integers.   
Memory Usage: 34.9 MB, less than 66.67% of JavaScript online submissions for Divide Two Integers.   
这个思路的中心思想是通过位运算，尝试增大除数，找到当前被除数可接受的最大除数。   
假设被除数为15，除数为3，15-3>0，所以可以尝试增大3，通过左移1位，将除数增大为6；由于15-6>0，通过左移，除数增大为12；当前15-12>0，左移后除数变为24>15。   
所以对于被除数15，可接受的最大除数为12，由于12是3通过左移2次得到的，即为1<<2=4倍，商可以增加4（初始为0）。   
余下的部分为 15 - 12 = 3，则以3为被除数，3为除数，循环以上过程，得到剩余部分的结果，相加即为最终结果。     
