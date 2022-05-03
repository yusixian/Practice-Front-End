// @algorithm @lc id=100345 lang=javascript 
// @title qiu-12n-lcof
/**
 * @param {number} n
 * @return {number}
 */
var sumNums = function(n) {
    n && (n += sumNums(n-1))
    return n
};