// @algorithm @lc id=100277 lang=javascript 
// @title qing-wa-tiao-tai-jie-wen-ti-lcof
/**
 * @param {number} n
 * @return {number}
 */
var numWays = function(n) {
    if(n in [0, 1]) return 1
    let [p, q] = [1, 1]
    for(let i = 2; i <= n; i++) {
        let temp = q
        q = (p+q) % 1000000007
        p = temp
    }
    return q
};