## 题解：[20191226]#0071 Simplify Path
- **题干**   
以 Unix 风格给出一个文件的绝对路径，你需要简化它。或者换句话说，将其转换为规范路径。   
在 Unix 风格的文件系统中，一个点（.）表示当前目录本身；此外，两个点 （..） 表示将目录切换到上一级（指向父目录）；两者都可以是复杂相对路径的组成部分。更多信息请参阅：Linux / Unix中的绝对路径 vs 相对路径   
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
 
- **优化思路**   
无  
- **高票答案对比**   
