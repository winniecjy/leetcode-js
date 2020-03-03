## 题解：[20200304]#0071 Simplify Path
- **题干**   
以 Unix 风格给出一个文件的绝对路径，你需要简化它。或者换句话说，将其转换为规范路径。   
在 Unix 风格的文件系统中，一个点（.）表示当前目录本身；此外，两个点 （..） 表示将目录切换到上一级（指向父目录）；两者都可以是复杂相对路径的组成部分。更多信息请参阅：[Linux / Unix中的绝对路径 vs 相对路径](https://www.linuxnix.com/abslute-path-vs-relative-path-in-linuxunix/)   
请注意，返回的规范路径必须始终以斜杠 / 开头，并且两个目录名之间必须只有一个斜杠 /。最后一个目录名（如果存在）不能以 / 结尾。此外，规范路径必须是表示绝对路径的最短字符串。    
  示例：    
  ```JavaScript
  // e.g.1
  Input: "/home/"
  Output: "/home"
  Explanation: Note that there is no trailing slash after the last directory name.

  // e.g.2
  Input: "/../"
  Output: "/"
  Explanation: Going one level up from the root directory is a no-op, as the root level is the highest level you can go.

  // e.g.3
  Input: "/home//foo/"
  Output: "/home/foo"
  Explanation: In the canonical path, multiple consecutive slashes are replaced by a single one.

  // e.g.4
  Input: "/a/./b/../../c/"
  Output: "/c"

  // e.g.5
  Input: "/a/../../b/../c//.//"
  Output: "/c"

  // e.g.6
  Input: "/a//b////c/d//././/.."
  Output: "/a/b/c"
  ```

- **第一思路**   
模拟人处理的方式，将字符串分割为每一层，从左到右对于每一层进行处理：      
  - 对于`.`可以直接移除当前层
  - 对于`..`则去除当前层及上一层
  - 对于末尾`/`直接去除      

  Runtime: 56 ms, faster than 94.91% of JavaScript online submissions for Simplify Path.   
  Memory Usage: 36.1 MB, less than 33.33% of JavaScript online submissions for Simplify Path.   
- **优化思路**   
可以发现空间复杂度比较不理想，因为第一思路新开了一个数组来存储每一个层的数据，然后进行处理。实际上这是一个数组从左到右的累加处理，可以用`reduce`函数进行处理。       
Runtime: 56 ms, faster than 94.91% of JavaScript online submissions for Simplify Path.   
Memory Usage: 35.2 MB, less than 100.00% of JavaScript online submissions for Simplify Path.   
- **高票答案对比**   
高票思路：https://leetcode.com/problems/simplify-path/discuss/25686/Java-10-lines-solution-with-stack   
高票作者使用栈来处理，这是一个符合底层逻辑的思路，对于普通文件路径压入栈中，对于`.`不处理，对于`..`弹出栈顶元素。     
Runtime: 56 ms, faster than 94.91% of JavaScript online submissions for Simplify Path.   
Memory Usage: 35.6 MB, less than 66.67% of JavaScript online submissions for Simplify Path.   