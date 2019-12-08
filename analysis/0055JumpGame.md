## 题解：[20191208]#0055 Jump Game
- **题干**   
输入一个非负整数数组，初始化位置位于数组的第一个元素。   
数组中的每个元素代表当前位置可跳转的最大距离。    
输出是否可能到达数组最后一个元素。     
示例：    
  ```
  // e.g.1
  Input: [2,3,1,1,4]
  Output: true
  Explanation: 跳转1步，从下标0到下标1，然后跳转3步到达最后位置
  // e.g.2
  Input: [3,2,1,0,4]
  Output: false
  Explanation: 最远可以到达的位置为下标3，该位置的最大跳转距离为0，所以无法到达最后位置
  ```
- **第一思路**   
这个题目和0045同一个解法，采用广度优先遍历，每一层元素为上一层元素能到达的位置范围。判断此层元素可到达的最远位置等于上一层可达到的最远位置，则停止遍历，此时获得可达到的最远位置，如果不等于数组的最后位置，则返回false。时间复杂度O(n)。       
Runtime: 56 ms, faster than 83.07% of JavaScript online submissions for Jump Game.   
Memory Usage: 35.6 MB, less than 40.00% of JavaScript online submissions for Jump Game.   
- **优化思路**   
无。   

- **高票答案对比**   
高票思路：https://leetcode.com/problems/jump-game/discuss/20917/Linear-and-simple-solution-in-C%2B%2B    
遍历数组，比较当前位置可到达的最远距离和已知的可达到最远距离，记录目前位置可到达的最远距离。如遍历到下标大于可到达的最远距离，则退出遍历。           
Runtime: 56 ms, faster than 83.07% of JavaScript online submissions for Jump Game.   
Memory Usage: 35.6 MB, less than 40.00% of JavaScript online submissions for Jump Game.   