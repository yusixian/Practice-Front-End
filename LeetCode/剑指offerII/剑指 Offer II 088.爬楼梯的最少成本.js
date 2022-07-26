// @algorithm @lc id=1000243 lang=javascript 
// @title GzCJIP
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let dp = new Array(cost.length).fill(0)
    dp[0] = cost[0]
    dp[1] = cost[1]
    for(let i = 2; i < cost.length; ++i) {
        dp[i] = Math.min(dp[i-1], dp[i-2]) + cost[i]
    }
    return Math.min(dp[cost.length-1], dp[cost.length-2])
};