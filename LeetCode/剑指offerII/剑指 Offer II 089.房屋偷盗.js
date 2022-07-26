// @algorithm @lc id=1000245 lang=javascript 
// @title Gu0c2T
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let dp = new Array(nums.length)
    dp[0] = nums[0]
    dp[1] = Math.max(nums[0], nums[1])
    for(let i = 2; i < nums.length; ++i)
        dp[i] = Math.max(dp[i-1], dp[i-2] + nums[i])
    return dp[nums.length-1]
};