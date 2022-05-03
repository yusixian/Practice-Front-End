// @algorithm @lc id=100316 lang=javascript 
// @title di-yi-ge-zhi-chu-xian-yi-ci-de-zi-fu-lcof
/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function(s) {
    let m = new Map();
    for (let i = 0; i < s.length; i++)
        m.set(s[i], m.has(s[i]) ? 2 : 1);
    for (let i = 0; i < s.length; i++) 
        if (m.get(s[i]) === 1) 
            return s[i];
    return ' ';
};