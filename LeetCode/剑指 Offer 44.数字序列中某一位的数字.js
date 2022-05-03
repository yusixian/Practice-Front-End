// @algorithm @lc id=100313 lang=javascript 
// @title shu-zi-xu-lie-zhong-mou-yi-wei-de-shu-zi-lcof
/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
    let i = 1
    while(i * Math.pow(10, i) < n) {
        n += Math.pow(10, i)
        ++i
    }
    let res = `${Math.floor(n / i)}`
    return parseInt(res[n % i])
};