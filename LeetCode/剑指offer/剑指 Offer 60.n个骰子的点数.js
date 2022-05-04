// @algorithm @lc id=100339 lang=javascript 
// @title nge-tou-zi-de-dian-shu-lcof
/**
 * @param {number} n
 * @return {number[]}
 */
var dicesProbability = function(n) {
    let dp = new Array(6).fill(1/6)
    for(let i = 2; i <= n; ++i) {   // i个骰子
        let next = new Array(5*i+1).fill(0) // i*6-(i-1)
        for(let j = 0;  j < dp.length; ++j)
            for(let k = 0; k < 6; ++k)
                next[j+k] += dp[j]*1/6
        dp = next
    }
    return dp
};