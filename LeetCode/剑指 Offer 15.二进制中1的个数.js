// @algorithm @lc id=100292 lang=javascript 
// @title er-jin-zhi-zhong-1de-ge-shu-lcof
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let res = 0
    while(n) {
        n &= n-1
        ++res
    }
    return res
};