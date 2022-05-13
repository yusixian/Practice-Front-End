// @algorithm @lc id=1000006 lang=javascript 
// @title one-away-lcci
import * as a from 'algm'
/**
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
var oneEditAway = function(first, second) {
    if(Math.abs(first.length - second.length) > 1) return false
    if(first == second) return true
    // 增删改
    if(first.length == second.length) { // 改
        let cnt = 0
        for(let i = 0; i < first.length; i++) {
            if(first[i] != second[i]) cnt++
            if(cnt > 1) return false
        }
        return true
    }
    if(first.length < second.length) return oneEditAway(second, first)
    // 删 first 较长
    let [len1, len2] = [first.length, second.length]
    let [i, j] = [0, 0]
    while(i < len1 && j < len2) {
        if(first[i] == second[j])
            j++
        i++
        if(i-j > 1) {
            return false
        }
    }
    return true
};