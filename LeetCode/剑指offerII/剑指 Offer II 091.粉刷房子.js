// @algorithm @lc id=1000268 lang=javascript 
// @title JEj789
/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCost = function(costs) {
    let n = costs.length
    let dp = new Array(n).fill(0).map(() => new Array(3))
    dp[0][0] = costs[0][0]
    dp[0][1] = costs[0][1]
    dp[0][2] = costs[0][2]
    for(let i = 1; i < n; ++i) {
        dp[i][0] = Math.min(dp[i-1][1], dp[i-1][2]) + costs[i][0]
        dp[i][1] = Math.min(dp[i-1][0], dp[i-1][2]) + costs[i][1]
        dp[i][2] = Math.min(dp[i-1][0], dp[i-1][1]) + costs[i][2]
    }
    return Math.min(dp[n-1][0], dp[n-1][1], dp[n-1][2])
};