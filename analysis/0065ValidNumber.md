## 题解：[20191220]#0065 Valid Number
- **题干**   
当输入的字符串可以转化为十进制数字，则认为是合法的。       
说明: 我们有意将问题陈述地比较模糊。在实现代码之前，你应当事先思考所有可能的情况。这里给出一份可能存在于有效十进制数字中的字符列表：     
  - 数字 0-9
  - 指数 - "e"
  - 正/负号 - "+"/"-"
  - 小数点 - "."

  当然，在输入中，这些字符的上下文也很重要。
  示例：    
  ```JavaScript
  // e.g.1
  "0" => true
  " 0.1 " => true
  "abc" => false
  "1 a" => false
  "2e10" => true
  " -90e3   " => true
  " 1e" => false
  "e3" => false
  " 6e-1" => true
  " 99e2.5 " => false
  "53.5e93" => true
  " --6 " => false
  "-+3" => false
  "95a54e53" => false
  ```

- **第一思路**   
正则匹配实现。      
Runtime: 80 ms, faster than 84.15% of JavaScript online submissions for Valid Number.   
Memory Usage: 36.2 MB, less than 100.00% of JavaScript online submissions for Valid Number.   
- **优化思路**   
无  
- **高票答案对比**   
高票思路：https://leetcode.com/problems/valid-number/discuss/23741/The-worst-problem-i-have-ever-met-in-this-oj    
同第一思路，如作者所说，这个题目有些不合理了，求正则不给全匹配要求。在AC代码中测试如'00'，'2e0'，返回结果都为true。          