// @algorithm @lc id=100274 lang=javascript 
// @title fei-bo-na-qi-shu-lie-lcof
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n in [0, 1]) return n
    let [p, q] = [0, 1]
    for(let i = 2; i <= n; i++) {
        let temp = q
        q = (p+q) % 1000000007
        p = temp
    }
    return q
};