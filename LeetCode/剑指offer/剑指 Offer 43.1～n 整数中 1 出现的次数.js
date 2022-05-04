// @algorithm @lc id=100309 lang=javascript 
// @title 1nzheng-shu-zhong-1chu-xian-de-ci-shu-lcof
/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function(n) {
    let res = 0
    let mulk = 1
    while(n >= mulk) {
        let rest = Math.min(Math.max(n%(mulk*10)-mulk+1, 0), mulk)
        res += Math.floor(n/(mulk*10))*mulk + rest
        mulk *= 10
    }
    return res
};