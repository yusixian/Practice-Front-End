/*
 * @Author: cos
 * @Date: 2022-04-07 15:25:33
 * @LastEditTime: 2022-04-08 20:55:09
 * @LastEditors: cos
 * @Description: 
 * @FilePath: \leetcode\cn\JavaScript\剑指 Offer 47.礼物的最大价值.js
 */
// @algorithm @lc id=100327 lang=javascript 
// @title li-wu-de-zui-da-jie-zhi-lcof
/**
 * @param {number[][]} grid
 * @return {number}
 */
 var maxValue = function(grid) {
    if(grid.length === 0) return 0
    let [m, n] = [grid.length, grid[0].length]
    let dp = new Array(m).fill(0).map(() => new Array(n).fill(0))
    dp[0][0] = grid[0][0]
    for(let i = 1; i < m; ++i) 
        dp[i][0] = dp[i-1][0] + grid[i][0]
    for(let j = 1; j < n; ++j) 
        dp[0][j] = dp[0][j-1] + grid[0][j]
    for(let i = 1; i < m; ++i)
        for(let j = 1; j < n; ++j)
            dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]) + grid[i][j]
    return dp[m-1][n-1]
};