// @algorithm @lc id=1000324 lang=javascript 
// @title g5c51o
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let m = new Map()
    let n = nums.length
    for(let i = 0; i < n; ++i) {
        m.set(nums[i], (m.get(nums[i]) || 0)+1)
    }
    const arr = Array.from(m)
    arr.sort((a, b) => b[1]-a[1])
    return arr.slice(0, k).map((a) => a[0])
};