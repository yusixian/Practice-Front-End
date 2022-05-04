// @algorithm @lc id=100296 lang=javascript 
// @title da-yin-cong-1dao-zui-da-de-nwei-shu-lcof
/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function(n) {
    let maxv = Math.pow(10, n)
    let res = []
    for(let i = 1; i < maxv; ++i) 
        res.push(i)
    return res
};