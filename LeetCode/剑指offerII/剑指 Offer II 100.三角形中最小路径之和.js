// @algorithm @lc id=1000286 lang=javascript 
// @title IlPe0q
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    let n = triangle.length
    let dp = new Array(n)
    dp[0] = triangle[0][0]
    for (let i = 1; i < n; i++) {
        dp[i] = dp[i-1] + triangle[i][i]
        for (let j = i-1; j > 0; --j)
            dp[j] = Math.min(dp[j - 1], dp[j]) + triangle[i][j]
        dp[0] += triangle[i][0]
    }
    return Math.min(...dp)
};
// 2
// 3 4
// 6 5 7
// 4 1 8 3