// @algorithm @lc id=100330 lang=javascript 
// @title zuo-xuan-zhuan-zi-fu-chuan-lcof
/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function(s, n) {
    return s.substr(n) + s.substr(0, n);
};