// @algorithm @lc id=1000289 lang=javascript 
// @title gaM7Ch
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let dp = new Array(amount + 1).fill(Number.MAX_VALUE)
    // dp[i] 表示组成i金额的最少硬币数
    dp[0] = 0
    for (let i = 1; i <= amount; i++) {
        for(let j = 0; j < coins.length; ++j) {
            if(coins[j] <= i)
                dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1)
        }
    }
    return dp[amount] > amount ? -1 : dp[amount]
};