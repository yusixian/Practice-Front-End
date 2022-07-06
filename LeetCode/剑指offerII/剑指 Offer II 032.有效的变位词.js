// @algorithm @lc id=1000273 lang=javascript 
// @title dKk3P7
import * as a from 'algm'
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length != t.length || s == t) return false
    let m1 = new Map()
    for(let i = 0; i < s.length; ++i) {
        m1.set(s[i], (m1.get(s[i]) || 0) + 1)
    }
    for(let i = 0; i < t.length; ++i) {
        m1.set(t[i], (m1.get(t[i]) || 0) - 1)
        if(m1.get(t[i]) < 0) return false
    }
    for(let [val, idx] of m1.entries()) {
        console.log(val, idx)
    }
    return true
};