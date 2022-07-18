// @algorithm @lc id=1000329 lang=javascript 
// @title iSwD2y
/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function(words) {
    words = [...new Set(words)].sort((a, b) => b.length - a.length)
    let root = {}
    let res = 0
    for(const word of words) {
        let p = root
        for(let i = word.length-1; i >= 0; --i) {
            if(!p[word[i]]) p[word[i]] = {}
            p = p[word[i]] 
        }
        const keys = Object.keys(p)
        if(!keys.length) res += word.length+1
    }
    return res
};