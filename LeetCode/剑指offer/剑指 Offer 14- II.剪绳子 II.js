// @algorithm @lc id=100285 lang=javascript 
// @title jian-sheng-zi-ii-lcof
/**
 * @param {number} n
 * @return {number}
 */
 var cuttingRope = function(n) {
    if(n <= 3) return n-1
    let res = 1
    while(n > 4){
        res = (res * 3) % 1000000007
        n -= 3
    }
    return (res * n) % 1000000007
};