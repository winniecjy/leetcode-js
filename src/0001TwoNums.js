/**
 * 第一思路
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSumNormal = function(nums, target) {
    for (let i=0; i<nums.length; i++) {
        for (let j=i+1; j<nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};


/**
 * 优化思路
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSumBetter = function(nums, target) {
    let wantedMap = new Map();
    for (let i=0; i<nums.length; i++) {
        const num = nums[i];
        const wanted = target - num;
        if (wantedMap.has(num)) {
            const prev = wantedMap.get(num);
            return [prev, i];
        } else {
            wantedMap.set(wanted, i);
        }
    }
};

/**
 * 高票思路
 * https://leetcode.com/problems/two-sum/discuss/17/Here-is-a-Python-solution-in-O(n)-time
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSumVoted = function(nums, target) {
    let prevMap = new Map();
    for (let i=0; i<nums.length; i++) {
        const num = nums[i];
        const wanted = target - num;
        if (prevMap.has(wanted)) {
            const prev = prevMap.get(wanted);
            return [prev, i];
        } else {
            prevMap.set(num, i);
        }
    }
};