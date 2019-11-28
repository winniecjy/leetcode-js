## 题解：[20191127]#0045 Jump Game II
- **题干**   
给出一个非重复的整数集合，返回所有可能的排列。    
示例：   
  ```
  Input: [1,2,3]
  Output:
  [
    [1,2,3],
    [1,3,2],
    [2,1,3],
    [2,3,1],
    [3,1,2],
    [3,2,1]
  ]
  ```

- **思路**   
全排列问题。


- **优化思路**   
无。    

- **高票答案对比**   
高票思路：https://leetcode.com/problems/jump-game-ii/discuss/18014/Concise-O(n)-one-loop-JAVA-solution-based-on-Greedy    
BFS思路，可以根据每个节点可到达的距离构造出一个树🌲结构，树的根节点是arr[0]，树的第一层是跳转1步就能到达的节点，第二层是跳转2步能到达的节点，以此类推，...   
对于这个树结构进行深度优先遍历，当找到目标节点时，则结束遍历返回当前层数，时间复杂度为O(n)。关键代码思路如下：        
  ```javascript
  初始化当前层数：level = 0;
  初始化当前能到达的最远位置，由于标识什么位置是当前层的尽头： currFarest = 0;
  记录下一层能到达的最远位置，初始化：nextFarest = 0;
  
  从0开始遍历数组，当前下标为index：
    更新下一层能到达最远位置：nextFarest = max(nextFarest, index+arr[index])
    当已经到达当前层尽头（即index===currFarest）：level++, currFarest=nextFarest

  返回当前层数
  ```

  Runtime: 56 ms, faster than 85.33% of JavaScript online submissions for Jump Game II.   
  Memory Usage: 35.3 MB, less than 100.00% of JavaScript online submissions for Jump Game II.     
