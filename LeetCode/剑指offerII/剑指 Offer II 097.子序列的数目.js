// @algorithm @lc id=1000280 lang=javascript 
// @title 21dk04
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
    let [m, n] = [s.length, t.length];
    if(m < n) return 0;
    let dp = new Array(m+1).fill(0).map(() => new Array(n+1).fill(0));
    // dp[i][j] 表示 s[i:] 中 t[j:] 子序列出现的个数
    for(let i = 0; i <= m; ++i)    // j=n-1时 dp[i][j] = 1
        dp[i][n] = 1;
    for(let i = m-1; i >= 0; --i) {
        for(let j = n-1; j >= 0; --j) {
            if(s[i] == t[j]) dp[i][j] = dp[i+1][j+1] + dp[i+1][j];
            else dp[i][j] = dp[i+1][j]
        }
    }
    return dp[0][0]
};