// @algorithm @lc id=100297 lang=javascript 
// @title zheng-ze-biao-da-shi-pi-pei-lcof
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let dp = new Array(s.length+1).fill(0).map(() => new Array(p.length+1).fill(false))
    dp[0][0] = true
    for(let i = 0; i <= s.length; ++i) {
        for(let j = 1; j <= p.length; ++j) {
            let c2 = p[j-1]
            if(c2 == '*') {
                dp[i][j] |= dp[i][j-2]  // 不使用*
                c2 = p[j-2]
                if(i != 0 && (c2 == '.' || s[i-1] == c2))
                    dp[i][j] |= dp[i-1][j]
            } else if(i != 0 && (c2 == '.' || s[i-1] == c2)) {
                    dp[i][j] |= dp[i-1][j-1]
            }
        }
    }
    return dp[s.length][p.length]
};