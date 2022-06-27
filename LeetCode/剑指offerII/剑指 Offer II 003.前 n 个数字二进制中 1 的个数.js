// @algorithm @lc id=1000230 lang=javascript 
// @title w3tCBm
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let dp = new Array(n+1).fill(0)
    let hignBit = 0
    for(let i = 1; i <= n; ++i) {
        if(!(i&(i-1))) // 为2的幂次方
            hignBit = i
        dp[i] = dp[i-hignBit] + 1   // 去掉最高位，
    }
    return dp
};