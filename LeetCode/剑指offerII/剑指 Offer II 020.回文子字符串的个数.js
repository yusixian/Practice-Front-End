// @algorithm @lc id=1000256 lang=javascript 
// @title a7VOhD
/*
 * @Author: cos
 * @Date: 2022-07-03 20:11:19
 * @LastEditTime: 2022-07-03 21:32:46
 * @LastEditors: cos
 * @Description: 做了好多遍的题
 * @FilePath: \Practice-Front-End\LeetCode\cn\JavaScript\剑指 Offer II 020.回文子字符串的个数.js
 */
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let n = s.length
    // dp i j 下标i~j是否为回文
    let dp = new Array(n).fill(0).map(() => new Array(n).fill(false)) 
    let res = 0
    for(let i = 0; i < n; ++i) {
        dp[i][i] = true, ++res
        if(i && s[i-1] == s[i]) 
            dp[i-1][i] = true, ++res
    }
    for(let k = 3; k <= n; ++k) {
        for(let i = 0; i+k-1 < n; ++i) {
            let e = i+k-1
            if(dp[i+1][e-1] && s[i] == s[e]) 
                dp[i][e] = true, ++res
        }
    }
    return res
};