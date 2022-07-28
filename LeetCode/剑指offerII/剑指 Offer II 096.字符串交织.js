// @algorithm @lc id=1000277 lang=javascript 
// @title IY6buf
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    if(s1.length + s2.length != s3.length) return false
    let dp = new Array(s1.length+1).fill(0).map(() => new Array(s2.length+1).fill(false))
    // dp[i][j] 表示 s1[0...i-1] + s2[0...j-1] 是否可以交织到 s3[0...i+j-1]
    dp[0][0] = true 
    for(let i = 0; i <= s1.length; i++) {
        for(let j = 0; j <= s2.length; j++) {
            if(i) dp[i][j] |= dp[i-1][j] && s1[i-1] == s3[i+j-1]
            if(j) dp[i][j] |= dp[i][j-1] && s2[j-1] == s3[i+j-1]
        }
    }
    return dp[s1.length][s2.length]
};