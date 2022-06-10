// @algorithm @lc id=730 lang=javascript 
// @title count-different-palindromic-subsequences
// @test("bccb")=6
// @test("abcdabcdabcdabcdabcdabcdabcdabcddcbadcbadcbadcbadcbadcbadcbadcba")=104860361
/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequences = function(s) {
    const mod = 1e9+7
    const n = s.length
    let dp = new Array(n).fill(0).map(()=>new Array(n).fill(0))
    let next = new Array(n).fill(0).map(()=>new Array(4).fill(0))
    let pre = new Array(n).fill(0).map(()=>new Array(4).fill(0))
    for (let i = 0; i < n; i++)
        dp[i][i] = 1
    const pos = new Array(n)
    pos[0] = pos[1] = pos[2] = pos[3] = -1
    for(let i = 0; i < n; i++){
        for(let c = 0; c < 4; c++) {
            pre[i][c] = pos[c];
        }
        pos[s[i].charCodeAt() - 'a'.charCodeAt()] = i;
    }
    for (let i = n - 1; i >= 0; i--) {
        for (let c = 0; c < 4; c++) {
            next[i][c] = pos[c];
        }
        pos[s[i].charCodeAt() - 'a'.charCodeAt()] = i;
    }

    for (let len = 2; len <= n; len++) {
        for (let i = 0; i + len <= n; i++) {
            let j = i + len - 1;
            if (s[i] === s[j]) {
                let low = next[i][s[i].charCodeAt() - 'a'.charCodeAt()];
                let high = pre[j][s[i].charCodeAt() - 'a'.charCodeAt()];
                if (low > high) {
                    dp[i][j] = (2 + dp[i + 1][j - 1] * 2) % mod;
                } else if (low === high) {
                    dp[i][j] = (1 + dp[i + 1][j - 1] * 2) % mod;
                } else {
                    dp[i][j] = (dp[i + 1][j - 1] * 2 % mod - dp[low + 1][high - 1] + mod) % mod;
                }
            } else {
                dp[i][j] = ((dp[i + 1][j] + dp[i][j - 1]) % mod - dp[i + 1][j - 1] + mod) % mod;
            }
        }
    }
    return dp[0][n - 1];
};
// 不会 区间dp 看了题解 每日一题鲨我