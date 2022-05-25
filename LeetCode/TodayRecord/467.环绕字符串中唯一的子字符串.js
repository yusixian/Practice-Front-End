// @algorithm @lc id=467 lang=javascript 
// @title unique-substrings-in-wraparound-string
import * as a from 'algm'
// @test("a")=1
// @test("cac")=2
// @test("zab")=6
/**
 * @param {string} p
 * @return {number}
 */
var findSubstringInWraproundString = function(p) {
    let dp = Array(26).fill(0)
    let maxlen = 1
    let n = p.length
    for(let i = 0; i < n; ++i) {
        if(i > 0 && (p.charCodeAt(i) - p.charCodeAt(i-1) + 26) % 26 === 1) {
            ++maxlen
        } else maxlen = 1
        let nowp = p.charCodeAt(i) - 'a'.charCodeAt()
        dp[nowp] = Math.max(dp[nowp], maxlen)
    }
    return dp.reduce((a, b) => a + b)
};
// 找 p 在 s 中出现的非空子串数目
// dp[i] 表示以 p[i] 结尾且在 s 中的最长子串长度