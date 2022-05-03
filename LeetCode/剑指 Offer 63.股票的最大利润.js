// @algorithm @lc id=100344 lang=javascript 
// @title gu-piao-de-zui-da-li-run-lcof
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let ans = 0
    let min = prices[0]
    for(let i = 1; i < prices.length; ++i) {
        if(prices[i] < min) min = prices[i]
        else ans = Math.max(ans, prices[i] - min)
    }
    return ans
};