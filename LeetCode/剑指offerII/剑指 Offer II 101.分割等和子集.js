// @algorithm @lc id=1000287 lang=javascript 
// @title NUPfPr
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    // 这年头背包问题都是easy了吗！！！
    if(nums.length < 2) return false
    const n = nums.length
    let maxNum = 0
    const sum = nums.reduce((pre, cur) => {
        maxNum = Math.max(maxNum, cur)
        return pre + cur
    })
    if(sum & 1) return false
    const tar = sum / 2
    if(maxNum > tar) return false
    const dp = new Array(tar + 1).fill(false)
    // 背包问题 
    dp[0] = true
    for(let i = 0; i < n; i++)
        for(let j = tar; j >= nums[i]; --j)
        dp[j] |= dp[j - nums[i]]
    return dp[tar]
};