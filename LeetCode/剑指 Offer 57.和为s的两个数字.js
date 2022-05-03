// @algorithm @lc id=100322 lang=javascript 
// @title he-wei-sde-liang-ge-shu-zi-lcof
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let [l, r] = [0, nums.length - 1]
    while (l < r) {
        let sum = nums[l] + nums[r]
        if (sum === target) return [nums[l], nums[r]]
        else if (sum < target) ++l;
        else  --r 
    }
};
// var twoSum = function(nums, target) {
//     let m = new Map()
//     for(let i = 0; i < nums.length; ++i) {
//         if(m.has(target - nums[i])) return [target - nums[i], nums[i]]
//         m.set(nums[i], i)
//     }
// };