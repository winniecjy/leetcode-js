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
朴素的遍历思路，每个位置的最小步数都可以通过前面的位置得知。通过一个数组记录每个位置需要的最小步数。时间复杂度为O(n^2)。       
Runtime: 540 ms, faster than 5.14% of JavaScript online submissions for Jump Game II.   
Memory Usage: 36 MB, less than 16.67% of JavaScript online submissions for Jump Game II.   


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
