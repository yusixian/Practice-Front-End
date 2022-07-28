// @algorithm @lc id=1000274 lang=javascript 
// @title qJnOS7
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    let [m, n] = [text1.length, text2.length]
    let dp = new Array(m+1).fill(0).map(() => new Array(n+1).fill(0))
    for(let i = 1; i <= m; ++i) {
        for(let j = 1; j <= n; ++j) {
            const [c1, c2] = [text1[i-1], text2[j-1]]
            if(c1 == c2) dp[i][j] = dp[i-1][j-1] + 1
            else dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
        }
    }
    return dp[m][n]
};