// @algorithm @lc id=1000252 lang=javascript 
// @title wtcaE1
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length == 0) return 0
    let map = new Map()
    let maxlen = 0
    let r = 0
    for(let i = 0; i < s.length; ++i) {
        if(i != 0) map.delete(s[i-1])
        while(r < s.length && !map.has(s[r])) {
            map.set(s[r], true)
            ++r
        }
        maxlen = Math.max(maxlen, r-i)
    }
    return maxlen
};