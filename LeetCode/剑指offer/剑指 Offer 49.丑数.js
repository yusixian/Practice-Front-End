// @algorithm @lc id=100334 lang=javascript 
// @title chou-shu-lcof
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    let dp = new Array(n)
    dp[0] = 1
    let i2 = 0, i3 = 0, i5 = 0
    for (let i = 1; i < n; i++) {
        let m2 = dp[i2] * 2, m3 = dp[i3] * 3, m5 = dp[i5] * 5
        let m = Math.min(Math.min(m2, m3), m5)
        if (m === m2) i2++
        if (m === m3) i3++
        if (m === m5) i5++
        dp[i] = m
    }
    return dp[n-1]
};