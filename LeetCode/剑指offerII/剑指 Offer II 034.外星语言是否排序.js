// @algorithm @lc id=1000276 lang=javascript 
// @title lwyVBB
import * as a from 'algm'
/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    let m = new Map()
    for(let i = 0; i < order.length; ++i) {
        m.set(order[i], i)
    }
    function check(s1, s2) {
        let idx = 0
        for(let i = 0; i < s1.length; ++i) {
            const v1 = m.get(s1[i])
            const v2 = i < s2.length ? m.get(s2[i]): -1
            if(v1 < v2) return true
            else if(v1 > v2) return false
            else continue
        }
        return true
    }
    for(let i = 0; i+1 < words.length; ++i) {
        if(!check(words[i], words[i+1])) return false
    }
    return true
};