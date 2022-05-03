// @algorithm @lc id=100335 lang=javascript 
// @title bu-yong-jia-jian-cheng-chu-zuo-jia-fa-lcof
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var add = function(a, b) {
    while(b) {
        let c = (a&b)<<1  // 进位和
        a = a^b
        b = c
    }
    return a
};