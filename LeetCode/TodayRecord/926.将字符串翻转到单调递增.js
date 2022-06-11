// @algorithm @lc id=962 lang=javascript 
// @title flip-string-to-monotone-increasing
// @test("00110")=1
// @test("010110")=2
// @test("00011000")=2
/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function(s) {
    let n = s.length
    let sum = new Array(n+1).fill(0)
    for(let i = 1; i <= n; i++)
        sum[i] = sum[i-1] + (s[i-1]=='1'?1:0)
    let res = n
    for(let i = 1; i <= n; i++) {
        let [l, r] = [sum[i-1], (n-i-(sum[n]-sum[i]))]
        res = Math.min(res, l+r)
    }
    return res
};